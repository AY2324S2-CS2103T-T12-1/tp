package seedu.address.model.tag;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static seedu.address.testutil.Assert.assertThrows;

import org.junit.jupiter.api.Test;

import seedu.address.model.techstack.TechStack;

public class TagTest {

    @Test
    public void constructor_null_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> new Tag(null));
    }

    @Test
    public void constructor_invalidTagName_throwsIllegalArgumentException() {
        String invalidTagName = "";
        assertThrows(IllegalArgumentException.class, () -> new Tag(invalidTagName));
    }

    @Test
    public void isValidTagName() {
        // null tag name
        assertThrows(NullPointerException.class, () -> Tag.isValidTagName(null));
        assertEquals(true, TechStack.isValidTechStackName("friends"));
        assertEquals(false, TechStack.isValidTechStackName("friends!!"));
    }

    @Test
    public void isValidTagNameLength() {
        // null tag name
        assertThrows(NullPointerException.class, () -> Tag.isValidTagName(null));
        assertEquals(true, TechStack.isValidTechStackNameLength("friends"));
        assertEquals(false, TechStack.isValidTechStackNameLength("friendssssssssssssssssssss"));
    }
}
