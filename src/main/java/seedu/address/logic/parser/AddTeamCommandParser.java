package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;
import static seedu.address.logic.parser.CliSyntax.PREFIX_NAME;

import seedu.address.logic.commands.AddTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.contact.Name;
import seedu.address.model.team.Team;

/**
 * Parses the given {@code String} of arguments in the context of the AddTeamCommand
 * and returns an AddTeamCommand object for execution.
 * @throws ParseException if the user input does not conform the expected format
 */
public class AddTeamCommandParser implements Parser<AddTeamCommand> {
    @Override
    public AddTeamCommand parse(String args) throws ParseException {
        ArgumentMultimap argMultimap =
                ArgumentTokenizer.tokenize(args, PREFIX_NAME);

        if (!argMultimap.getValue(PREFIX_NAME).isPresent()
                || !argMultimap.getPreamble().isEmpty()) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, AddTeamCommand.MESSAGE_USAGE));
        }

        argMultimap.verifyNoDuplicatePrefixesFor(PREFIX_NAME);

        Name name = ParserUtil.parseName(argMultimap.getValue(PREFIX_NAME).get());

        return new AddTeamCommand(new Team(name));
    }
}
