package seedu.address.logic.parser;

import org.junit.jupiter.api.Test;
import seedu.address.logic.commands.RateCommand;
import seedu.address.logic.parser.exceptions.ParseException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static seedu.address.testutil.Assert.assertThrows;

public class RateCommandParserTest {

    private final RateCommandParser parser = new RateCommandParser();

    @Test
    public void parse_validArgs_returnsRateCommand() throws ParseException {
        String args = "1 ts/Java r/7";
        RateCommand expectedCommand = new RateCommand(ParserUtil.parseIndex("1"), "Java", 7);
        assertEquals(expectedCommand, parser.parse(args));
    }

    @Test
    public void parse_missingIndex_throwsParseException() {
        assertThrows(ParseException.class, () -> parser.parse("ts/Java r/7"));
    }

    @Test
    public void parse_missingTechStack_throwsParseException() {
        assertThrows(ParseException.class, () -> parser.parse("1 r/7"));
    }

    @Test
    public void parse_missingRating_throwsParseException() {
        assertThrows(ParseException.class, () -> parser.parse("1 ts/Java"));
    }

    @Test
    public void parse_incorrectRating_throwsParseException() {
        assertThrows(ParseException.class, () -> parser.parse("1 ts/Java r/abcd"));
    }
    @Test
    public void parse_incorrectFormat_throwsParseException() {
        assertThrows(ParseException.class, () -> parser.parse("1 ts/Java rating/7"));
    }
}
