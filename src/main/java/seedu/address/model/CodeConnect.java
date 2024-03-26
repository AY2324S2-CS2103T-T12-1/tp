package seedu.address.model;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.List;

import javafx.collections.ObservableList;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.model.contact.Contact;
import seedu.address.model.contact.UniqueContactList;
import seedu.address.model.team.Team;
import seedu.address.model.team.UniqueTeamList;

/**
 * Wraps all data at the CodeConnect level
 * Duplicates are not allowed (by .isSameContact comparison)
 */
public class CodeConnect implements ReadOnlyCodeConnect {

    private final UniqueContactList contacts;
    private final UniqueTeamList teams;

    /*
     * The 'unusual' code block below is a non-static initialization block, sometimes used to avoid duplication
     * between constructors. See https://docs.oracle.com/javase/tutorial/java/javaOO/initial.html
     *
     * Note that non-static init blocks are not recommended to use. There are other ways to avoid duplication
     *   among constructors.
     */
    {
        contacts = new UniqueContactList();
        teams = new UniqueTeamList();
    }

    public CodeConnect() {}

    /**
     * Creates an CodeConnect using the Persons in the {@code toBeCopied}
     */
    public CodeConnect(ReadOnlyCodeConnect toBeCopied) {
        this();
        resetData(toBeCopied);
    }

    //// list overwrite operations

    /**
     * Replaces the contents of the contact list with {@code contacts}.
     * {@code contacts} must not contain duplicate contacts.
     */
    public void setContacts(List<Contact> contacts) {
        this.contacts.setContacts(contacts);
    }

    /**
     * Resets the existing data of this {@code CodeConnect} with {@code newData}.
     */
    public void resetData(ReadOnlyCodeConnect newData) {
        requireNonNull(newData);

        setContacts(newData.getContactList());
    }

    //// contact-level operations

    /**
     * Returns true if a contact with the same identity as {@code contact} exists in CodeConnect.
     */
    public boolean hasContact(Contact contact) {
        requireNonNull(contact);
        return contacts.contains(contact);
    }

    /**
     * Adds a contact to the address book.
     * The contact must not already exist in the address book.
     */
    public void addContact(Contact p) {
        contacts.add(p);
    }

    /**
     * Replaces the given contact {@code target} in the list with {@code editedContact}.
     * {@code target} must exist in the address book.
     * The contact identity of {@code editedContact} must not be the same as another existing contact in the address book.
     */
    public void setContact(Contact target, Contact editedContact) {
        requireNonNull(editedContact);

        contacts.setContact(target, editedContact);
    }

    /**
     * Removes {@code key} from this {@code CodeConnect}.
     * {@code key} must exist in the address book.
     */
    public void removeContact(Contact key) {
        contacts.remove(key);
    }

    /**
     * Returns true if a team with the same identity as {@code team} exists in CodeConnect.
     */
    public boolean hasTeam(Team team) {
        requireNonNull(team);
        return teams.contains(team);
    }
    /**
     * Adds the given team.
     * {@code team} must not already exist in CodeConnect.
     */
    public void addTeam(Team team) {
        requireNonNull(team);
        teams.add(team);
    }
    /**
     * Deletes the given team.
     * The team must exist in CodeConnect.
     */
    public void deleteTeam(Team target) {
        requireNonNull(target);
        teams.remove(target);
    }
    /**
     * Replaces the given team {@code target} with {@code editedTeam}.
     * {@code target} must exist in CodeConnect.
     * The contact identity of {@code editedTeam} must not be the same as another existing team in CodeConnect.
     */
    public void setTeam(Team target, Team editedTeam) {
        requireAllNonNull(target, editedTeam);
        teams.setTeam(target, editedTeam);
    }

    //// util methods

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("contacts", contacts)
                .toString();
    }

    @Override
    public ObservableList<Contact> getContactList() {
        return contacts.asUnmodifiableObservableList();
    }

    @Override
    public ObservableList<Team> getTeamList() {
        return teams.asUnmodifiableObservableList();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof CodeConnect)) {
            return false;
        }

        CodeConnect otherCodeConnect = (CodeConnect) other;
        return contacts.equals(otherCodeConnect.contacts);
    }

    @Override
    public int hashCode() {
        return contacts.hashCode();
    }
}
