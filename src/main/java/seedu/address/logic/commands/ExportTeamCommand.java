package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.util.List;
import java.util.logging.Logger;

import seedu.address.commons.core.index.Index;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.TeamCommandsParser;
import seedu.address.model.Model;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

/**
 * Export team members' details to the user's clipboard.
 */
public class ExportTeamCommand extends Command {

    public static final String COMMAND_WORD = "export";

    public static final String MESSAGE_USAGE = TeamCommandsParser.COMMAND_WORD + " TEAM_INDEX " + COMMAND_WORD
            + ": Exports team members' details identified by the index number used in the displayed team list.\n"
            + "Parameters: TEAM_INDEX (must be a positive integer)\n"
            + "Example: " + TeamCommandsParser.COMMAND_WORD + " 1 " + COMMAND_WORD;

    public static final String MESSAGE_EXPORT_DETAILS_SUCCESS = "Details copied to clipboard.";

    private static Logger logger = Logger.getLogger("ExportTeamCommand");
    private final Index targetIndex;

    /**
     * Creates an ExportTeamCommand to add the specified {@code Contact}
     */
    public ExportTeamCommand(Index targetIndex) {
        requireNonNull(targetIndex);
        this.targetIndex = targetIndex;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Team> teamList = model.getCodeConnect().getTeamList();

        if (targetIndex.getZeroBased() >= teamList.size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }

        Team teamToExport = teamList.get(targetIndex.getZeroBased());
        if (teamToExport.getMembers().size() == 0) {
            throw new CommandException(Messages.MESSAGE_EMPTY_TEAM);
        }

        String teamDetails = getDetails(teamToExport);
        logger.info("Copying team details to clipboard...");
        copyToClipboard(teamDetails);

        return new CommandResult(String.format(MESSAGE_EXPORT_DETAILS_SUCCESS, Messages.format(teamToExport)));
    }

    private void copyToClipboard(String details) {
        assert(details.length() != 0); // details should not be empty
        StringSelection stringSelection = new StringSelection(details);
        Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
        clipboard.setContents(stringSelection, null);
    }

    public String getDetails(Team teamToExport) {
        logger.info("Formatting details of team members to export...");
        StringBuilder details = new StringBuilder();
        List<Contact> teamMembers = teamToExport.getMembers();

        for (int i = 0; i < teamMembers.size(); i++) {
            Contact currentMember = teamMembers.get(i);

            StringBuilder tempContact = new StringBuilder();
            tempContact.append("Member ").append(i + 1).append('\n');
            tempContact.append("Name: ").append(currentMember.getName().fullName).append('\n');
            tempContact.append("Phone Number: ").append(currentMember.getPhone().value).append('\n');
            tempContact.append("Email: ").append(currentMember.getEmail().value).append('\n');
            tempContact.append("Address: ").append(currentMember.getAddress().value).append('\n');
            tempContact.append("GitHub Username: ").append(currentMember.getGitHubUsername()).append('\n');

            details.append(tempContact);
            details.append(System.getProperty("line.separator"));
        }

        return details.toString();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof ExportTeamCommand)) {
            return false;
        }

        ExportTeamCommand otherExportTeamCommand = (ExportTeamCommand) other;
        return targetIndex.equals(otherExportTeamCommand.targetIndex);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("teamIndex", targetIndex)
                .toString();
    }
}
