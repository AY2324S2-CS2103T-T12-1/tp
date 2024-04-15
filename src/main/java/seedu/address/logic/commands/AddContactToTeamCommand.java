package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import seedu.address.commons.core.index.Index;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.TeamCommandsParser;
import seedu.address.model.Model;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

/**
 * Adds a {@code Contact} to the specified team {@code Team}.
 */
public class AddContactToTeamCommand extends Command {

    public static final String COMMAND_WORD = "add-contact";

    public static final String MESSAGE_USAGE = TeamCommandsParser.COMMAND_WORD + " TEAM_INDEX " + COMMAND_WORD
            + " CONTACT_INDEX : Adds a contact to the team. \n"
            + "Parameters: TEAM_INDEX (must be a positive integer), CONTACT_INDEX (must be a positive integer)\n"
            + "Example: " + TeamCommandsParser.COMMAND_WORD + " 1 " + COMMAND_WORD + " 2 ";

    public static final String MESSAGE_SUCCESS = "New contact added to team: %1$s";
    public static final String MESSAGE_DUPLICATE_CONTACT_IN_TEAM = "A contact with the name corresponding to this"
            + " index already exists in the team";

    private final Index teamIndex;
    private final Index contactIndex;

    /**
     * Creates an AddContactToTeamCommand to add the specified {@code Contact}
     */
    public AddContactToTeamCommand(Index teamIndex, Index contactIndex) {
        requireAllNonNull(teamIndex, contactIndex);
        assert teamIndex.getZeroBased() >= 0 : "Team index must be non-negative";
        assert contactIndex.getZeroBased() >= 0 : "Contact index must be non-negative";
        this.teamIndex = teamIndex;
        this.contactIndex = contactIndex;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);

        assert teamIndex.getZeroBased() < model.getCodeConnect().getTeamList().size() :
                "Team index out of bounds";
        assert contactIndex.getZeroBased() < model.getFilteredContactList().size() :
                "Contact index out of bounds";

        if (teamIndex.getZeroBased() < 0 || teamIndex.getZeroBased() >= model.getCodeConnect().getTeamList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }

        if (contactIndex.getZeroBased() < 0
                || contactIndex.getZeroBased() >= model.getCodeConnect().getContactList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
        }

        if (teamIndex.getZeroBased() < 0 || teamIndex.getZeroBased() >= model.getCodeConnect().getTeamList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }
        if (contactIndex.getZeroBased() < 0 || contactIndex.getZeroBased() >= model.getFilteredContactList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
        }
        Team originalTeam = model.getCodeConnect().getTeamList().get(teamIndex.getZeroBased());

        Contact contactToAdd = model.getFilteredContactList().get(contactIndex.getZeroBased());
        if (originalTeam.hasMember(contactToAdd)) {
            throw new CommandException(MESSAGE_DUPLICATE_CONTACT_IN_TEAM);
        }
        Team updatedTeam = originalTeam.withAddedMember(contactToAdd);


        // Update the model with the updated team
        model.setTeam(originalTeam, updatedTeam);

        return new CommandResult(String.format(MESSAGE_SUCCESS, contactToAdd.getName()));
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        if (!(other instanceof AddContactToTeamCommand)) {
            return false;
        }

        AddContactToTeamCommand otherCommand = (AddContactToTeamCommand) other;
        return teamIndex.equals(otherCommand.teamIndex) && contactIndex.equals(otherCommand.contactIndex);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("teamIndex", teamIndex)
                .add("contactIndex", contactIndex)
                .toString();
    }
}
