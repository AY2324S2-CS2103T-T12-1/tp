package seedu.address.logic.parser;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static seedu.address.testutil.Assert.assertThrows;

import java.util.List;

import org.junit.jupiter.api.Test;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.AddTeamCommand;
import seedu.address.logic.commands.DeleteTeamCommand;
import seedu.address.logic.commands.ListTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.contact.Name;
import seedu.address.model.team.Team;

public class TeamCommandsParserTest {
    @Test
    public void parseCommand_addTeam() throws Exception {
        Team team = new Team(new Name("team"));
        AddTeamCommand command = (AddTeamCommand) TeamCommandsParser.parse("add n/team");
        assertEquals(new AddTeamCommand(team), command);
    }

    @Test
    public void parseCommand_deleteTeam() throws Exception {
        Index index = Index.fromOneBased(1);
        DeleteTeamCommand command = (DeleteTeamCommand) TeamCommandsParser.parse("1 delete");
        assertEquals(new DeleteTeamCommand(index), command);
    }

    @Test
    public void parseCommand_listTeam() throws Exception {
        Index index = Index.fromOneBased(1);
        ListTeamCommand command = (ListTeamCommand) TeamCommandsParser.parse("1");
        assertEquals(new ListTeamCommand(index), command);
    }

    @Test public void invalidInput_throwsParseException() {
        List<String> inputs = List.of(
                "1 1",
                "1delete1",
                "1d delete",
                " ",
                "^ dlete",
                "\n",
                "\t",
                "add+d",
                "delete1",
                "  +"
        );
        for (String input : inputs) {
            assertThrows(ParseException.class, () -> TeamCommandsParser.parse(input));
        }
    }
}
