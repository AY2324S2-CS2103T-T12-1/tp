package seedu.address.logic;

import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javafx.fxml.FXML;
import seedu.address.model.contact.Contact;

/**
 * Handles opening the system's default mail application to send an email with the provided email address.
 */
public class MailApp {

    private static final Logger logger = Logger.getLogger(MailApp.class.getName());
    private Contact contact; // The contact associated with this MailApp

    /**
     * Initializes a new instance of the MailApp class with the provided contact object.
     * The contact object contains the contact information, including the email address,
     * to whom the email will be sent.
     *
     * @param contact The Contact object representing the contact information of the recipient.
     */
    public MailApp(Contact contact) {
        this.contact = contact;
    }


    /**
     * Handles the event when the email label is clicked. If the associated contact
     * has a valid email address, opens the default mail application with a new
     * email composition window addressed to the contact's email address.
     */
    @FXML
    public void handleEmailClicked() {
        if (contact != null && contact.getEmail() != null) {
            logger.log(Level.INFO, "Opening default mail application for contact: " + contact.getName());
            openDefaultMailApp(contact.getEmail().toString());
        } else {
            logger.log(Level.WARNING, "No email address found for contact: " + contact.getName());
        }
    }

    /**
     * Opens the default mail application with a new email composition window
     * addressed to the specified recipient's email address.
     *
     * @param recipientEmail The email address of the recipient
     */
    private void openDefaultMailApp(String recipientEmail) {
        if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.MAIL)) {
            try {
                URI mailto = new URI("mailto:" + recipientEmail);
                Desktop.getDesktop().mail(mailto);
                logger.log(Level.INFO, "Default mail application opened for email: " + recipientEmail);
            } catch (IOException | URISyntaxException e) {
                e.printStackTrace();
                logger.log(Level.SEVERE, "Error opening default mail application", e);
            }
        } else {
            logger.log(Level.SEVERE, "Desktop doesn't support mailto");
            throw new RuntimeException("Desktop doesn't support mailto");
        }
    }
}
