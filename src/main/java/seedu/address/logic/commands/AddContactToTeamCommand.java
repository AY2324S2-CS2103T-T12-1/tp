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

public class AddContactToTeamCommand extends Command {

    public static final String COMMAND_WORD = "add-contact";

    public static final String MESSAGE_USAGE = TeamCommandsParser.COMMAND_WORD + " TEAM_INDEX " + COMMAND_WORD
            + " CONTACT_INDEX : Adds a contact to the team. \n"
            + "Parameters: TEAM_INDEX (must be a positive integer), CONTACT_INDEX (must be a positive integer)\n"
            + "Example: " + TeamCommandsParser.COMMAND_WORD + " 1 " + COMMAND_WORD + " 2 ";


    public static final String MESSAGE_SUCCESS = "New contact added to team: %1$s";
    public static final String MESSAGE_DUPLICATE_CONTACT_IN_TEAM = "A contact with the name corresponding to this" +
            " index already exists in the team";

    private final Index teamIndex;
    private final Index contactIndex;

    /**
     * Creates an AddContactToTeamCommand to add the specified {@code Contact}
     */
    public AddContactToTeamCommand(Index teamIndex, Index contactIndex) {
        this.teamIndex = teamIndex;
        this.contactIndex = contactIndex;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);

        if (teamIndex.getZeroBased() < 0 || teamIndex.getZeroBased() >= model.getCodeConnect().getTeamList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }

        if (contactIndex.getZeroBased() < 0 || contactIndex.getZeroBased() >= model.getCodeConnect().getContactList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
        }

        Team originalTeam = model.getCodeConnect().getTeamList().get(teamIndex.getZeroBased());

        Contact filteredContact = null;
        Contact originalContact = null;

        // Check if the index is within bounds of the filtered contact list
        if (contactIndex.getZeroBased() >= 0 && contactIndex.getZeroBased() < model.getFilteredContactList().size()) {
            filteredContact = model.getFilteredContactList().get(contactIndex.getZeroBased());
        }

        // Check if the index is within bounds of the original contact list
        if (contactIndex.getZeroBased() >= 0 && contactIndex.getZeroBased() < model.getCodeConnect().getContactList().size()) {
            originalContact = model.getCodeConnect().getContactList().get(contactIndex.getZeroBased());
        }

        Contact contactToAdd = (filteredContact != null) ? filteredContact : originalContact;

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
