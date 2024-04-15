package seedu.address.model.contact;

import java.util.List;
import java.util.function.Predicate;

import seedu.address.commons.util.StringUtil;
import seedu.address.commons.util.ToStringBuilder;

/**
 * Tests that a {@code Contact}'s {@code Tag} matches any of the keywords given.
 */
public class TagsContainKeywordsPredicate implements Predicate<Contact> {
    private final List<String> tagKeywords;

    /**
     * Creates a new predicate with the given keywords.
     */
    public TagsContainKeywordsPredicate(List<String> tagKeywords) {
        assert(!tagKeywords.isEmpty());
        this.tagKeywords = tagKeywords;
    }

    @Override
    public boolean test(Contact contact) {
        if (tagKeywords.isEmpty()) {
            return false;
        } else {
            return tagKeywords.stream().allMatch(keyword ->
                    contact.getTags().stream().anyMatch(tag ->
                            StringUtil.containsWordIgnoreCase(tag.tagName, keyword)
                    )
            );
        }
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof TagsContainKeywordsPredicate)) {
            return false;
        }

        TagsContainKeywordsPredicate otherContainsTagKeywordsPredicate = (TagsContainKeywordsPredicate) other;
        return tagKeywords.equals(otherContainsTagKeywordsPredicate.tagKeywords);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).add("tagKeywords", tagKeywords).toString();
    }
}

