package seedu.address.model.team;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import seedu.address.model.contact.Contact;
import seedu.address.model.tag.Tag;
import seedu.address.model.techstack.TechStack;



/**
 * Represents statistics about a team, including counts of tech stacks and tags,
 * as well as the total size of the team.
 */
public class TeamStats {

    /**
     * Map of tech stacks to the number of contacts in the team using each tech stack.
     */
    public final Map<TechStack, Integer> techStack;

    /**
     * Map of tags to the number of contacts in the team associated with each tag.
     */
    public final Map<Tag, Integer> tags;

    /**
     * Total number of contacts in the team.
     */
    public final Integer size;


    /**
     * Constructs a {@code TeamStats} object based on the given list of contacts.
     * Counts the occurrences of tech stacks and tags in the contacts list.
     *
     * @param contacts List of contacts to analyze
     */
    public TeamStats(List<Contact> contacts) {
        techStack = countTechStacks(contacts);
        tags = countTags(contacts);
        size = contacts.size();
    }

    /**
     * Constructs an empty {@code TeamStats} object with zero size.
     * Useful for initializing a new team without any contacts.
     */
    public TeamStats() {
        List<Contact> contacts = new ArrayList<>();
        techStack = countTechStacks(contacts);
        tags = countTags(contacts);
        size = contacts.size();
    }

    /**
     * Counts the occurrences of each tech stack in the given list of contacts.
     *
     * @param contacts List of contacts to analyze
     * @return Map of tech stacks to their counts
     */
    public Map<TechStack, Integer> countTechStacks(List<Contact> contacts) {
        Map<TechStack, Integer> techStackCounts = new HashMap<>();
        for (Contact contact : contacts) {
            for (TechStack techStack : contact.getTechStack()) {
                techStackCounts.put(techStack, techStackCounts.getOrDefault(techStack, 0) + 1);
            }
        }
        return techStackCounts;
    }

    /**
     * Counts the occurrences of each tag in the given list of contacts.
     *
     * @param contacts List of contacts to analyze
     * @return Map of tags to their counts
     */
    public Map<Tag, Integer> countTags(List<Contact> contacts) {
        Map<Tag, Integer> tagCounts = new HashMap<>();
        for (Contact contact : contacts) {
            for (Tag tag : contact.getTags()) {
                tagCounts.put(tag, tagCounts.getOrDefault(tag, 0) + 1);
            }
        }
        return tagCounts;
    }
}
