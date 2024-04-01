package seedu.address.logic.commands;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

import static java.util.Objects.requireNonNull;

public class AddContactToTeamCommand extends Command {

    public static final String COMMAND_WORD = "add-to-team";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Adds a contact to the team. "
            + "Parameters: "
            + "Team index number, contact index number \n"
            + "Example: add-to-team 2 3";


    public static final String MESSAGE_SUCCESS = "New contact added to team: %1$s";
    public static final String MESSAGE_DUPLICATE_CONTACT_IN_TEAM = "A contact with this name already exists in " +
            "the team";

    private final int teamIndex;
    private final int contactIndex;

    /**
     * Creates an AddContactToTeamCommand to add the specified {@code Contact}
     */
    public AddContactToTeamCommand(int teamIndex, int contactIndex) {
        this.teamIndex = teamIndex - 1;
        this.contactIndex = contactIndex - 1;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);

        if (teamIndex < 0 || teamIndex >= model.getCodeConnect().getTeamList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }

        if (contactIndex < 0 || contactIndex >= model.getCodeConnect().getContactList().size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
        }

        Team teamToAdd = model.getCodeConnect().getTeamList().get(teamIndex);
        Contact contactToAdd = model.getCodeConnect().getContactList().get(contactIndex);

        if (teamToAdd.hasMember(contactToAdd)) {
            throw new CommandException(MESSAGE_DUPLICATE_CONTACT_IN_TEAM);
        }

        model.addContactToTeam(teamToAdd, contactToAdd);
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
        return teamIndex == otherCommand.teamIndex && contactIndex == otherCommand.contactIndex;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("teamIndex", teamIndex)
                .add("contactIndex", contactIndex)
                .toString();
    }
}
