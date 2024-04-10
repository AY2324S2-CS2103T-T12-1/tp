---
  layout: default.md
  title: "User Guide"
---

# CodeConnect User Guide
Hello fellow student developers! Welcome to your one-stop shop for managing developers' contacts!

CodeConnect is a **developer-first networking application** for student developers to keep track of and reach out easily to other student developers, so they can easily form teams for hackathons.

We are **optimised for use via a Command Line Interface** (CLI) while still having the benefits of a **Graphical User Interface (GUI)**. If you can type fast, CC can get your contact management tasks done faster than traditional GUI apps.

### What can CodeConnect do for you?
- **Add, Edit, Update, Delete** a student developer's contact details
- Record **Tech Stack** and **GitHub Usernames** for each developer
- **Find** developers by their name, tags, or tech stack
- **Email** developers directly from the app
- **Manage** your hackathon teams by adding your team members to CodeConnect
- **Export** your team details for easy signing up for hackathons

# Table of Contents
- [Introduction](#introduction)
- [Usage of User Guide](#usage-of-user-guide)
- [Installation Guide](#installation-guide)
- [Getting Started](#getting-started)
- [Tutorial (coming soon)](#tutorial)
- [Features](#features)
- [FAQ](#faq)
    - [General Questions](#general-questions)
    - [Contact-Related Questions](#task-related-questions)
- [Known Issues](#known-issues)
- [Command Summary](#command-summary)
---

## Introduction
Hey there, aspiring student innovators! 🚀 Welcome to CodeConnect, your passport to a vibrant world of collaboration and innovation! 🌟

Imagine a place where you can manage the details of like-minded student developers as effortlessly as a tap on your screen. A world where forming dream teams for hackathons is not just a possibility, but a seamless reality.

Well, look no further! CodeConnect is your developer-first networking application, designed by student developers for student developers. Whether you're a coding wizard in Python, a design maestro in UI/UX, or a tech enthusiast exploring new horizons, CodeConnect is your ultimate ally.

So, get ready to explore, connect, and create with CodeConnect! 🎉 Let's turn those tech dreams into reality, one collaboration at a time! 💻✨

[[Jump to Table of Contents]](#table-of-contents)

---

## Usage of User Guide
This guide is designed to help you learn how to use CodeConnect effectively and explore its various features. If you are unfamiliar with programming, don't worry - we have intentionally made it beginner-friendly so that even non-developers will be able to use our guide with ease.

If you're already familiar with CodeConnect, you can skip ahead to the [features section](#features), or to the [command summary](#command-summary). <br>
If you're unsure of the constraints of each parameter for a command you want to enter, head over to the [parameter constraints](#parameter-constraints) to learn more! <br>
But if you're new to CodeConnect, simply follow along step-by-step to discover how to gather and form your next champion team!

Should you encounter any problems along your journey, please take a look at our [FAQ](#faq) for more information.

### Keynotes:
Throughout this guide, you'll notice colored blocks of information. These are used to highlight different types of information for easier understanding.

<div class="alert alert-info" markdown="1">
ℹ️: The blue block highlights additional information that might be useful in clearing some confusion.
</div>

<div class="alert alert-warning" markdown="1">
⚠️: The yellow block draws attention to crucial information that requires careful consideration to mitigate potential risks or challenges.
</div>

<div class="alert alert-danger" markdown="1">
❗: The red block highlights information that requires immediate attention due to potential irreversible risks.
</div>

Without further ado, let's dive in and uncover the power of CodeConnect! 🚀

[[Jump to Table of Contents]](#table-of-contents)

---
## Installation Guide

1. Ensure you have Java `11` or above installed in your Computer.

2. Download the latest `codeconnect.jar` from [here](https://github.com/se-edu/addressbook-level3/releases).

3. Copy the file to the folder you want to use as the _home folder_ for your CodeConnect.

4. Open a command terminal, `cd` into the folder you put the jar file in, and use the `java -jar codeconnect.jar` command to run the application.<br>
   
5. A GUI similar to the below should appear in a few seconds. Note how the app contains some sample data.<br>
   ![Ui](images/Ui.png)

6. Type the command in the command box and press Enter to execute it. (e.g. typing **`help`** and pressing Enter will open the help window.)<br>
   Some example commands you can try:

   - `list` : Lists all contacts.

   - `add n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01 g/johnDoee ts/Java` : Adds a contact named `John Doe` to the Address Book.

   - `delete 3` : Deletes the 3rd contact shown in the current list.

   - `clear` : Deletes all contacts.

   - `exit` : Exits the app.

7. Refer to the [Features](#features) below for details of each command.

[[Jump to Table of Contents]](#table-of-contents)

---

## Getting Started
 
Below you will find explanations for each key element in the CodeConnect GUI.

***Note:*** What you see in the GUI may differ slightly from the images below, as it depends on the data that is stored locally.

This is the text input area. This is the most important part of the program. Here is where you will key in the commands you need.<br>
![quickstart-input.png](images/quick-start/quickstart-input.png)

This is the file button. Here is where you can exit the program.<br>
![quickstart-file.png](images/quick-start/quickstart-file.png)
 
This is the help button. Here is where you can find any kind of help with CodeConnect.<br>
![quickstart-help.png](images/quick-start/quickstart-help.png)

This is our teams display panel. All the teams added are displayed here.<br>
![quickstart-teamlist.png](images/quick-start/quickstart-teamlist.png)

This is our response panel. Here is where we provide responses to your CLI commands, or offer assistance.<br>
![quickstart-response.png](images/quick-start/quickstart-response.png)

This is our contacts display panel. Here is where results of your searches for contacts will be displayed.<br>
![quickstart-personlist.png](images/quick-start/quickstart-personlist.png)

[[Jump to Table of Contents]](#table-of-contents)

---

## Features

### Commands

<box type="info" seamless>

**Notes about the command format:**<br>

- Words in `UPPER_CASE` are the parameters to be supplied by the user.<br>
  e.g. in `add n/NAME`, `NAME` is a parameter which can be used as `add n/John Doe`.

- Items in square brackets are optional.<br>
  e.g. `n/NAME [t/TAG] [ts/TECH_STACK]` can be used as `n/John Doe t/friend ts/Java` or as `n/John Doe`.

- Items with `…`​ after them can be used multiple times including zero times.<br>
  e.g. `[t/TAG]…​` can be used as ` ` (i.e. 0 times), `t/friend`, `t/friend t/family` etc.

- Parameters can be in any order.<br>
  *Note: Excludes Rate Command.<br>
  e.g. if the command specifies `n/NAME p/PHONE_NUMBER`, `p/PHONE_NUMBER n/NAME` is also acceptable.

- Extraneous parameters for commands that do not take in parameters (such as `help`, `list`, `exit` and `clear`) will be ignored.<br>
  e.g. if the command specifies `help 123`, it will be interpreted as `help`.

- If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.
  </box>

#### Viewing help : `help`

Shows a message explaining how to access the help page.

Format: `help`

![help message](images/features/features-help.png)

#### Listing all contacts : `list`

Shows a list of all contacts in the address book.

Format: `list`

![list message](images/features/features-list.png)

#### Adding a contact: `add`

Adds a contact to the address book.

Format: `add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS g/GITHUB_USERNAME [t/TAG] pp/PROFILE_PICTURE [ts/TECH_STACK]…​`
* `g/GITHUB_USERNAME​` : GitHub Username of contact.
  * e.g. `g/jonhdoee`
* `pp/PROFILE_PICTURE​` : Profile picture of contact.
  * e.g. `pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg`
* `[ts/TECH_STACK]…​` : Technical Skills of contact.
  * e.g. `ts/JavaScript` `ts/Python`

<div class="alert alert-info" markdown="1">
ℹ️ There can be a maximum of 3 tags and tech stacks each, per contact.
</div>

<div class="alert alert-warning" markdown="1">
⚠️ Contacts will be considered the same if they share the same names or GitHub usernames. 
   Please ensure that you are not adding duplicate contacts.
</div>

Examples:
- `add n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01 g/johnDoee pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg`
- `add n/Betsy Crowe t/friend e/betsycrowe@example.com a/Newgate Prison p/1234567 g/betBetty t/criminal ts/Flutter pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg`

Before: 
![before add](images/features/features-add-before.png)
After:
![after add](images/features/features-add-after.png)

#### Editing a contact : `edit`

Edits an existing contact in the address book.

Format: `edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [g/GITHUB_USERNAME] [pp/PROFILE_PICTURE] [t/TAG]…​ [ts/TECH_STACK]…​`

<div class="alert alert-info" markdown="1">
ℹ️ Edits the contact at the specified `INDEX`. <br>
ℹ️ Existing values will be updated to the input values. <br>
ℹ️ When editing tags, the existing tags of the contact will be removed i.e. adding of tags is not cumulative. <br>
ℹ️ You can remove all the contact’s tags and tech stack by typing `t/` and `ts/` without
   specifying any tags after it.
</div>

<div class="alert alert-warning" markdown="1">
⚠️ At least one of the optional fields must be provided. <br>
</div>

*For the remaining optional parameters, please refer to the same section under the `add` command.*

Examples:
- `edit 1 p/91234567 e/johndoe@example.com` Edits the phone number and email address of the 1st contact to be `91234567` and `johndoe@example.com` respectively.
- `edit 2 n/Betsy Crower t/` Edits the name of the 2nd contact to be `Betsy Crower` and clears all existing tags.

Before:
![before edit](images/features/features-edit-before.png)
After:
![after edit](images/features/features-edit-after.png)

#### Locating contacts by name: `find`

Find contacts whose names contain any of the given keywords.

Format: `find KEYWORD [MORE_KEYWORDS]`

<div class="alert alert-info" markdown="1">
ℹ️ The search is case-insensitive. e.g. `hans` will match `Hans` <br>
ℹ️ The order of the keywords does not matter. e.g. `Hans Bo` will match `Bo Hans` <br>
ℹ️ Only the name is searched. <br>
ℹ️ Only full words will be matched e.g. `Han` will not match `Hans` <br>
ℹ️ Contacts matching at least one keyword will be returned (i.e. `OR` search).
  e.g. `Hans Bo` will return `Hans Gruber`, `Bo Yang`
</div>

Examples:
- `find John` returns `John Doe`
- `find alex david` returns `Alex Yeoh`, `David Li`

Before:
![before find](images/features/features-find-before.png)
After:
![after find](images/features/features-find-after.png)

#### Locating contacts by tags: `find-tags`

Find contacts whose tags contain all the given keywords.

Format: `find-tags KEYWORD [MORE_KEYWORDS]`

<div class="alert alert-info" markdown="1">
ℹ️ The search is case-insensitive. e.g. `school` will match `School` <br>
ℹ️ Only the tags are searched. <br>
ℹ️ Only full words will be matched e.g. `school` will not match `schools` <br>
ℹ️ Contacts matching all keywords will be returned (i.e. `AND` search).
</div>

Examples:
- `find-tags classmates` returns anyone with the tag `classmates`

Before:
![before find-tags](images/features/features-find-tags-before.png)
After:
![after find-tags](images/features/features-find-tags-after.png)

#### Locating contacts by tech stack: `find-ts`

Find contacts whose tech stack contain all the given keywords.

Format: `find-ts KEYWORD [MORE_KEYWORDS]`

<div class="alert alert-info" markdown="1">
ℹ️ The search is case-insensitive. e.g. `java` will match `Java` <br>
ℹ️ Only the tech stack are searched. <br>
ℹ️ Only full words will be matched e.g. `java` will not match `javascript` <br>
ℹ️ Contacts matching all keywords will be returned (i.e. `AND` search).
</div>

Examples:
- `find-ts Python` returns anyone with the tech stack `Python`

Before:
![before find-ts](images/features/features-find-ts-before.png)
After:
![after find-ts](images/features/features-find-ts-after.png)

#### Rate skills of contacts: `rate`

Rates specified skill of specified contact.

Format: `rate INDEX ts/KEYWORD r/RATING`

<div class="alert alert-info" markdown="1">
ℹ️ The rating is case-sensitive. e.g. `java` will not match `Java` <br>
ℹ️ Only supports the rating of 1 tech stack per command. <br>
ℹ️ Only the tech stack in specified contact are searched. <br>
ℹ️ Only full words will be matched e.g. `java` will not match `javascript`
</div>

Examples:
- `rate 1 ts/React r/8` rates the skill of React of the first contact as 8.

Before:
![before rate](images/features/features-rate-before.png)
After:
![after rate](images/features/features-rate-after.png)

#### Deleting a contact : `delete`

Deletes the specified contact from the address book.

Format: `delete INDEX`

<div class="alert alert-info" markdown="1">
ℹ️ Deletes the contact at the specified `INDEX`. <br>
ℹ️ The index refers to the index number shown in the displayed contact list.
</div>

Examples:
- `list` followed by `delete 2` deletes the 2nd contact in the address book.
- `find Betsy` followed by `delete 1` deletes the 1st contact in the results of the `find` command.

Before:
![before delete](images/features/features-delete-before.png)
After:
![after delete](images/features/features-delete-after.png)

#### Clearing all entries : `clear`

Clears all entries from the address book.

Format: `clear`

![clear message](images/features/features-clear.png)

#### Exiting the program : `exit`

Exits the program.

Format: `exit`

### Team related commands

All team related commands start with the prefix: `team`

#### Adding a team: `add`

You can use the `add` team command to create teams of contacts, which will help you to keep track of your teams when joining hackathons!

Format: `team add n/TEAM_NAME`

<div class="alert alert-info" markdown="1">
ℹ️ Each team in CodeConnect needs to have a unique name, so you can't add a team if another team with the same name is
   already present in the team list. <br>
ℹ️ Team names are case-sensitive, so it's fine to have two teams named `NUS HACK 2024` and `Nus Hack 2024`.
</div>

Examples:
- `team add n/NUS HACK 2024` adds a new team named `NUS HACK 2024` into the teams list.

Before:
![before team add](images/features/features-team-add-before.png)
After:
![after team add](images/features/features-team-add-after.png)

#### Adding a contact to a team: `add-contact`

Adds a contact to a specific team in your team list.
A user can only add a contact from the list they are currently viewing (after filtering).
Otherwise, they have to first enter the command `list` to view the contacts and then add a contact to the team.

Format: `team TEAM_INDEX add-contact CONTACT_INDEX`

<div class="alert alert-info" markdown="1">
ℹ️ Adds the contact at the specified `CONTACT_INDEX` to the team at the specified `TEAM_INDEX`. <br>
ℹ️ The `TEAM_INDEX` refers to the index number shown in the displayed teams list. <br>
ℹ️ The `CONTACT_INDEX` refers to the index number of the contact shown in the contact list the user sees.
</div>

Examples:
- `team 1 add-contact 1` adds the contact at index 1 of the contact list you are currently viewing to the first team in the team list.
- Enter `team 1` to view the updated members of the team.

Before:
![before team add-contact](images/features/features-team-add-contact-before.png)
After:
![after team add-contact](images/features/features-team-add-contact-after.png)


#### List members belonging to a team:

You can enter `team` followed by a team's index number to list the members that are in it.

Format: `team TEAM_INDEX`

<div class="alert alert-info" markdown="1">
ℹ️ Export the members' details of the team at the specified `TEAM_INDEX`. <br>
ℹ️ The index refers to the index number shown in the displayed teams list.
</div>

Examples:
- `team 1` updates the contact list to show the members of the first team.

Before:
![before team list](images/features/features-team-list-before.png)
After:
![after team list](images/features/features-team-list-after.png)

#### Deleting a contact from a team: `delete-contact`

Deletes a contact from a specific team in your team list.

Format: `team TEAM_INDEX delete-contact CONTACT_INDEX`

<div class="alert alert-info" markdown="1">
ℹ️ Deletes the contact at the specified `CONTACT_INDEX` from the team at the specified `TEAM_INDEX`.
ℹ️ The `TEAM_INDEX` refers to the index number shown in the displayed teams list.
ℹ️ The `CONTACT_INDEX` refers to the index number of the contact shown in the contact list the user sees.
</div>

Examples:
- `team 1 delete-contact 1` deletes the contact at index 1 from the first team in the team list.
- Enter `team 1` to view the updated members of the team.

Before:
![before team delete-contact](images/features/features-team-delete-contact-before.png)
After: (replace after bugfix)
![after team delete-contact](images/features/features-team-delete-contact-after.png)

#### Deleting a team: `delete`

You can use the `delete` team command to delete a team from your team list. After deleting a team, you will still be able to find its members in the contact list.

Format: `team TEAM_INDEX delete`

<div class="alert alert-info" markdown="1">
ℹ️ Deletes the team at the specified `TEAM_INDEX`. <br>
ℹ️ The index refers to the index number shown in the displayed teams list. <br>
</div>

Examples:
- `team 1 delete` deletes the first team in the team list.

Before:
![before team delete](images/features/features-team-delete-before.png)
After:
![after team delete](images/features/features-team-delete-after.png)

#### Exporting team details: `export`

Copies to your clipboard the details of all the members in a particular team, so that you have an easy time signing up for hackathons!

Format: `team TEAM_INDEX export`

<div class="alert alert-info" markdown="1">
ℹ️ Export the members' details of the team at the specified `TEAM_INDEX`.
</div>

Examples:
- `team 1 export` exports the members' details of the 1st team in the teams list.

Before:
![before team export](images/features/features-team-export-before.png)
After:
![after team export](images/features/features-team-export-after.png)

Details exported to clipboard:
```
Member 1
Name: Bernice Yu
Phone Number: 99272758
Email: berniceyu@example.com
Address: Blk 30 Lorong 3 Serangoon Gardens, #07-18
GitHub Username: Berney-Yu
```

### Non-CLI features

#### Sending an email to a specific contact

Opens the desktop mail application to directly email a specific contact.

**How to use:** Click on the contact's email.

![email](images/features/features-email.png)

#### View your previous commands

Any commands you have run previously are saved in the command history, so that you can easily refer to them if you need to.
Any edits you make to a command will be saved while navigating through your history, so you can go to another command
to refer to it, and then return back to your edited command to finish typing.

**How to use:** Use the up and down arrow keys to navigate through your history while the command input is in focus.

Before:
![before command history](images/features/features-command-history-before.png)
After clicking the up arrow key once:
![after command history](images/features/features-command-history-after.png)

#### Saving the data

CodeConnect data are saved in the hard disk automatically after any command that changes the data. There is no need to save manually.

#### Editing the data file

CodeConnect data are saved automatically as a JSON file `[JAR file location]/data/addressbook.json`. Advanced users are welcome to update data directly by editing that data file.

<box type="warning" seamless>

**Caution:**
If your changes to the data file makes its format invalid, CodeConnect will discard all data and start with an empty data file at the next run. Hence, it is recommended to take a backup of the file before editing it.<br>
Furthermore, certain edits can cause the CodeConnect to behave in unexpected ways (e.g., if a value entered is outside the acceptable range). Therefore, edit the data file only if you are confident that you can update it correctly.
</box>

[[Jump to Table of Contents]](#table-of-contents)

---

## FAQ

**Q**: How do I transfer my data to another Computer?<br>
**A**: Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous CodeConnect home folder.

[[Jump to Table of Contents]](#table-of-contents)

---

## Known Issues

1. **When using multiple screens**, if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the `preferences.json` file created by the application before running the application again.

[[Jump to Table of Contents]](#table-of-contents)

---

## Parameter Constraints

1. **NAME**: Must contain alphanumeric characters and may include spaces. All names must be unique.
2. **ADDRESS**: Can contain any value.
3. **PHONE NUMBER**: Must contain only numbers and should be at least 3 digits long.
4. **EMAIL ADDRESS**: Can contain any values. <br>
    <div class="alert alert-info" markdown="1">
   ℹ️ While the email address field accepts any values, it is important to adhere to the following: <br>
    * The local-part before the '@' symbol can only contain alphanumeric characters and the special characters +_.-. <br>
    * The local-part cannot start or end with any special characters. <br>
    * After the '@' symbol, there should be a domain name composed of domain labels separated by periods. <br>
    * The domain name must end with a label containing at least 2 characters. <br>
    * Each domain label should start and end with alphanumeric characters, and consist only of alphanumeric characters
      with hyphens allowed as separators, if necessary.
   </div>
5. **GITHUB USERNAME**: Can contain only alphanumeric characters and hyphens(-). All GitHub usernames must be unique. <br>
6. **PROFILE PICTURE**: Must be a valid URI to an image. Supports png, jpg, jpeg and gif formats. <br>
7. **TAGS**: Must contain alphanumeric characters only. They are limited to only 15 characters. <br>
8. **TECH STACK**: Can contain alphanumeric characters, underscores(_), hashtags(#), hyphens(-), periods(.) and plus signs(+).
   They are limited to only 15 characters. <br>
    <div class="alert alert-warning" markdown="1">
   ⚠️ If you are entering the tech stack for the `rate` command, please ensure it is the tech stack that the specified index has.
    </div>
9. **INDEX/CONTACT_INDEX**: Must be a positive integer which is not greater than the number of contacts the user is currenty seeing in the
   contact list. <br>
10. **RATING**: Must be an integer between 0 (inclusive) and 10 (inclusive). <br>
11. **TEAM NAME**: Can only contain alphanumeric characters and spaces. All team names must be unique. <br>
12. **TEAM INDEX**: Must be a positive integer which is not greater than the number of teams in the address book.

[[Jump to Table of Contents]](#table-of-contents)

---

## Command Summary

| Action                    | Format, Examples                                                                                                                                                                                                                                                                                                                      |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Add**                   | `add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS g/GITHUB_USERNAME pp/PROFILE_PICTURE [t/TAG] [ts/TECH_STACK]…​` <br> e.g., `add n/James Ho p/22224444 e/jamesho@example.com a/123, Clementi Rd, 1234665 g/Jamesho123  pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg t/friend t/colleague ts/Java ts/C++` |
| **Clear**                 | `clear`                                                                                                                                                                                                                                                                                                                               |
| **Delete**                | `delete INDEX`<br> e.g., `delete 3`                                                                                                                                                                                                                                                                                                   |
| **Edit**                  | `edit INDEX [n/NAME] [p/PHONE_NUMBER] [e/EMAIL] [a/ADDRESS] [g/GITHUB_USERNAME] [pp/PROFILE_PICTURE] [t/TAG]…​ [ts/TECH_STACK]…​ `<br> e.g.,`edit 2 n/James Lee e/jameslee@example.com`                                                                                                                                               |
| **Find**                  | `find KEYWORD [MORE_KEYWORDS]`<br> e.g., `find James Jake`                                                                                                                                                                                                                                                                            |
| **Find by Tags**          | `find-tags KEYWORD [MORE_KEYWORDS]`<br> e.g., `find-tags School Work`                                                                                                                                                                                                                                                                 |
| **Find by Tech Stack**    | `find-ts KEYWORD [MORE_KEYWORDS]`<br> e.g., `find-ts Java Python`                                                                                                                                                                                                                                                                     |
| **Rate**                  | `rate INDEX ts/TECH_STACK r/RATING`<br> e.g., `rate 3 ts/Java r/7`                                                                                                                                                                                                                                                                    |
| **Team - Add**            | `team add n/NAME`<br> e.g., `team add n/NUS HACK 2024`                                                                                                                                                                                                                                                                                |
| **Team - Delete**         | `team TEAM_INDEX delete`<br> e.g., `team 1 delete`                                                                                                                                                                                                                                                                                    |
| **Team - List**           | `team TEAM_INDEX`<br> e.g., `team 1`                                                                                                                                                                                                                                                                                                  |
| **Team - Add Contact**    | `team TEAM_INDEX add-contact CONTACT_INDEX`<br> e.g., `team 2 add-contact 3`                                                                                                                                                                                                                                                          |
| **Team - Delete Contact** | `team TEAM_INDEX delete-contact CONTACT_INDEX`<br> e.g., `team 1 delete-contact 4`                                                                                                                                                                                                                                                    |
| **Team - Export Details** | `team TEAM_INDEX export`<br> e.g., `team 1 export`                                                                                                                                                                                                                                                                                    |
| **List**                  | `list`                                                                                                                                                                                                                                                                                                                                |
| **Help**                  | `help`                                                                                                                                                                                                                                                                                                                                |
| **Exit**                  | `exit`                                                                                                                                                                                                                                                                                                                                |

[[Jump to Table of Contents]](#table-of-contents)
