package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;
import static seedu.address.logic.Messages.MESSAGE_UNKNOWN_COMMAND;

import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import seedu.address.commons.core.LogsCenter;
import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.AddContactToTeamCommand;
import seedu.address.logic.commands.AddTeamCommand;
import seedu.address.logic.commands.Command;
import seedu.address.logic.commands.DeleteContactFromTeamCommand;
import seedu.address.logic.commands.DeleteTeamCommand;
import seedu.address.logic.commands.ListTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;

public class TeamCommandsParser {
    public static final String COMMAND_WORD = "team";

    public static final String MESSAGE_USAGE = "Commands for team management:\n"
            + AddTeamCommand.MESSAGE_USAGE + "\n\n"
            + AddContactToTeamCommand.MESSAGE_USAGE + "\n\n"
            + DeleteContactFromTeamCommand.MESSAGE_USAGE + "\n\n"
            + ListTeamCommand.MESSAGE_USAGE + "\n\n"
            + DeleteTeamCommand.MESSAGE_USAGE;

    private static final Pattern COMMAND_FORMAT =
            Pattern.compile("^(?<index>\\d *)(?<subcommand>[a-zA-z-]*) *(?<args>.*)");

    private static final Logger logger = LogsCenter.getLogger(CodeConnectParser.class);

    public static Command parse(String arguments) throws ParseException {
        final Matcher matcher = COMMAND_FORMAT.matcher(arguments.trim());
        if (!matcher.matches()) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, MESSAGE_USAGE));
        }

        final String index = matcher.group("index");
        final String subCommand = matcher.group("subcommand");
        final String args = matcher.group("args");

        Index parsedIndex = ParserUtil.parseIndex(index);

        if (subCommand.isEmpty() && !args.isEmpty()) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, MESSAGE_USAGE));
        }

        switch (subCommand) {
        case ListTeamCommand.COMMAND_WORD:
            return new ListTeamCommand(parsedIndex);
        case DeleteTeamCommand.COMMAND_WORD:
            return new DeleteTeamCommand(parsedIndex);
        default:
            logger.finer("This user input caused a ParseException: " + arguments);
            throw new ParseException(MESSAGE_UNKNOWN_COMMAND);
        }

    }
}
