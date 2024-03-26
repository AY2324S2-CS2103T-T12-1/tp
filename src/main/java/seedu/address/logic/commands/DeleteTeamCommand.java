package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import java.util.List;

import seedu.address.commons.core.index.Index;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.TeamCommandsParser;
import seedu.address.model.Model;
import seedu.address.model.team.Team;

public class DeleteTeamCommand extends Command {
    public static final String COMMAND_WORD = "delete";

    public static final String MESSAGE_USAGE = TeamCommandsParser.COMMAND_WORD + " TEAM_INDEX " + COMMAND_WORD
            + ": Deletes the team identified by the index number used in the displayed team list.\n"
            + "Parameters: TEAM_INDEX (must be a positive integer)\n"
            + "Example: " + TeamCommandsParser.COMMAND_WORD + " 1 " + COMMAND_WORD;

    public static final String MESSAGE_DELETE_TEAM_SUCCESS = "Deleted Team: %1$s";

    private final Index targetIndex;

    public DeleteTeamCommand(Index targetIndex) {
        this.targetIndex = targetIndex;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Team> teamList = model.getCodeConnect().getTeamList();

        if (targetIndex.getZeroBased() >= teamList.size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
        }

        Team teamToDelete = teamList.get(targetIndex.getZeroBased());
        model.deleteTeam(teamToDelete);
        return new CommandResult(String.format(MESSAGE_DELETE_TEAM_SUCCESS, Messages.format(teamToDelete)));
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof DeleteTeamCommand)) {
            return false;
        }

        DeleteTeamCommand otherDeleteCommand = (DeleteTeamCommand) other;
        return targetIndex.equals(otherDeleteCommand.targetIndex);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("targetIndex", targetIndex)
                .toString();
    }
}
