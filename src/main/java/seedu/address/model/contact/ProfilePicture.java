package seedu.address.model.contact;

import java.util.Objects;

/**
 * Stores information about the profile picture of a contact.
 */
public class ProfilePicture {
    public static final String DEFAULT_URL =
            ProfilePicture.class.getResource("/images/avatar_13.jpg").toExternalForm();
    private String url;
    public ProfilePicture(String url) {
        this.url = url;
    }

    public String getUrl() {
        return this.url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        // instanceof handles nulls
        if (!(o instanceof ProfilePicture)) {
            return false;
        }
        ProfilePicture that = (ProfilePicture) o;
        return Objects.equals(this.url, that.url);
    }



    @Override
    public int hashCode() {
        return Objects.hash(url);
    }

    @Override
    public String toString() {
        return url;
    }
}
