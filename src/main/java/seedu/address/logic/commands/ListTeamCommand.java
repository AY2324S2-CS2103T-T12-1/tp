package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import java.util.List;
import java.util.StringJoiner;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.TeamCommandsParser;
import seedu.address.model.Model;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

public class ListTeamCommand extends Command {
    public static final String COMMAND_WORD = "";

    public static final String MESSAGE_USAGE = TeamCommandsParser.COMMAND_WORD + " TEAM_INDEX"
            + ": Lists the members of the team identified by the index number used in the displayed team list.\n"
            + "Parameters: TEAM_INDEX (must be a positive integer)\n"
            + "Example: " + TeamCommandsParser.COMMAND_WORD + " 1";

    public static final String MESSAGE_SUCCESS = "Listing contacts for team: ";

    private final Index targetIndex;

    public ListTeamCommand(Index targetIndex) {
        this.targetIndex = targetIndex;
    }
    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Team> teamList = model.getCodeConnect().getTeamList();

        if (targetIndex.getZeroBased() >= teamList.size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }

        Team teamToList = teamList.get(targetIndex.getZeroBased());
        List<Contact> teamMembers = teamToList.getMembers();
        StringJoiner sj = new StringJoiner("\n");
        for (Contact c : teamToList.getMembers()) {
            sj.add(" - " + c.getName().fullName);
        }

        model.updateFilteredContactList(a -> teamMembers.stream().anyMatch(a::isSameContact));

        return new CommandResult(MESSAGE_SUCCESS + teamToList.getName() + "\n" + sj);
    }
}

