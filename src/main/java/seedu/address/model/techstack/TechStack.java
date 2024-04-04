package seedu.address.model.techstack;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.AppUtil.checkArgument;

/**
 * Represents a Tech Stack in CodeConnect.
 * Guarantees: immutable; name is valid as declared in {@link #isValidTechStackName(String)}
 */
public class TechStack {

    public static final String MESSAGE_CONSTRAINTS = "Tech stack names should contain only alphanumeric characters," +
            " underscores (_), number signs (#), hyphens (-), periods (.), and plus signs (+).";
    public static final String MESSAGE_CONSTRAINTS_LENGTH = "Tech stack names should not exceed 15 characters, and no more than 3 tech stacks should be added.";

    public static final String VALIDATION_REGEX = "[\\p{Alnum}+.#-]+";
    public final String techStackName;
    public Integer rating = null;

    /**
     * Constructs a {@code TechStack}.
     *
     * @param techStackName A valid tech stack name.
     */
    public TechStack(String techStackName) {
        requireNonNull(techStackName);
        checkArgument(isValidTechStackName(techStackName), MESSAGE_CONSTRAINTS);
        this.techStackName = techStackName;
    }

    public TechStack(String techStackName, Integer rating) {
        requireNonNull(techStackName);
        checkArgument(isValidTechStackName(techStackName), MESSAGE_CONSTRAINTS);
        this.techStackName = techStackName;
        this.rating = rating;
    }

    /**
     * Returns true if a given string is a valid tech stack name.
     */
    public static boolean isValidTechStackName(String test) {
        return test.matches(VALIDATION_REGEX);
    }

    /**
     * Returns true if a given integer is a valid rating.
     */
    public static boolean isValidTechStackRating(Integer rating) {
        return rating >= 0 && rating <= 10;
    }

    /**
     * Returns true if a given string is a valid tech stack name length.
     */
    public static boolean isValidTechStackNameLength(String test) {
        return test.length() <= 15;

    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof TechStack)) {
            return false;
        }

        TechStack otherTechStack = (TechStack) other;
        return techStackName.equals(otherTechStack.techStackName);
    }

    @Override
    public int hashCode() {
        return techStackName.hashCode();
    }

    /**
     * Format state as text for GUI.
     */
    public String toStringGui() {
        if (rating !=  null) {
            return techStackName + " | " + rating;
        } else {
            return techStackName;
        }
    }

    /**
     * Format state as text for viewing.
     */
    public String toString() {
        if (rating !=  null) {
            return '[' + techStackName + '|' + rating + ']';
        } else {
            return '[' + techStackName + ']';
        }
    }

}
