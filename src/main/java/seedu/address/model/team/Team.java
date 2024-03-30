package seedu.address.model.team;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.List;

import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Name;
import seedu.address.model.contact.UniqueContactList;

/**
 * Represents a team in CodeConnect.
 * Guarantees: details are present and not null, field values are validated, immutable.
 */
public class Team {
    private final Name name;
    private final UniqueContactList members = new UniqueContactList();

    /**
     * Every field must be present and not null.
     */
    public Team(Name name) {
        requireNonNull(name);
        this.name = name;
    }

    /**
     * Additional constructor for creating a team with members.
     */
    public Team(Name name, List<Contact> members) {
        requireAllNonNull(name, members);
        this.name = name;
        this.members.setContacts(members);
    }

    public Name getName() {
        return name;
    }

    public List<Contact> getMembers() {
        return members.asUnmodifiableObservableList();
    }

    /**
     * Returns true if both teams have the same name.
     * This defines a weaker notion of equality between two teams.
     */
    public boolean isSameTeam(Team otherTeam) {
        if (otherTeam == this) {
            return true;
        }

        return otherTeam != null
                && otherTeam.getName().equals(getName());
    }

    /**
     * Returns true if both teams have the same identity and data fields.
     * This defines a stronger notion of equality between two teams.
     */
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Team)) {
            return false;
        }

        Team otherTeam = (Team) other;
        return name.equals(otherTeam.name)
                && members.equals(otherTeam.members);
    }
}
