package seedu.address.storage;

import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.team.Team;

/**
 * Jackson-friendly version of {@link Team}.
 */
public class JsonAdaptedTeam {
    public static final String MISSING_FIELD_MESSAGE_FORMAT = "Team's %s field is missing!";

    private final String name;

    private final List<JsonAdaptedContact> members = new ArrayList<>();

    /**
     * Constructs a {@code JsonAdaptedTeam} with the given team details.
     */
    @JsonCreator
    public JsonAdaptedTeam(@JsonProperty("name") String name,
                           @JsonProperty("members") List<JsonAdaptedContact> members) {
        requireAllNonNull(name, members);
        this.name = name;
        this.members.addAll(members);
    }

    /**
     * Converts a given {@code Team} into this class for Jackson use.
     */
    public JsonAdaptedTeam(Team source) {
        name = source.getName().fullName;
        members.addAll(source.getMembers().stream().map(JsonAdaptedContact::new).collect(Collectors.toList()));
    }

    public Team toModelType() throws IllegalValueException {
        return null;
    }
}
