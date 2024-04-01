package seedu.address.logic.commands;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

import static java.util.Objects.requireNonNull;

public class DeleteContactFromTeamCommand extends Command {

        public static final String COMMAND_WORD = "delete-from-team";

        public static final String MESSAGE_USAGE = COMMAND_WORD + ": Deletes a contact from the team. "
                + "Parameters: "
                + "Team index number, contact index number \n"
                + "Example: delete-from-team 2 3";

        public static final String MESSAGE_SUCCESS = "Contact removed from team: %1$s";
        public static final String MESSAGE_INEXISTENT_CONTACT_IN_TEAM = "A contact with this index does not exist in " +
                "the team";

        private final int teamIndex;
        private final int contactIndex;

        /**
         * Creates a DeleteContactFromTeamCommand to delete the specified {@code Contact}
         */
        public DeleteContactFromTeamCommand(int teamIndex, int contactIndex) {
            this.teamIndex = teamIndex - 1;
            this.contactIndex = contactIndex - 1;
        }

        @Override
        public CommandResult execute(Model model) throws CommandException {
            requireNonNull(model);

            if (teamIndex < 0 || teamIndex >= model.getCodeConnect().getTeamList().size()) {
                throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
            }

            Team team = model.getCodeConnect().getTeamList().get(teamIndex);

            if (contactIndex < 0 || contactIndex >= team.getMembers().size()) {
                throw new CommandException(Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
            }
            Contact contactToDelete = team.getMembers().get(contactIndex);

            if (!team.hasMember(contactToDelete)) {
                throw new CommandException(MESSAGE_INEXISTENT_CONTACT_IN_TEAM);
            }

            model.deleteContactFromTeam(team, contactToDelete); //contact of index from contact list
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
