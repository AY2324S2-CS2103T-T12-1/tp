package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;
import static seedu.address.logic.parser.CommandParserTestUtil.assertParseFailure;
import static seedu.address.logic.parser.CommandParserTestUtil.assertParseSuccess;
import static seedu.address.testutil.TypicalContacts.ALICE;
import static seedu.address.testutil.TypicalContacts.BOB;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

import seedu.address.logic.commands.AddTeamCommand;
import seedu.address.logic.commands.AddTeamCommand;
import seedu.address.model.contact.Name;
import seedu.address.model.contact.NameContainsKeywordsPredicate;
import seedu.address.model.team.Team;

public class AddTeamCommandParserTest {

    private AddTeamCommandParser parser = new AddTeamCommandParser();

    @Test
    public void parse_emptyArg_throwsParseException() {
        assertParseFailure(parser, "     ",
                String.format(MESSAGE_INVALID_COMMAND_FORMAT, AddTeamCommand.MESSAGE_USAGE));
    }

    @Test
    public void parse_invalidArg_throwsParseException() {
        assertParseFailure(parser, "t/Java",
                String.format(MESSAGE_INVALID_COMMAND_FORMAT, AddTeamCommand.MESSAGE_USAGE));
    }

    @Test
    public void parse_validArgs_returnsAddTeamCommand() {
        // no leading and trailing whitespaces
        AddTeamCommand expectedAddTeamCommand =
                new AddTeamCommand(new Team(new Name("teamName")));
        assertParseSuccess(parser, " n/teamName", expectedAddTeamCommand);
    }

}
