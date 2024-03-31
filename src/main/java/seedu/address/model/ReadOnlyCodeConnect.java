package seedu.address.model;

import javafx.collections.ObservableList;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

/**
 * Unmodifiable view of CodeConnect
 */
public interface ReadOnlyCodeConnect {

    /**
     * Returns an unmodifiable view of the contacts list.
     * This list will not contain any duplicate contacts.
     */
    ObservableList<Contact> getContactList();
    /**
     * Returns an unmodifiable view of the teams list.
     * This list will not contain any duplicate contacts.
     */
    ObservableList<Team> getTeamList();

}
