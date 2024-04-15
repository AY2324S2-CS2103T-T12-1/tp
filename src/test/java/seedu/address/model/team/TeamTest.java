package seedu.address.model.team;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.testutil.Assert.assertThrows;
import static seedu.address.testutil.TypicalContacts.ALICE;
import static seedu.address.testutil.TypicalContacts.BOB;
import static seedu.address.testutil.TypicalContacts.CARL;
import static seedu.address.testutil.TypicalContacts.DANIEL;
import static seedu.address.testutil.TypicalContacts.ELLE;
import static seedu.address.testutil.TypicalContacts.FIONA;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Name;

public class TeamTest {

    @Test
    public void constructor() {
        Name name = new Name("Team");
        List<Contact> contactList = Arrays.asList(ALICE, BOB, CARL);

        //Name only constructor
        Team teamWithName = new Team(name);
        assertEquals(Team.class, teamWithName.getClass());
        assertEquals(name, teamWithName.getName());

        //With contact list
        Team teamWithContacts = new Team(name, contactList);
        assertEquals(Team.class, teamWithContacts.getClass());
        assertEquals(name, teamWithContacts.getName());
        assertEquals(contactList, teamWithContacts.getMembers());

        //With null arguments
        assertThrows(NullPointerException.class, () -> new Team(null));
        assertThrows(NullPointerException.class, () -> new Team(null, null));
        assertThrows(NullPointerException.class, () -> new Team(name, null));

        //With empty contact list
        Team teamWithEmptyContacts = new Team(name, new ArrayList<>());
        assertEquals(0, teamWithEmptyContacts.getMembers().size());
    }
    @Test
    public void membersList_modifyList_throwsUnsupportedOperationException() {
        Team team = new Team(new Name("team"), Arrays.asList(ALICE, BOB, CARL));
        assertThrows(UnsupportedOperationException.class, () -> team.getMembers().remove(0));
    }

    @Test
    public void isSameTeam() {
        Name name = new Name("Team");
        List<Contact> contactList = Arrays.asList(ALICE, BOB, CARL);

        Team team = new Team(name, contactList);

        // same object -> returns true
        assertTrue(team.isSameTeam(team));

        // null -> returns false
        assertFalse(team.isSameTeam(null));

        // same name, different contact list -> returns true
        Team editedTeam = new Team(name, Arrays.asList(DANIEL, ELLE, FIONA));
        assertTrue(team.isSameTeam(editedTeam));

        // different name, all other attributes same -> returns false
        editedTeam = new Team(new Name("different"), contactList);
        assertFalse(team.isSameTeam(editedTeam));

        // name differs in case, all other attributes same -> returns false
        editedTeam = new Team(new Name("team"), contactList);
        assertFalse(team.isSameTeam(editedTeam));

        // name has trailing spaces, all other attributes same -> returns false
        editedTeam = new Team(new Name("team "), contactList);
        assertFalse(team.isSameTeam(editedTeam));
    }

    @Test
    public void equals() {
        Name name = new Name("Team");
        List<Contact> contactList = Arrays.asList(ALICE, BOB, CARL);

        Team team = new Team(name, contactList);
        Team otherTeam = new Team(new Name("Other"), Arrays.asList(ELLE, FIONA));

        // same values -> returns true
        assertTrue(team.equals(new Team(name, Arrays.asList(ALICE, BOB, CARL))));

        // same object -> returns true
        assertTrue(team.equals(team));

        // null -> returns false
        assertFalse(team.equals(null));

        // different type -> returns false
        assertFalse(team.equals(5));

        // different contact -> returns false
        assertFalse(team.equals(otherTeam));

        // different name -> returns false
        Team editedTeam = new Team(new Name("BOb"), contactList);
        assertFalse(team.equals(editedTeam));

        // different contact list -> returns false
        editedTeam = new Team(name, Arrays.asList(BOB, CARL));
        assertFalse(team.equals(editedTeam));
    }
}
