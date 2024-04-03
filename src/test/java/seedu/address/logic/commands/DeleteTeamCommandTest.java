package seedu.address.logic.commands;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandFailure;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandSuccess;
import static seedu.address.testutil.TypicalContacts.getTypicalCodeConnect;
import static seedu.address.testutil.TypicalIndexes.INDEX_FIRST_CONTACT;
import static seedu.address.testutil.TypicalIndexes.INDEX_SECOND_CONTACT;

import org.junit.jupiter.api.Test;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.Messages;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.team.Team;

public class DeleteTeamCommandTest {

    private Model model = new ModelManager(getTypicalCodeConnect(), new UserPrefs());

    @Test
    public void execute_validIndex_success() {
        Team teamToDelete = model.getCodeConnect().getTeamList().get(0);
        DeleteTeamCommand deleteCommand = new DeleteTeamCommand(INDEX_FIRST_CONTACT);

        String expectedMessage = String.format(DeleteTeamCommand.MESSAGE_DELETE_TEAM_SUCCESS,
                Messages.format(teamToDelete));

        ModelManager expectedModel = new ModelManager(model.getCodeConnect(), new UserPrefs());
        expectedModel.deleteTeam(teamToDelete);

        assertCommandSuccess(deleteCommand, model, expectedMessage, expectedModel);
    }

    @Test
    public void execute_invalidIndex_throwsCommandException() {
        Index outOfBoundIndex = Index.fromOneBased(model.getFilteredContactList().size() + 1);
        DeleteTeamCommand deleteCommand = new DeleteTeamCommand(outOfBoundIndex);

        assertCommandFailure(deleteCommand, model, Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
    }

    @Test
    public void equals() {
        DeleteTeamCommand deleteFirstCommand = new DeleteTeamCommand(INDEX_FIRST_CONTACT);
        DeleteTeamCommand deleteSecondCommand = new DeleteTeamCommand(INDEX_SECOND_CONTACT);

        // same object -> returns true
        assertTrue(deleteFirstCommand.equals(deleteFirstCommand));

        // same values -> returns true
        DeleteTeamCommand deleteFirstCommandCopy = new DeleteTeamCommand(INDEX_FIRST_CONTACT);
        assertTrue(deleteFirstCommand.equals(deleteFirstCommandCopy));

        // different types -> returns false
        assertFalse(deleteFirstCommand.equals(1));

        // null -> returns false
        assertFalse(deleteFirstCommand.equals(null));

        // different contact -> returns false
        assertFalse(deleteFirstCommand.equals(deleteSecondCommand));
    }

    @Test
    public void toStringMethod() {
        Index targetIndex = Index.fromOneBased(1);
        DeleteTeamCommand deleteCommand = new DeleteTeamCommand(targetIndex);
        String expected = DeleteTeamCommand.class.getCanonicalName() + "{targetIndex=" + targetIndex + "}";
        assertEquals(expected, deleteCommand.toString());
    }
}
