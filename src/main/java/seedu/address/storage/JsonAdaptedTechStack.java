package seedu.address.storage;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.techstack.TechStack;


/**
 * Jackson-friendly version of {@link TechStack}.
 */
class JsonAdaptedTechStack {

    private final String techStackName;
    private Integer rating;

    /**
     * Constructs a {@code JsonAdaptedTechStack} with the given {@code techStackName} and {@code rating}.
     */
    @JsonCreator
    public JsonAdaptedTechStack(@JsonProperty("techStackName") String techStackName,
                                @JsonProperty("rating") Integer rating) {
        this.techStackName = techStackName;
        this.rating = rating;
    }

    /**
     * Converts a given {@code TechStack} into this class for Jackson use.
     */
    public JsonAdaptedTechStack(TechStack source) {
        techStackName = source.techStackName;
        rating = source.rating;
    }


    public String getTechStackName() {
        return techStackName;
    }
    public Integer getRating() {
        return rating;
    }


    /**
     * Converts this Jackson-friendly adapted tech stack object into the model's {@code TechStack} object.
     *
     * @throws IllegalValueException if there were any data constraints violated in the adapted tech stack.
     */
    public TechStack toModelType() throws IllegalValueException {
        if (!TechStack.isValidTechStackName(techStackName)) {
            throw new IllegalValueException(TechStack.MESSAGE_CONSTRAINTS);
        }
        if (rating != null && (rating < 0 || rating > 10)) {
            throw new IllegalValueException("Rating must be between 0 and 10.");
        }
        TechStack ts = new TechStack(techStackName);
        if (rating != null) {
            ts.setRating(rating);
        }
        return ts;
    }

}
