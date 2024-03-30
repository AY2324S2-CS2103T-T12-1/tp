package seedu.address.storage;

import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Name;
import seedu.address.model.team.Team;

/**
 * Jackson-friendly version of {@link Team}.
 */
public class JsonAdaptedTeam {
    public static final String MISSING_FIELD_MESSAGE_FORMAT = "Team's %s field is missing!";

    private final String name;

    private final List<String> members = new ArrayList<>();

    /**
     * Constructs a {@code JsonAdaptedTeam} with the given team details.
     */
    @JsonCreator
    public JsonAdaptedTeam(@JsonProperty("name") String name,
                           @JsonProperty("members") List<String> members) {
        requireAllNonNull(name, members);
        this.name = name;
        this.members.addAll(members);
    }

    /**
     * Converts a given {@code Team} into this class for Jackson use.
     */
    public JsonAdaptedTeam(Team source) {
        name = source.getName().fullName;
        members.addAll(source.getMembers().stream().map(x -> x.getName().fullName).collect(Collectors.toList()));
    }

    /**
     * Converts this Jackson-friendly adapted team object into the model's {@code Team} object.
     *
     * @throws IllegalValueException if there were any data constraints violated in the adapted contact.
     */
    public Team toModelType(List<Contact> allContacts) throws IllegalValueException {
        requireAllNonNull(name, members);

        if (!Name.isValidName(name)) {
            throw new IllegalValueException(Name.MESSAGE_CONSTRAINTS);
        }

        final Name modelName = new Name(name);

        List<Contact> contacts = new ArrayList<>();
        for (String c : members) {
            if (!allContacts.stream().anyMatch(e -> e.getName().fullName.equals(c))) {
                throw new IllegalValueException("Unable to find team member in contact list");
            }

            contacts.addAll(
                    allContacts.stream().filter(e -> e.getName().fullName.equals(c)).collect(Collectors.toList()));
        }

        return new Team(modelName, contacts);
    }
}
