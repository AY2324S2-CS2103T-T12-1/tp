package seedu.address.logic.commands;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandFailure;
import static seedu.address.testutil.TypicalContacts.getTypicalCodeConnect;

import org.junit.jupiter.api.Test;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.Messages;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;

/**
 * Contains integration tests (interaction with the Model) for {@code ExportTeamCommand}.
 */
public class ExportTeamCommandTest {
    private Model model = new ModelManager(getTypicalCodeConnect(), new UserPrefs());

    @Test
    public void execute_invalidIndex_throwsCommandException() {
        Index outOfBoundIndex = Index.fromOneBased(model.getCodeConnect().getTeamList().size() + 1);
        ExportTeamCommand exportTeamCommand = new ExportTeamCommand(outOfBoundIndex);

        assertCommandFailure(exportTeamCommand, model, Messages.MESSAGE_INVALID_TEAM_DISPLAYED_INDEX);
    }

    @Test
    public void execute_emptyTeam_throwsCommandException() {
        Index validIndex = Index.fromOneBased(3);
        ExportTeamCommand exportTeamCommand = new ExportTeamCommand(validIndex);

        assertCommandFailure(exportTeamCommand, model, Messages.MESSAGE_EMPTY_TEAM);
    }

    @Test
    public void getDetails_validIndex_returnsDetails() {
        Index validIndex = Index.fromZeroBased(0);
        ExportTeamCommand exportTeamCommand = new ExportTeamCommand(validIndex);

        String expected = ("Member 1\n")
                + ("Name: Elle Meyer\n")
                + ("Phone Number: 9482224\n")
                + ("Email: werner@example.com\n")
                + ("Address: michegan ave\n")
                + ("GitHub Username: Ellieellie\n");

        String actual = exportTeamCommand.getDetails(model.getCodeConnect().getTeamList().get(0));
        assertTrue(actual.contains(expected));
    }

    @Test
    public void equals() {
        Index firstIndex = Index.fromZeroBased(0);
        Index secondIndex = Index.fromZeroBased(1);

        ExportTeamCommand exportFirstCommand = new ExportTeamCommand(firstIndex);
        ExportTeamCommand exportSecondCommand = new ExportTeamCommand(secondIndex);

        // same object -> returns true
        assertTrue(exportFirstCommand.equals(exportFirstCommand));

        // same values -> returns true
        ExportTeamCommand findFirstCommandCopy = new ExportTeamCommand(firstIndex);
        assertTrue(exportFirstCommand.equals(findFirstCommandCopy));

        // different types -> returns false
        assertFalse(exportFirstCommand.equals(1));

        // null -> returns false
        assertFalse(exportFirstCommand.equals(null));

        // different contact -> returns false
        assertFalse(exportFirstCommand.equals(exportSecondCommand));
    }

    @Test
    public void toStringMethod() {
        Index testIndex = Index.fromZeroBased(0);
        ExportTeamCommand exportTeamCommand = new ExportTeamCommand(testIndex);
        String expected = ExportTeamCommand.class.getCanonicalName() + "{teamIndex=" + testIndex + "}";
        assertEquals(expected, exportTeamCommand.toString());
    }
}
