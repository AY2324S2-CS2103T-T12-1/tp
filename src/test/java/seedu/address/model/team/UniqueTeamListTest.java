package seedu.address.model.team;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.testutil.Assert.assertThrows;
import static seedu.address.testutil.TypicalContacts.ALICE;
import static seedu.address.testutil.TypicalContacts.BOB;
import static seedu.address.testutil.TypicalContacts.CARL;
import static seedu.address.testutil.TypicalContacts.ELLE;
import static seedu.address.testutil.TypicalContacts.FIONA;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;

import seedu.address.model.contact.Name;
import seedu.address.model.team.exceptions.DuplicateTeamException;
import seedu.address.model.team.exceptions.TeamNotFoundException;

public class UniqueTeamListTest {
    Team teamA = new Team(new Name("A"), Arrays.asList(ALICE, BOB, CARL));
    Team teamB = new Team(new Name("B"), Arrays.asList(ALICE, BOB, CARL));
    private final UniqueTeamList uniqueTeamList = new UniqueTeamList();

    @Test
    public void contains_nullTeam_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> uniqueTeamList.contains(null));
    }

    @Test
    public void contains_contactNotInList_returnsFalse() {
        assertFalse(uniqueTeamList.contains(teamA));
    }

    @Test
    public void contains_contactInList_returnsTrue() {
        uniqueTeamList.add(teamA);
        assertTrue(uniqueTeamList.contains(teamA));
    }

    @Test
    public void contains_contactWithSameIdentityFieldsInList_returnsTrue() {
        uniqueTeamList.add(teamA);
        Team editedAlice = new Team(new Name("A"), Arrays.asList(ELLE, FIONA));
        assertTrue(uniqueTeamList.contains(editedAlice));
    }

    @Test
    public void add_nullTeam_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> uniqueTeamList.add(null));
    }

    @Test
    public void add_duplicateTeam_throwsDuplicateTeamException() {
        uniqueTeamList.add(teamA);
        assertThrows(DuplicateTeamException.class, () -> uniqueTeamList.add(teamA));
    }

    @Test
    public void setTeam_nullTargetTeam_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> uniqueTeamList.setTeam(null, teamA));
    }

    @Test
    public void setTeam_nullEditedTeam_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> uniqueTeamList.setTeam(teamA, null));
    }

    @Test
    public void setTeam_targetTeamNotInList_throwsTeamNotFoundException() {
        assertThrows(TeamNotFoundException.class, () -> uniqueTeamList.setTeam(teamA, teamA));
    }

    @Test
    public void setTeam_editedTeamIsSameTeam_success() {
        uniqueTeamList.add(teamA);
        uniqueTeamList.setTeam(teamA, teamA);
        UniqueTeamList expectedUniqueTeamList = new UniqueTeamList();
        expectedUniqueTeamList.add(teamA);
        assertEquals(expectedUniqueTeamList, uniqueTeamList);
    }

    @Test
    public void setTeam_editedTeamHasSameIdentity_success() {
        uniqueTeamList.add(teamA);
        Team editedAlice = new Team(new Name("A"), Arrays.asList(ELLE, FIONA));
        uniqueTeamList.setTeam(teamA, editedAlice);
        UniqueTeamList expectedUniqueTeamList = new UniqueTeamList();
        expectedUniqueTeamList.add(editedAlice);
        assertEquals(expectedUniqueTeamList, uniqueTeamList);
    }

    @Test
    public void setTeam_editedTeamHasDifferentIdentity_success() {
        uniqueTeamList.add(teamA);
        uniqueTeamList.setTeam(teamA, teamB);
        UniqueTeamList expectedUniqueTeamList = new UniqueTeamList();
        expectedUniqueTeamList.add(teamB);
        assertEquals(expectedUniqueTeamList, uniqueTeamList);
    }

    @Test
    public void setTeam_editedTeamHasNonUniqueIdentity_throwsDuplicateTeamException() {
        uniqueTeamList.add(teamA);
        uniqueTeamList.add(teamB);
        assertThrows(DuplicateTeamException.class, () -> uniqueTeamList.setTeam(teamA, teamB));
    }

    @Test
    public void remove_nullTeam_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> uniqueTeamList.remove(null));
    }

    @Test
    public void remove_contactDoesNotExist_throwsTeamNotFoundException() {
        assertThrows(TeamNotFoundException.class, () -> uniqueTeamList.remove(teamA));
    }

    @Test
    public void remove_existingTeam_removesTeam() {
        uniqueTeamList.add(teamA);
        uniqueTeamList.remove(teamA);
        UniqueTeamList expectedUniqueTeamList = new UniqueTeamList();
        assertEquals(expectedUniqueTeamList, uniqueTeamList);
    }

    @Test
    public void setTeams_nullUniqueTeamList_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> uniqueTeamList.setTeams((UniqueTeamList) null));
    }

    @Test
    public void setTeams_uniqueTeamList_replacesOwnListWithProvidedUniqueTeamList() {
        uniqueTeamList.add(teamA);
        UniqueTeamList expectedUniqueTeamList = new UniqueTeamList();
        expectedUniqueTeamList.add(teamB);
        uniqueTeamList.setTeams(expectedUniqueTeamList);
        assertEquals(expectedUniqueTeamList, uniqueTeamList);
    }

    @Test
    public void setTeams_nullList_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> uniqueTeamList.setTeams((List<Team>) null));
    }

    @Test
    public void setTeams_list_replacesOwnListWithProvidedList() {
        uniqueTeamList.add(teamA);
        List<Team> contactList = Collections.singletonList(teamB);
        uniqueTeamList.setTeams(contactList);
        UniqueTeamList expectedUniqueTeamList = new UniqueTeamList();
        expectedUniqueTeamList.add(teamB);
        assertEquals(expectedUniqueTeamList, uniqueTeamList);
    }

    @Test
    public void setTeams_listWithDuplicateTeams_throwsDuplicateTeamException() {
        List<Team> listWithDuplicateTeams = Arrays.asList(teamA, teamA);
        assertThrows(DuplicateTeamException.class, () -> uniqueTeamList.setTeams(listWithDuplicateTeams));
    }

    @Test
    public void asUnmodifiableObservableList_modifyList_throwsUnsupportedOperationException() {
        assertThrows(UnsupportedOperationException.class, ()
                -> uniqueTeamList.asUnmodifiableObservableList().remove(0));
    }

    @Test
    public void toStringMethod() {
        assertEquals(uniqueTeamList.asUnmodifiableObservableList().toString(), uniqueTeamList.toString());
    }
}

