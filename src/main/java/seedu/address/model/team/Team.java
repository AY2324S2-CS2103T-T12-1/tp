package seedu.address.model.team;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.List;

import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Name;
import seedu.address.model.contact.UniqueContactList;

public class Team {
    private final Name name;
    private final UniqueContactList members = new UniqueContactList();

    public Team(Name name) {
        requireNonNull(name);
        this.name = name;
    }

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
}
