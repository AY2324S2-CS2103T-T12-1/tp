package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static seedu.address.logic.parser.CliSyntax.PREFIX_NAME;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.TeamCommandsParser;
import seedu.address.model.Model;
import seedu.address.model.team.Team;

/**
 * Adds a team to the address book.
 */
public class AddTeamCommand extends Command {
    public static final String COMMAND_WORD = "add";

    public static final String MESSAGE_USAGE = TeamCommandsParser.COMMAND_WORD + " "
            + COMMAND_WORD + " " + PREFIX_NAME + "TEAM_NAME" + ": Adds a team to the address book. \n"
            + "Parameters: "
            + PREFIX_NAME + "TEAM_NAME (only alphanumeric characters)\n"
            + "Example: " + TeamCommandsParser.COMMAND_WORD + " " + COMMAND_WORD + " "
            + PREFIX_NAME + "NUSHack2024 ";


    public static final String MESSAGE_SUCCESS = "New team added: %1$s";
    public static final String MESSAGE_DUPLICATE_TEAM = "A team with this name already exists in CodeConnect";

    private final Team toAdd;

    /**
     * Creates an AddCommand to add the specified {@code Contact}
     */
    public AddTeamCommand(Team team) {
        requireNonNull(team);
        toAdd = team;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);

        if (model.hasTeam(toAdd)) {
            throw new CommandException(MESSAGE_DUPLICATE_TEAM);
        }

        model.addTeam(toAdd);
        return new CommandResult(String.format(MESSAGE_SUCCESS, Messages.format(toAdd)));
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof AddTeamCommand)) {
            return false;
        }

        AddTeamCommand otherAddTeamCommand = (AddTeamCommand) other;
        return toAdd.equals(otherAddTeamCommand.toAdd);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("toAdd", toAdd)
                .toString();
    }
}
