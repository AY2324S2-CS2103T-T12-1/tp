package seedu.address.logic.parser;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.DeleteContactFromTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;

/**
 * Parses input arguments and creates a new AddContactToTeamCommand object.
 */
public class DeleteContactFromTeamCommandParser implements Parser<DeleteContactFromTeamCommand> {

    @Override
    public DeleteContactFromTeamCommand parse(String args) throws ParseException {
        String[] indices = args.split("\\s+");
        if (indices.length < 2) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, DeleteContactFromTeamCommand.MESSAGE_USAGE));
        }

        Index teamIndex;
        Index contactIndex;

        try {
            teamIndex = ParserUtil.parseIndex(indices[0]);
            contactIndex = ParserUtil.parseIndex(indices[1]);
        } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
            throw new ParseException("Invalid index format");
        }

        return new DeleteContactFromTeamCommand(teamIndex, contactIndex);
    }
}
