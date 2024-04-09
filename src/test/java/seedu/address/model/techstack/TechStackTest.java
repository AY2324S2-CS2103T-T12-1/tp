package seedu.address.model.techstack;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static seedu.address.testutil.Assert.assertThrows;

import org.junit.jupiter.api.Test;

public class TechStackTest {

    @Test
    public void constructor_null_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> new TechStack(null));
    }

    @Test
    public void constructor_invalidTechStackName_throwsIllegalArgumentException() {
        String emptyTechStackName = "";
        String invalidTechStackName = "C?!";
        assertThrows(IllegalArgumentException.class, () -> new TechStack(emptyTechStackName));
        assertThrows(IllegalArgumentException.class, () -> new TechStack(invalidTechStackName));
    }

    @Test
    public void isValidTechStackName() {
        assertThrows(NullPointerException.class, () -> TechStack.isValidTechStackName(null));
        assertEquals(true, TechStack.isValidTechStackName("C++"));
        assertEquals(true, TechStack.isValidTechStackName("C+_.-#")); // test all valid non-alphanumeric characters
        assertEquals(true, TechStack.isValidTechStackName("Cc++123###")); // test mix of alphanumeric and non-alphanumeric
        assertEquals(false, TechStack.isValidTechStackName("C++!!!"));
        assertEquals(false, TechStack.isValidTechStackName("123///"));
        assertEquals(false, TechStack.isValidTechStackName("Java?~`';:"));
    }

    @Test

    public void isValidTechStackWithValidRating() {
        assertThrows(NullPointerException.class, () -> TechStack.isValidTechStackName(null));
        assertEquals(true, TechStack.isValidTechStackName("C++") && TechStack.isValidTechStackRating(7));
    }

    @Test
    public void isValidTechStackWithInvalidRating() {
        assertThrows(NullPointerException.class, () -> TechStack.isValidTechStackName(null));
        assertEquals(false, TechStack.isValidTechStackName("C++")
                && TechStack.isValidTechStackRating(17));
    }

    @Test
    public void isValidTechStackNameLength() {
        assertThrows(NullPointerException.class, () -> TechStack.isValidTechStackName(null));
        assertEquals(true, TechStack.isValidTechStackNameLength("C++"));
        assertEquals(false, TechStack.isValidTechStackNameLength("C+++++++++++++++++++++"));
    }

}
