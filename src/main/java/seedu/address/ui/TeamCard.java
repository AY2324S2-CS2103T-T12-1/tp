package seedu.address.ui;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.OverrunStyle;
import javafx.scene.layout.Region;
import javafx.scene.layout.VBox;
import seedu.address.model.team.Team;

public class TeamCard extends UiPart<Region> {

    private static final String FXML = "TeamListCard.fxml";

    public final Team team;

    @FXML
    private VBox cardPane;
    @FXML
    private Label name;
    @FXML
    private Label id;
    @FXML
    private Label memberCount;

    /**
     * Creates a {@code TeamCard} with the given {@code Team} and index to display.
     */
    public TeamCard(Team team, int displayedIndex) {
        super(FXML);
        this.team = team;

        id.setText(displayedIndex + ". ");
        id.setTextOverrun(OverrunStyle.CLIP);
        name.setText(team.getName().fullName);
        memberCount.setText(String.format("(%d members)", team.getMembers().size()));
    }
}

