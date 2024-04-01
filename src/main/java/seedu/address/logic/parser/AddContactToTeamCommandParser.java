//package seedu.address.logic.parser;
//
//import seedu.address.logic.commands.AddContactToTeamCommand;
//import seedu.address.logic.parser.exceptions.ParseException;
//
//import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;
//
///**
// * Parses input arguments and creates a new AddContactToTeamCommand object.
// */
//public class AddContactToTeamCommandParser implements Parser<AddContactToTeamCommand> {
//
//    @Override
//    public AddContactToTeamCommand parse(String args) throws ParseException {
//        String[] indices = args.trim().split("\\s+");
//        if (indices.length != 4 || !indices[0].equals("team") || !indices[2].equals("add")) {
//            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, AddContactToTeamCommand.MESSAGE_USAGE));
//        }
//
//        int teamIndex;
//        int contactIndex;
//        try {
//            teamIndex = Integer.parseInt(indices[1]);
//            contactIndex = Integer.parseInt(indices[3]);
//        } catch (NumberFormatException e) {
//            throw new ParseException("Invalid index format");
//        }
//
//        return new AddContactToTeamCommand(teamIndex, contactIndex);
//    }
//
//}

package seedu.address.logic.parser;

import seedu.address.logic.commands.AddContactToTeamCommand;
import seedu.address.logic.parser.exceptions.ParseException;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;

/**
 * Parses input arguments and creates a new AddContactToTeamCommand object.
 */
public class AddContactToTeamCommandParser implements Parser<AddContactToTeamCommand> {

    private static final String COMMAND_WORD = "add-to-team";

    @Override
    public AddContactToTeamCommand parse(String args) throws ParseException {
        String fullCommand = COMMAND_WORD + " " + args.trim();

        String[] indices = fullCommand.split("\\s+");
        System.out.println(indices.length);

        if (indices.length < 3 || !indices[0].equals(COMMAND_WORD)) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, AddContactToTeamCommand.MESSAGE_USAGE));
        }

        int teamIndex;
        int contactIndex;
        try {
            teamIndex = Integer.parseInt(indices[1]);
            contactIndex = Integer.parseInt(indices[2]);
        } catch (NumberFormatException | ArrayIndexOutOfBoundsException e) {
            throw new ParseException("Invalid index format");
        }

        return new AddContactToTeamCommand(teamIndex, contactIndex);
    }
}
