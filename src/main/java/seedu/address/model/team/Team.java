package seedu.address.model.team;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.ArrayList;
import java.util.List;

import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Name;
import seedu.address.model.contact.UniqueContactList;

public class Team {
    private final Name name;
    private final UniqueContactList members = new UniqueContactList();

  /**
   * Constructs a {@code Team} with the given name.
   *
   * @param name A valid name for the team.
   */
  public Team(Name name) {
      requireNonNull(name);
      this.name = name;
  }

  /**
   * Additional constructor for creating a team with members.
   *
   * @param name    A valid name for the team.
   * @param members A list of contacts to be members of the team.
   */
  public Team(Name name, List<Contact> members) {
      requireAllNonNull(name, members);
      this.name = name;
      this.members.setContacts(members);
  }

    /**
     * Returns the name of the team.
     *
     * @return The name of the team.
     */
    public Name getName() {
        return name;
    }

    /**
     * Returns an unmodifiable list of members in the team.
     *
     * @return An unmodifiable list of members in the team.
     */
    public List<Contact> getMembers() {
        return members.asUnmodifiableObservableList();
    }

    /**
     * Checks if the given contact is a member of the team.
     *
     * @param contact The contact to check.
     * @return True if the contact is a member of the team, false otherwise.
     */
    public boolean hasMember(Contact contact) {
        return members.contains(contact);
    }

    /**
     * Adds a member to the team.
     * Sorts the members alphabetically after adding.
     *
     * @param contact The contact to add as a member.
     */
    public void addMember(Contact contact) {
        requireNonNull(contact);
        members.add(contact);
        sortMembersAlphabetically();
    }

    // Private method to sort members alphabetically
    private void sortMembersAlphabetically() {
        List<Contact> sortedMembers = new ArrayList<>(members.asUnmodifiableObservableList());
        sortedMembers.sort((contact1, contact2) -> {
            String name1 = contact1.getName().fullName.toLowerCase();
            String name2 = contact2.getName().fullName.toLowerCase();
            return name1.compareTo(name2);
        });
        members.setContacts(sortedMembers);
    }

    /**
     * Removes a member from the team.
     *
     * @param contact The contact to remove as a member.
     */
    public void deleteMember(Contact contact) {
        members.remove(contact);
    }

    /**
     * Returns true if both teams have the same name.
     * This defines a weaker notion of equality between two teams.
     *
     * @param otherTeam The other team to compare with.
     * @return True if both teams have the same name, false otherwise.
     */
    public boolean isSameTeam(Team otherTeam) {
        if (otherTeam == this) {
            return true;
        }

        return otherTeam != null && otherTeam.getName().equals(getName());
    }

    /**
     * Returns true if both teams have the same identity and data fields.
     * This defines a stronger notion of equality between two teams.
     *
     * @param other The other object to compare with.
     * @return True if both teams have the same identity and data fields, false otherwise.
     */
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        if (!(other instanceof Team)) {
            return false;
        }

        Team otherTeam = (Team) other;
        return name.equals(otherTeam.name) && members.equals(otherTeam.members);
    }
}
