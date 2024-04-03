package seedu.address.logic.commands;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandFailure;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandSuccess;
import static seedu.address.testutil.TypicalIndexes.INDEX_FIRST_CONTACT;
import static seedu.address.testutil.TypicalIndexes.INDEX_SECOND_CONTACT;
import static seedu.address.testutil.TypicalContacts.getTypicalCodeConnect;

import org.junit.jupiter.api.Test;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.contact.Contact;
import seedu.address.model.techstack.TechStack;

/**
 * Contains integration tests (interaction with the Model) and unit tests for RateCommand.
 */
public class RateCommandTest {
    private Model model = new ModelManager(getTypicalCodeConnect(), new UserPrefs());

    @Test
    public void execute_validRating_success() {
        TechStack techStackToRate = new TechStack("java");
        int rating = 7;
        RateCommand rateCommand = new RateCommand(INDEX_FIRST_CONTACT, techStackToRate.techStackName, rating);
        try {
            CommandResult commandResult = rateCommand.execute(model);
            Contact updatedContact = model.getFilteredContactList().get(INDEX_FIRST_CONTACT.getZeroBased());
            assertEquals(String.format(rateCommand.MESSAGE_RATE_CONTACT_SUCCESS, Messages.format(updatedContact)),
                    commandResult.getFeedbackToUser());
        } catch (CommandException e) {
            throw new AssertionError("Execution of RateCommand should not throw a CommandException", e);
        }

    }

    @Test
    public void execute_invalidRatingUnfilteredList_failure() {
        TechStack techStackToRate = new TechStack("java");

        // Rating out of bounds (should be between 0 and 10)
        RateCommand rateCommand = new RateCommand(INDEX_FIRST_CONTACT, techStackToRate.techStackName, 15);

        assertCommandFailure(rateCommand, model, RateCommand.MESSAGE_INVALID_RATING);
    }

    @Test
    public void execute_invalidCaseTechStackToRateUnfilteredList_failure() {
        RateCommand rateCommand = new RateCommand(INDEX_FIRST_CONTACT, "Java", 7);

        assertCommandFailure(rateCommand, model, RateCommand.MESSAGE_INVALID_TECHSTACK_TO_RATE);
    }
    @Test
    public void execute_invalidTechStackToRateUnfilteredList_failure() {
        RateCommand rateCommand = new RateCommand(INDEX_FIRST_CONTACT, "Python", 7);

        assertCommandFailure(rateCommand, model, RateCommand.MESSAGE_INVALID_TECHSTACK_TO_RATE);
    }

    @Test
    public void execute_invalidContactIndexUnfilteredList_failure() {
        Index outOfBoundIndex = Index.fromOneBased(model.getFilteredContactList().size() + 1);
        TechStack techStackToRate = new TechStack("Java");

        RateCommand rateCommand = new RateCommand(outOfBoundIndex, techStackToRate.techStackName, 7);

        assertCommandFailure(rateCommand, model, Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
    }

    @Test
    public void equals() {
        final RateCommand standardCommand = new RateCommand(INDEX_FIRST_CONTACT, "Java", 8);

        // same values -> returns true
        RateCommand commandWithSameValues = new RateCommand(INDEX_FIRST_CONTACT, "Java", 8);
        assertTrue(standardCommand.equals(commandWithSameValues));

        // same object -> returns true
        assertTrue(standardCommand.equals(standardCommand));

        // null -> returns false
        assertFalse(standardCommand.equals(null));

        // different types -> returns false
        assertFalse(standardCommand.equals(new ClearCommand()));

        // different index -> returns false
        assertFalse(standardCommand.equals(new RateCommand(INDEX_SECOND_CONTACT, "Java", 8)));

        // different tech stack name -> returns false
        assertFalse(standardCommand.equals(new RateCommand(INDEX_FIRST_CONTACT, "Python", 8)));

        // different rating -> returns false
        assertFalse(standardCommand.equals(new RateCommand(INDEX_FIRST_CONTACT, "Java", 9)));
    }
}
