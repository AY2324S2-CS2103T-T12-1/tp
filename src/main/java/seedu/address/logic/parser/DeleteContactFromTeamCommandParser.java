package seedu.address.logic.parser;

import seedu.address.logic.commands.DeleteContactFromTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;

public class DeleteContactFromTeamCommandParser implements Parser<DeleteContactFromTeamCommand> {

    private static final String COMMAND_WORD = "delete-from-team";

    @Override
    public DeleteContactFromTeamCommand parse(String args) throws ParseException {
        String fullCommand = COMMAND_WORD + " " + args.trim();

        String[] indices = fullCommand.split("\\s+");
        System.out.println(indices.length);

        if (indices.length < 3 || !indices[0].equals(COMMAND_WORD)) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, DeleteContactFromTeamCommand.MESSAGE_USAGE));
        }

        int teamIndex;
        int contactIndex;
        try {
            teamIndex = Integer.parseInt(indices[1]);
            contactIndex = Integer.parseInt(indices[2]);
        } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
            throw new ParseException("Invalid index format");
        }

        return new DeleteContactFromTeamCommand(teamIndex, contactIndex);
    }
}
