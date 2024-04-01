package seedu.address.model;

import java.nio.file.Path;
import java.util.function.Predicate;

import javafx.collections.ObservableList;
import seedu.address.commons.core.GuiSettings;
import seedu.address.model.contact.Contact;
import seedu.address.model.team.Team;

/**
 * The API of the Model component.
 */
public interface Model {
    /** {@code Predicate} that always evaluate to true */
    Predicate<Contact> PREDICATE_SHOW_ALL_CONTACTS = unused -> true;

    /**
     * Replaces user prefs data with the data in {@code userPrefs}.
     */
    void setUserPrefs(ReadOnlyUserPrefs userPrefs);

    /**
     * Returns the user prefs.
     */
    ReadOnlyUserPrefs getUserPrefs();

    /**
     * Returns the user prefs' GUI settings.
     */
    GuiSettings getGuiSettings();

    /**
     * Sets the user prefs' GUI settings.
     */
    void setGuiSettings(GuiSettings guiSettings);

    /**
     * Returns the user prefs' CodeConnect file path.
     */
    Path getCodeConnectFilePath();

    /**
     * Sets the user prefs' CodeConnect file path.
     */
    void setCodeConnectFilePath(Path codeConnectFilePath);

    /**
     * Replaces CodeConnect data with the data in {@code codeConnect}.
     */
    void setCodeConnect(ReadOnlyCodeConnect codeConnect);

    /** Returns the CodeConnect */
    ReadOnlyCodeConnect getCodeConnect();

    /**
     * Returns true if a contact with the same identity as {@code contact} exists in CodeConnect.
     */
    boolean hasContact(Contact contact);

    /**
     * Deletes the given contact.
     * The contact must exist in CodeConnect.
     */
    void deleteContact(Contact target);

    /**
     * Adds the given contact.
     * {@code contact} must not already exist in CodeConnect.
     */
    void addContact(Contact contact);

    /**
     * Replaces the given contact {@code target} with {@code editedContact}.
     * {@code target} must exist in CodeConnect.
     * The contact identity of {@code editedContact} must not be the same as another existing contact in CodeConnect.
     */
    void setContact(Contact target, Contact editedContact);

    /** Returns an unmodifiable view of the filtered contact list */
    ObservableList<Contact> getFilteredContactList();

    /**
     * Updates the filter of the filtered contact list to filter by the given {@code predicate}.
     * @throws NullPointerException if {@code predicate} is null.
     */
    void updateFilteredContactList(Predicate<Contact> predicate);

    /**
     * Returns true if a team with the same identity as {@code team} exists in CodeConnect.
     */
    boolean hasTeam(Team team);
    /**
     * Adds the given team.
     * {@code team} must not already exist in CodeConnect.
     */
    void addTeam(Team team);
    /**
     * Deletes the given team.
     * The team must exist in CodeConnect.
     */
    void deleteTeam(Team target);
    /**
     * Replaces the given team {@code target} with {@code editedTeam}.
     * {@code target} must exist in CodeConnect.
     * The contact identity of {@code editedTeam} must not be the same as another existing team in CodeConnect.
     */
    void setTeam(Team target, Team editedTeam);

    /**
     * Adds a contact to the specified team.
     *
     * @param team The team to which the contact will be added.
     * @param contact The contact to be added to the team.
     */
    void addContactToTeam(Team team, Contact contact);

    /**
     * Deletes a contact from the specified team.
     *
     * @param team The team from which the contact will be deleted.
     * @param contact The contact to be deleted from the team.
     */
    void deleteContactFromTeam(Team team, Contact contact);
}
