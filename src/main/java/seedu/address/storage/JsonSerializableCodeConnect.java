package seedu.address.storage;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.CodeConnect;
import seedu.address.model.ReadOnlyCodeConnect;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

/**
 * An Immutable CodeConnect that is serializable to JSON format.
 */
@JsonRootName(value = "addressbook")
class JsonSerializableCodeConnect {

    public static final String MESSAGE_DUPLICATE_CONTACT = "Contacts list contains duplicate contact(s).";
    public static final String MESSAGE_DUPLICATE_TEAM = "Team list contains duplicate team(s).";


    private final List<JsonAdaptedContact> contacts = new ArrayList<>();
    private final List<JsonAdaptedTeam> teams = new ArrayList<>();

    /**
     * Constructs a {@code JsonSerializableCodeConnect} with the given persons.
     */
    @JsonCreator
    public JsonSerializableCodeConnect(@JsonProperty("contacts") List<JsonAdaptedContact> contacts,
                                       @JsonProperty("teams") List<JsonAdaptedTeam> teams) {
        this.contacts.addAll(contacts);
        this.teams.addAll(teams);
    }

    /**
     * Converts a given {@code ReadOnlyCodeConnect} into this class for Jackson use.
     *
     * @param source future changes to this will not affect the created {@code JsonSerializableCodeConnect}.
     */
    public JsonSerializableCodeConnect(ReadOnlyCodeConnect source) {
        contacts.addAll(source.getContactList().stream().map(JsonAdaptedContact::new).collect(Collectors.toList()));
        teams.addAll(source.getTeamList().stream().map(JsonAdaptedTeam::new).collect(Collectors.toList()));
    }

    /**
     * Converts this CodeConnect into the model's {@code CodeConnect} object.
     *
     * @throws IllegalValueException if there were any data constraints violated.
     */
    public CodeConnect toModelType() throws IllegalValueException {
        CodeConnect codeConnect = new CodeConnect();
        for (JsonAdaptedContact jsonAdaptedContact : contacts) {
            Contact contact = jsonAdaptedContact.toModelType();
            if (codeConnect.hasContact(contact)) {
                throw new IllegalValueException(MESSAGE_DUPLICATE_CONTACT);
            }
            codeConnect.addContact(contact);
        }
        for (JsonAdaptedTeam jsonTeam : teams) {
            Team team = jsonTeam.toModelType(codeConnect.getContactList());
            if (codeConnect.hasTeam(team)) {
                throw new IllegalValueException(MESSAGE_DUPLICATE_TEAM);
            }
            codeConnect.addTeam(team);
        }
        return codeConnect;
    }

}
