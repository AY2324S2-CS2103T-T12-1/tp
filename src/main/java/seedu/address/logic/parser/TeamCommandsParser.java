package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;

import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import seedu.address.commons.core.LogsCenter;
import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.AddTeamCommand;
import seedu.address.logic.commands.Command;
import seedu.address.logic.commands.DeleteTeamCommand;
import seedu.address.logic.commands.ExportTeamCommand;
import seedu.address.logic.commands.ListTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;

/**
 * Second level parser for commands under prefix {@code team}.
 */
public class TeamCommandsParser {
    public static final String COMMAND_WORD = "team";

    public static final String MESSAGE_USAGE = "Commands for team management:\n"
            + AddTeamCommand.MESSAGE_USAGE + "\n\n"
            + ListTeamCommand.MESSAGE_USAGE + "\n\n"
            + DeleteTeamCommand.MESSAGE_USAGE + "\n\n"
            + ExportTeamCommand.MESSAGE_USAGE;

    private static final Pattern COMMAND_FORMAT =
            Pattern.compile("(?<index>\\d+(?: | *$))?(?<subcommand>[a-zA-Z-]*)(?: | *$)(?<args>.*)");

    private static final Logger logger = LogsCenter.getLogger(CodeConnectParser.class);

    /**
     * Parses user input into command for execution.
     *
     * @param arguments input string. {@code team} prefix is assumed to already have been parsed.
     * @return the command based on the user input
     * @throws ParseException if the user input does not conform the expected format
     */
    public static Command parse(String arguments) throws ParseException {
        final Matcher matcher = COMMAND_FORMAT.matcher(arguments.trim());
        if (!matcher.matches() || arguments.isBlank()) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, MESSAGE_USAGE));
        }

        final String index = matcher.group("index");
        final String subCommand = matcher.group("subcommand");
        //ArgumentTokenizer wants whitespace before its input
        final String args = " " + matcher.group("args");

        // ListTeamCommand has blank subcommand, ensure that there are no extra arguments.
        if (subCommand.isEmpty() && (index.isEmpty() || !args.isBlank())) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, MESSAGE_USAGE));
        }

        Index parsedIndex;

        switch (subCommand) {
        case AddTeamCommand.COMMAND_WORD:
            return new AddTeamCommandParser().parse(args);
        case ListTeamCommand.COMMAND_WORD:
            parsedIndex = ParserUtil.parseIndex(index);
            return new ListTeamCommand(parsedIndex);
        case DeleteTeamCommand.COMMAND_WORD:
            parsedIndex = ParserUtil.parseIndex(index);
            return new DeleteTeamCommand(parsedIndex);
        case ExportTeamCommand.COMMAND_WORD:
            parsedIndex = ParserUtil.parseIndex(index);
            return new ExportTeamCommand(parsedIndex);
        default:
            logger.finer("This user input caused a ParseException: " + arguments);
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, MESSAGE_USAGE));
        }

    }
}
