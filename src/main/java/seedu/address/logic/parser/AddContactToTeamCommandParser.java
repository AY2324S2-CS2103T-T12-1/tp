package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.AddContactToTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;

/**
 * Parses input arguments and creates a new AddContactToTeamCommand object.
 */
public class AddContactToTeamCommandParser implements Parser<AddContactToTeamCommand> {

    @Override
    public AddContactToTeamCommand parse(String args) throws ParseException {
        String[] indices = args.split("\\s+");
        if (indices.length < 2) {
            throw new ParseException(
                    String.format(MESSAGE_INVALID_COMMAND_FORMAT, AddContactToTeamCommand.MESSAGE_USAGE));
        }

        Index teamIndex;
        Index contactIndex;

        try {
            teamIndex = ParserUtil.parseIndex(indices[0]);
            contactIndex = ParserUtil.parseIndex(indices[1]);

        } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
            throw new ParseException("Invalid index format");
        }

        return new AddContactToTeamCommand(teamIndex, contactIndex);
    }
}
