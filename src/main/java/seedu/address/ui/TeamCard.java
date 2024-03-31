package seedu.address.ui;

import javafx.fxml.FXML;
import javafx.geometry.Insets;
import javafx.scene.control.Label;
import javafx.scene.control.OverrunStyle;
import javafx.scene.control.ProgressBar;
import javafx.scene.image.Image;
import javafx.scene.layout.*;
import seedu.address.model.contact.Contact;
import seedu.address.model.contact.ProfilePicture;
import seedu.address.model.team.Team;

import java.util.concurrent.Callable;

public class TeamCard extends UiPart<Region> {

    private static final String FXML = "TeamListCard.fxml";

    /**
     * Note: Certain keywords such as "location" and "resources" are reserved keywords in JavaFX.
     * As a consequence, UI elements' variable names cannot be set to such keywords
     * or an exception will be thrown by JavaFX during runtime.
     *
     * @see <a href="https://github.com/se-edu/addressbook-level4/issues/336">The issue on CodeConnect level 4</a>
     */

    public final Team team;

    @javafx.fxml.FXML
    private HBox cardPane;
    @FXML
    private Label name;
    @FXML
    private Label id;
    @FXML
    private Label eventDate;
    @FXML
    private Label memberCount;
    @FXML
    private GridPane quota;
    @FXML
    private ProgressBar pba;
    @FXML
    private ProgressBar pbb;
    @FXML
    private Label pla;
    @FXML
    private Label plb;

    /**
     * Creates a {@code ContactCode} with the given {@code Contact} and index to display.
     */
    public TeamCard(Team team, int displayedIndex) {
        super(FXML);
        this.team = team;

        id.setText(displayedIndex + ". ");
        id.setTextOverrun(OverrunStyle.CLIP);
        name.setText(team.getName().fullName);
        memberCount.setText(String.format("(%d members)", team.getMembers().size()));
        quota.setVisible(false);
        quota.managedProperty().bind(quota.visibleProperty());
        switch (displayedIndex) {
            case 1:
                if (team.getMembers().stream().anyMatch(contact -> contact.getName().fullName.equals("QUOTA"))) {
                    memberCount.setText("(0 members)");
                    pla.setText("Java");
                    plb.setText("SQL");
                    quota.setVisible(true);
                }
                break;
            case 2:
                quota.setVisible(true);
                pba.setProgress(0.5);
                quota.setPadding(new Insets(3, 0, -20, 21));
                plb.setVisible(false);
                plb.managedProperty().bind(quota.visibleProperty());
                pbb.setVisible(false);
                pbb.managedProperty().bind(quota.visibleProperty());
                eventDate.setText("2/4/2024");
                break;
            case 3:
                eventDate.setText("13/5/2024");
                break;
            case 4:
                eventDate.setText("12/9/2024");
                break;
        }
    }


}

