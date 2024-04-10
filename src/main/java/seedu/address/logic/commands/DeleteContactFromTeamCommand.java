package seedu.address.logic.commands;

import seedu.address.commons.core.index.Index;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.TeamCommandsParser;
import seedu.address.model.Model;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

import static java.util.Objects.requireNonNull;

import java.util.List;

public class DeleteContactFromTeamCommand extends Command {

    public static final String COMMAND_WORD = "delete-contact";

    public static final String MESSAGE_USAGE = TeamCommandsParser.COMMAND_WORD + " TEAM_INDEX " + COMMAND_WORD
            + " CONTACT_INDEX : Deletes a contact from the team. \n"
            + "Parameters: TEAM_INDEX (must be a positive integer),CONTACT_INDEX (must be a positive integer)\n"
            + "Example: " + TeamCommandsParser.COMMAND_WORD + " 1 " + COMMAND_WORD + " 2 ";

    public static final String MESSAGE_SUCCESS = "Contact removed from team: %1$s";
    public static final String MESSAGE_INEXISTENT_CONTACT_IN_TEAM = "A contact with this index does not exist in " +
            "the team";

    private final Index teamIndex;
    private final Index contactIndex;

    /**
     * Creates a DeleteContactFromTeamCommand to delete the specified {@code Contact}
     */
    public DeleteContactFromTeamCommand(Index teamIndex, Index contactIndex) {
        this.teamIndex = requireNonNull(teamIndex);
        this.contactIndex = requireNonNull(contactIndex);
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);

        if (teamIndex.getZeroBased() < 0 || teamIndex.getZeroBased() >= model.getCodeConnect().getTeamList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }

        Team originalTeam = model.getCodeConnect().getTeamList().get(teamIndex.getZeroBased());

        if (contactIndex.getZeroBased() < 0 || contactIndex.getZeroBased() >= originalTeam.getMembers().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
        }
        Contact contactToDelete = originalTeam.getMembers().get(contactIndex.getZeroBased());

        Team updatedTeam = originalTeam.withRemovedMember(contactToDelete);
        model.setTeam(originalTeam, updatedTeam);

        List<Contact> teamMembers = updatedTeam.getMembers();
        model.updateFilteredContactList(a -> teamMembers.stream().anyMatch(a::isSameContact));
        return new CommandResult(String.format(MESSAGE_SUCCESS, contactToDelete.getName()));
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        if (!(other instanceof DeleteContactFromTeamCommand)) {
            return false;
        }

        DeleteContactFromTeamCommand otherCommand = (DeleteContactFromTeamCommand) other;
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
