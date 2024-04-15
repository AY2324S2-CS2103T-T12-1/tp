package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static seedu.address.logic.parser.CliSyntax.PREFIX_RATING;
import static seedu.address.logic.parser.CliSyntax.PREFIX_TECH_STACK;
import static seedu.address.model.Model.PREDICATE_SHOW_ALL_CONTACTS;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

import seedu.address.commons.core.index.Index;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.contact.Address;
import seedu.address.model.contact.Contact;
import seedu.address.model.contact.Email;
import seedu.address.model.contact.GitHubUsername;
import seedu.address.model.contact.Name;
import seedu.address.model.contact.Phone;
import seedu.address.model.contact.ProfilePicture;
import seedu.address.model.tag.Tag;
import seedu.address.model.techstack.TechStack;

/**
 * Rates the skills of an existing contact in the address book.
 */
public class RateCommand extends Command {

    public static final String COMMAND_WORD = "rate";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Rates the skills of the contact identified "
            + "by the index number used in the displayed contact list. "
            + "Existing tech stack matching the input will be rated with the input values.\n"
            + "Parameters: INDEX (must be a positive integer) "
            + PREFIX_TECH_STACK + "TECH_STACK "
            + PREFIX_RATING + "RATING (must be a positive integer from 0 to 10)\n"
            + "Example: " + COMMAND_WORD + " 1 "
            + PREFIX_TECH_STACK + "C " + PREFIX_RATING + "7";

    public static final String MESSAGE_RATE_CONTACT_SUCCESS = "Rated Contact: %1$s";
    public static final String MESSAGE_INVALID_TECHSTACK_TO_RATE = "This contact does not have stated Tech Stack.";
    public static final String MESSAGE_INVALID_RATING = "Rating should be between 0 and 10.";
    private static Logger logger = Logger.getLogger("RateCommand");

    private final Index index;
    private final int rating;
    private final String techStackName;


    /**
     * @param index of the contact in the filtered contact list to rate
     * @param techStackName details of skill to rate
     * @param rating number to rate the skill of contact with, out of 10
     */
    public RateCommand(Index index, String techStackName, int rating) {
        requireNonNull(index);
        requireNonNull(techStackName);

        this.index = index;
        this.rating = rating;
        this.techStackName = techStackName;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Contact> lastShownList = model.getFilteredContactList();

        if (index.getZeroBased() >= lastShownList.size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_CONTACT_DISPLAYED_INDEX);
        }

        Contact contactToRate = lastShownList.get(index.getZeroBased());
        TechStack techStackToRate = new TechStack(techStackName);

        if (!contactToRate.getTechStack().contains(techStackToRate)) {
            throw new CommandException(MESSAGE_INVALID_TECHSTACK_TO_RATE);
        }

        if (!TechStack.isValidTechStackRating(rating)) {
            throw new CommandException(MESSAGE_INVALID_RATING);
        }

        Contact ratedContact = rateTechStack(contactToRate, techStackToRate, rating);
        
        model.setContact(contactToRate, ratedContact);
        model.updateFilteredContactList(PREDICATE_SHOW_ALL_CONTACTS);
        return new CommandResult(String.format(MESSAGE_RATE_CONTACT_SUCCESS, Messages.format(ratedContact)));
    }

    /**
     * Creates and returns a {@code Contact} with the details of {@code contactToRate}.
     */
    private Contact rateTechStack(Contact contactToRate, TechStack techStack, int rating) {
        assert contactToRate != null;
        assert (rating >= 0 && rating <= 10);
        logger.info("Rating contact:" + contactToRate);
        Name contactName = contactToRate.getName();
        Phone contactPhone = contactToRate.getPhone();
        Email contactEmail = contactToRate.getEmail();
        Address contactAddress = contactToRate.getAddress();
        GitHubUsername contactGitHubUsername = contactToRate.getGitHubUsername();
        Set<Tag> contactTags = contactToRate.getTags();
        ProfilePicture contactProfilePicture = contactToRate.getProfilePicture();

        Set<TechStack> updatedTechStacks = new HashSet<>();

        for (TechStack existingTechStack : contactToRate.getTechStack()) {
            if (existingTechStack.equals(techStack)) {
                // Update the rating for the existing tech stack
                TechStack techStackToAdd = new TechStack(existingTechStack.techStackName, rating);
                updatedTechStacks.add(techStackToAdd);

            } else {
                updatedTechStacks.add(existingTechStack);
            }
        }
        return new Contact(contactName, contactPhone,
                contactEmail, contactAddress,
                contactGitHubUsername, updatedTechStacks,
                contactTags, contactProfilePicture);
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof RateCommand)) {
            return false;
        }

        RateCommand otherRateCommand = (RateCommand) other;
        return index.equals(otherRateCommand.index)
                && rating == otherRateCommand.rating
                && techStackName.equals(otherRateCommand.techStackName);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("index", index)
                .toString();
    }
}
