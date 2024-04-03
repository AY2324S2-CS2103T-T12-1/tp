package seedu.address.logic.parser;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.RateCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.techstack.TechStack;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;
import java.util.Set;

import static java.util.Objects.requireNonNull;
import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;
import static seedu.address.logic.parser.CliSyntax.PREFIX_TECH_STACK;


/**
 * Parses input arguments and creates a new RateCommand object
 */
public class RateCommandParser {

    /**
     * Parses the given {@code String} of arguments in the context of the RateCommand
     * and returns an RateCommand object for execution.
     * @throws ParseException if the user input does not conform the expected format
     */
    public RateCommand parse(String args) throws ParseException {
        requireNonNull(args);
        ArgumentMultimap argMultimap =
                ArgumentTokenizer.tokenize(args, PREFIX_TECH_STACK);

        Index index;
        String techStackName;
        int rating;

        try {
            index = ParserUtil.parseIndex(argMultimap.getPreamble());
            String[] techStackParts = argMultimap.getValue(PREFIX_TECH_STACK).get().split("r/");
            if (techStackParts.length != 2) {
                throw new ParseException("Tech stack rating format is incorrect. " +
                        "Please use the format: ts/<techStack> r/<rating>");
            }
            techStackName = techStackParts[0].trim();
            rating = Integer.parseInt(techStackParts[1].trim());

        } catch (ParseException | NumberFormatException e) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, RateCommand.MESSAGE_USAGE), e);
        }

        return new RateCommand(index, techStackName, rating);
    }

}
