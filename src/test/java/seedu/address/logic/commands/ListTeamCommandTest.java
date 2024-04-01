package seedu.address.logic.commands;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandFailure;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandSuccess;
import static seedu.address.logic.commands.CommandTestUtil.showContactAtIndex;
import static seedu.address.logic.commands.CommandTestUtil.showTeamAtIndex;
import static seedu.address.testutil.TypicalContacts.getTypicalCodeConnect;
import static seedu.address.testutil.TypicalIndexes.INDEX_FIRST_CONTACT;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.Messages;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.team.Team;


/**
 * Contains integration tests (interaction with the Model) and unit tests for ListTeamCommand.
 */
public class ListTeamCommandTest {

    private Model model;
    private Model expectedModel;
    private Team teamAtFirstIndex;

    @BeforeEach
    public void setUp() {
        model = new ModelManager(getTypicalCodeConnect(), new UserPrefs());
        expectedModel = new ModelManager(model.getCodeConnect(), new UserPrefs());
        teamAtFirstIndex = model.getCodeConnect().getTeamList().get(0);
        showTeamAtIndex(expectedModel, INDEX_FIRST_CONTACT);
    }

    @Test
    public void execute_listIsNotFiltered_showsContactList() {
        assertCommandSuccess(new ListTeamCommand(Index.fromOneBased(1)), model,
                ListTeamCommand.MESSAGE_SUCCESS + teamAtFirstIndex.getName(), expectedModel);
    }

    @Test
    public void execute_listIsFiltered_showsContactList() {
        showContactAtIndex(model, INDEX_FIRST_CONTACT);
        assertCommandSuccess(new ListTeamCommand(Index.fromOneBased(1)), model,
                ListTeamCommand.MESSAGE_SUCCESS + teamAtFirstIndex.getName(), expectedModel);
    }

    @Test
    public void execute_indexExceedsTeamSize_throwsCommandException() {
        Index outOfBoundIndex = Index.fromOneBased(model.getCodeConnect().getTeamList().size() + 1);
        ListTeamCommand listTeamCommand = new ListTeamCommand(outOfBoundIndex);

        assertCommandFailure(listTeamCommand, model, Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
    }

    @Test
    public void toStringMethod() {
        Index targetIndex = Index.fromOneBased(1);
        ListTeamCommand listTeamCommand = new ListTeamCommand(targetIndex);
        String expected = ListTeamCommand.class.getCanonicalName() + "{targetIndex=" + targetIndex + "}";
        assertEquals(expected, listTeamCommand.toString());
    }
}
