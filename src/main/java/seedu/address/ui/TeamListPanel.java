package seedu.address.ui;

import java.util.logging.Logger;

import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;
import javafx.scene.layout.Region;
import seedu.address.commons.core.LogsCenter;
import seedu.address.model.team.Team;

/**
 * Panel containing the list of teams.
 */
public class TeamListPanel extends UiPart<Region> {
    private static final String FXML = "TeamListPanel.fxml";
    private final Logger logger = LogsCenter.getLogger(TeamListPanel.class);

    @FXML
    private ListView<Team> teamListView;

    /**
     * Creates a {@code TeamListPanel} with the given {@code ObservableList}.
     */
    public TeamListPanel(ObservableList<Team> teamList) {
        super(FXML);
        teamListView.setItems(teamList);
        teamListView.setCellFactory(listView -> new ListCell<Team>() {
            {
                setPrefWidth(0);
            }
            @Override
            protected void updateItem(Team team, boolean empty) {
                super.updateItem(team, empty);

                if (empty || team == null) {
                    setGraphic(null);
                    setText(null);
                } else {
                    setGraphic(new TeamCard(team, getIndex() + 1).getRoot());
                }
            }
        });
    }
}
