package seedu.address.logic.commands;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.model.Model;
import seedu.address.model.contact.*;
import seedu.address.model.team.Team;
import seedu.address.model.techstack.TechStack;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

import static java.util.Objects.requireNonNull;

public class MockCommand extends Command {
    private int type;

    public MockCommand(int type) {
        this.type = type;
    }

    @Override
    public CommandResult execute(Model model) {
        switch (type) {
            case 0:
                model.setTeam(model.getCodeConnect().getTeamList().get(0), new Team(new Name("NUS Hack 2024"), Arrays.asList(
                        new Contact(new Name("QUOTA"), new Phone("123456"), new Email("a@a.com"), new Address("123"), new GitHubUsername("as"),
                                Collections.emptySet(), Collections.emptySet(), new ProfilePicture("")))));
                return new CommandResult("Added required skills to team: NUS Hack 2024 (2 Java, 1 SQL)");
            case 1:
                model.updateFilteredContactList(c -> c.getTechStack().contains(new TechStack("Java"))
                        || c.getTechStack().contains(new TechStack("SQL"))
                        || c.getName().fullName.equals("Song Yee"));
                return new CommandResult("Suggesting members for team: NUS Hack 2024");
        }
        return new CommandResult(
                String.format(Messages.MESSAGE_CONTACT_LISTED_OVERVIEW, model.getFilteredContactList().size()));

    }
}
