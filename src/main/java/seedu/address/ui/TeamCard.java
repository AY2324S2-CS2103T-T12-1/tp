package seedu.address.ui;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Region;
import seedu.address.model.tag.Tag;
import seedu.address.model.team.Team;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

/**
 * An UI component that displays information of a {@code Team}.
 */
public class TeamCard extends UiPart<Region> {

    private static final String FXML = "TeamListCard.fxml";

    public final Team team;

    @FXML
    private HBox cardPane;
    @FXML
    private Label name;


    @FXML
    private HBox techStacks;
    @FXML
    private HBox tags;

    /**
     * Creates a {@code TeamCard} with the given {@code Team} and index to display.
     */
    public TeamCard(Team team, int displayedIndex) {
        super(FXML);
        this.team = team;

        name.setText(team.getName().fullName + "(" + team.stats.size.toString() + ")");

        tags.getChildren().clear();

        Map<Tag, Integer> tagsMap = new HashMap<Tag, Integer>();
        tagsMap.put(new Tag("Java"), 5);
        tagsMap.put(new Tag("Python"), 3);
        tagsMap.put(new Tag("JavaScript"), 2);

        // Populate tags
        tagsMap.entrySet().stream()
                .sorted(Comparator.comparing(entry -> entry.getKey().tagName))
                .forEach(entry -> {
                    Label tagLabel = new Label(entry.getKey().tagName + ": " + entry.getValue());
                    tags.getChildren().add(tagLabel);
                });

        tagsMap.entrySet().stream()
                .sorted(Comparator.comparing(entry -> entry.getKey().tagName))
                .forEach(entry -> {
                    Label tagLabel = new Label(entry.getKey().tagName + ": " + entry.getValue());
                    techStacks.getChildren().add(tagLabel);
                });


    }
}
