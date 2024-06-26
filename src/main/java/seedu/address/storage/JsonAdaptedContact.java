package seedu.address.storage;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.contact.Address;
import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Email;
import seedu.address.model.contact.GitHubUsername;
import seedu.address.model.contact.Name;
import seedu.address.model.contact.Phone;
import seedu.address.model.contact.ProfilePicture;
import seedu.address.model.tag.Tag;
import seedu.address.model.techstack.TechStack;
/**
 * Jackson-friendly version of {@link Contact}.
 */

class JsonAdaptedContact {

    public static final String MISSING_FIELD_MESSAGE_FORMAT = "Contact's %s field is missing!";

    private final String name;
    private final String phone;
    private final String email;
    private final String address;
    private final String gitHubUsername;
    private final String profilePicture;

    private final List<JsonAdaptedTechStack> techStack = new ArrayList<>();
    private final List<JsonAdaptedTag> tags = new ArrayList<>();

    /**
     * Constructs a {@code JsonAdaptedContact} with the given contact details.
     */
    @JsonCreator
    public JsonAdaptedContact(@JsonProperty("name") String name, @JsonProperty("phone") String phone,
                              @JsonProperty("email") String email, @JsonProperty("address") String address,
                              @JsonProperty ("github_username") String gitHubUsername,
                              @JsonProperty ("profile_picture") String profilePicture,
                              @JsonProperty ("tech_stack") List<JsonAdaptedTechStack> techStack,
                              @JsonProperty("tags") List<JsonAdaptedTag> tags) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.gitHubUsername = gitHubUsername;
        this.profilePicture = profilePicture;
        if (techStack != null) {
            this.techStack.addAll(techStack);
        }
        if (tags != null) {
            this.tags.addAll(tags);
        }
    }

    /**
     * Converts a given {@code Contact} into this class for Jackson use.
     */
    public JsonAdaptedContact(Contact source) {
        name = source.getName().fullName;
        phone = source.getPhone().value;
        email = source.getEmail().value;
        address = source.getAddress().value;
        gitHubUsername = source.getGitHubUsername().username;
        profilePicture = source.getProfilePicture().getUrl();
        techStack.addAll(source.getTechStack().stream()
                .map(JsonAdaptedTechStack::new)
                .collect(Collectors.toList()));
        tags.addAll(source.getTags().stream()
                .map(JsonAdaptedTag::new)
                .collect(Collectors.toList()));
    }

    /**
     * Converts this Jackson-friendly adapted contact object into the model's {@code Contact} object.
     *
     * @throws IllegalValueException if there were any data constraints violated in the adapted contact.
     */
    public Contact toModelType() throws IllegalValueException {
        final List<TechStack> personTechStack = new ArrayList<>();
        final List<Tag> personTags = new ArrayList<>();

        if (techStack.size() >= 3) {
            throw new IllegalValueException(TechStack.MESSAGE_CONSTRAINTS_LENGTH);
        }

        for (JsonAdaptedTechStack techStack : techStack) {
            TechStack tsModel = techStack.toModelType();
            if (!TechStack.isValidTechStackNameLength(tsModel.techStackName)) {
                throw new IllegalValueException(TechStack.MESSAGE_CONSTRAINTS_LENGTH);
            } else if (!TechStack.isValidTechStackName(tsModel.techStackName)) {
                throw new IllegalValueException(TechStack.MESSAGE_CONSTRAINTS);
            } else {
                personTechStack.add(tsModel);
            }
        }

        if (tags.size() >= 3) {
            throw new IllegalValueException(TechStack.MESSAGE_CONSTRAINTS_LENGTH);
        }

        for (JsonAdaptedTag tag : tags) {
            Tag tagModel = tag.toModelType();
            if (!Tag.isValidTagNameLength(tagModel.tagName)) {
                throw new IllegalValueException(TechStack.MESSAGE_CONSTRAINTS_LENGTH);
            } else if (!Tag.isValidTagName(tagModel.tagName)) {
                throw new IllegalValueException(TechStack.MESSAGE_CONSTRAINTS);
            } else {
                personTags.add(tagModel);
            }
        }

        if (name == null) {
            throw new IllegalValueException(String.format(MISSING_FIELD_MESSAGE_FORMAT, Name.class.getSimpleName()));
        }
        if (!Name.isValidName(name)) {
            throw new IllegalValueException(Name.MESSAGE_CONSTRAINTS);
        }
        final Name modelName = new Name(name);

        if (phone == null) {
            throw new IllegalValueException(String.format(MISSING_FIELD_MESSAGE_FORMAT, Phone.class.getSimpleName()));
        }
        if (!Phone.isValidPhone(phone)) {
            throw new IllegalValueException(Phone.MESSAGE_CONSTRAINTS);
        }
        final Phone modelPhone = new Phone(phone);

        if (email == null) {
            throw new IllegalValueException(String.format(MISSING_FIELD_MESSAGE_FORMAT, Email.class.getSimpleName()));
        }
        if (!Email.isValidEmail(email)) {
            throw new IllegalValueException(Email.MESSAGE_CONSTRAINTS);
        }
        final Email modelEmail = new Email(email);

        if (address == null) {
            throw new IllegalValueException(String.format(MISSING_FIELD_MESSAGE_FORMAT, Address.class.getSimpleName()));
        }
        if (!Address.isValidAddress(address)) {
            throw new IllegalValueException(Address.MESSAGE_CONSTRAINTS);
        }
        final Address modelAddress = new Address(address);
        if (gitHubUsername == null) {
            throw new IllegalValueException(String.format(MISSING_FIELD_MESSAGE_FORMAT,
                    GitHubUsername.class.getSimpleName()));
        }
        if (!GitHubUsername.isValidGitHubUsername(gitHubUsername)) {
            throw new IllegalValueException(GitHubUsername.MESSAGE_CONSTRAINTS);
        }
        final GitHubUsername modelGitHubUsername = new GitHubUsername(gitHubUsername);

        final Set<TechStack> modelTechStack = new HashSet<>(personTechStack);
        final Set<Tag> modelTags = new HashSet<>(personTags);
        final ProfilePicture modelProfilePicture = new ProfilePicture(profilePicture);

        return new Contact(modelName, modelPhone, modelEmail, modelAddress, modelGitHubUsername, modelTechStack,
                modelTags, modelProfilePicture);
    }

}
