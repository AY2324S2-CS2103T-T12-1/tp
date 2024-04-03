package seedu.address.model.team;

import seedu.address.model.contact.Contact;
import seedu.address.model.tag.Tag;
import seedu.address.model.techstack.TechStack;

import java.util.*;

public class TeamStats {

    public final Map<TechStack, Integer> techStack;

    public final Map<Tag, Integer> tags;

    public final Integer size;



    public TeamStats(List<Contact> contacts) {
        techStack = countTechStacks(contacts);
        tags = countTags(contacts);
        size = contacts.size();
    }

    public TeamStats() {
        List<Contact> contacts = new ArrayList<>();
        techStack = countTechStacks(contacts);
        tags = countTags(contacts);
        size = contacts.size();
    }

    public Map<TechStack, Integer> countTechStacks(List<Contact> contacts) {
        Map<TechStack, Integer> techStackCounts = new HashMap<>();
        for (Contact contact : contacts) {
            for (TechStack techStack : contact.getTechStack()) {
                techStackCounts.put(techStack, techStackCounts.getOrDefault(techStack, 0) + 1);
            }
        }
        return techStackCounts;
    }

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
