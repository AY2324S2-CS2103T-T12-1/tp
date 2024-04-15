package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.testutil.Assert.assertThrows;
import static seedu.address.testutil.TypicalContacts.ALICE;
import static seedu.address.testutil.TypicalContacts.BOB;
import static seedu.address.testutil.TypicalContacts.CARL;

import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.function.Predicate;

import org.junit.jupiter.api.Test;

import javafx.collections.ObservableList;
import seedu.address.commons.core.GuiSettings;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.CodeConnect;
import seedu.address.model.Model;
import seedu.address.model.ReadOnlyCodeConnect;
import seedu.address.model.ReadOnlyUserPrefs;
import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Name;
import seedu.address.model.team.Team;

public class AddTeamCommandTest {
    final Team validTeam = new Team(new Name("Team"), Arrays.asList(ALICE, BOB, CARL));
    final Team teamA = new Team(new Name("A"), Arrays.asList(ALICE, BOB, CARL));
    final Team teamB = new Team(new Name("B"), Arrays.asList(ALICE, BOB, CARL));

    @Test
    public void constructor_nullTeam_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> new AddTeamCommand(null));
    }

    @Test
    public void execute_teamAcceptedByModel_addSuccessful() throws Exception {
        seedu.address.logic.commands.AddTeamCommandTest.ModelStubAcceptingTeamAdded modelStub =
                new seedu.address.logic.commands.AddTeamCommandTest.ModelStubAcceptingTeamAdded();

        CommandResult commandResult = new AddTeamCommand(validTeam).execute(modelStub);

        assertEquals(String.format(AddTeamCommand.MESSAGE_SUCCESS, Messages.format(validTeam)),
                commandResult.getFeedbackToUser());
        assertEquals(Arrays.asList(validTeam), modelStub.teamsAdded);
    }

    @Test
    public void execute_duplicateTeam_throwsCommandException() {
        AddTeamCommand addCommand = new AddTeamCommand(validTeam);
        seedu.address.logic.commands.AddTeamCommandTest.ModelStub modelStub =
                new seedu.address.logic.commands.AddTeamCommandTest.ModelStubWithTeam(validTeam);

        assertThrows(CommandException.class,
                AddTeamCommand.MESSAGE_DUPLICATE_TEAM, () -> addCommand.execute(modelStub));
    }

    @Test
    public void equals() {
        AddTeamCommand addAliceCommand = new AddTeamCommand(teamA);
        AddTeamCommand addBobCommand = new AddTeamCommand(teamB);

        // same object -> returns true
        assertTrue(addAliceCommand.equals(addAliceCommand));

        // same values -> returns true
        AddTeamCommand addAliceCommandCopy = new AddTeamCommand(teamA);
        assertTrue(addAliceCommand.equals(addAliceCommandCopy));

        // different types -> returns false
        assertFalse(addAliceCommand.equals(1));

        // null -> returns false
        assertFalse(addAliceCommand.equals(null));

        // different team -> returns false
        assertFalse(addAliceCommand.equals(addBobCommand));
    }

    @Test
    public void toStringMethod() {
        AddTeamCommand addCommand = new AddTeamCommand(teamA);
        String expected = AddTeamCommand.class.getCanonicalName() + "{toAdd=" + teamA + "}";
        assertEquals(expected, addCommand.toString());
    }

    /**
     * A default model stub that have all of the methods failing.
     */
    private class ModelStub implements Model {
        @Override
        public void setUserPrefs(ReadOnlyUserPrefs userPrefs) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public ReadOnlyUserPrefs getUserPrefs() {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public GuiSettings getGuiSettings() {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void setGuiSettings(GuiSettings guiSettings) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public Path getCodeConnectFilePath() {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void setCodeConnectFilePath(Path codeConnectFilePath) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void addTeam(Team team) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void deleteTeam(Team target) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void setTeam(Team target, Team editedTeam) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void setCodeConnect(ReadOnlyCodeConnect newData) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public ReadOnlyCodeConnect getCodeConnect() {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public boolean hasContact(Contact contact) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void deleteContact(Contact target) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void addContact(Contact contact) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void setContact(Contact target, Contact editedContact) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public ObservableList<Contact> getFilteredContactList() {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public void updateFilteredContactList(Predicate<Contact> predicate) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public boolean hasTeam(Team team) {
            throw new AssertionError("This method should not be called.");
        }

        @Override
        public ObservableList<Team> getTeamList() {
            throw new AssertionError("This method should not be called.");
        }
    }

    /**
     * A Model stub that contains a single team.
     */
    private class ModelStubWithTeam extends seedu.address.logic.commands.AddTeamCommandTest.ModelStub {
        private final Team team;

        ModelStubWithTeam(Team team) {
            requireNonNull(team);
            this.team = team;
        }

        @Override
        public boolean hasTeam(Team team) {
            requireNonNull(team);
            return this.team.isSameTeam(team);
        }
    }

    /**
     * A Model stub that always accept the team being added.
     */
    private class ModelStubAcceptingTeamAdded extends seedu.address.logic.commands.AddTeamCommandTest.ModelStub {
        final ArrayList<Team> teamsAdded = new ArrayList<>();

        @Override
        public boolean hasTeam(Team team) {
            requireNonNull(team);
            return teamsAdded.stream().anyMatch(team::isSameTeam);
        }

        @Override
        public void addTeam(Team team) {
            requireNonNull(team);
            teamsAdded.add(team);
        }

        @Override
        public ReadOnlyCodeConnect getCodeConnect() {
            return new CodeConnect();
        }
    }

}
