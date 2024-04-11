
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("CodeConnect")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/index.html"}},[_v("Home")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("Hello fellow student developers! Welcome to your one-stop shop for managing developers' contacts!")]),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('hr'),_v(" "),_m(7),_v(" "),_c('p',[_v("Hey there, aspiring student innovators! 🚀 Welcome to CodeConnect, your passport to a vibrant world of collaboration and innovation! 🌟")]),_v(" "),_c('p',[_v("Imagine a place where you can manage the details of like-minded student developers as effortlessly as a tap on your screen. A world where forming dream teams for hackathons is not just a possibility, but a seamless reality.")]),_v(" "),_c('p',[_v("Well, look no further! CodeConnect is your developer-first networking application, designed by student developers for student developers. Whether you're a coding wizard in Python, a design maestro in UI/UX, or a tech enthusiast exploring new horizons, CodeConnect is your ultimate ally.")]),_v(" "),_c('p',[_v("So, get ready to explore, connect, and create with CodeConnect! 🎉 Let's turn those tech dreams into reality, one collaboration at a time! 💻✨")]),_v(" "),_m(8),_v(" "),_c('hr'),_v(" "),_m(9),_v(" "),_c('p',[_v("This guide is designed to help you learn how to use CodeConnect effectively and explore its various features. If you are unfamiliar with programming, don't worry - we have intentionally made it beginner-friendly so that even non-developers will be able to use our guide with ease.")]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_c('p',[_v("Throughout this guide, you'll notice colored blocks of information. These are used to highlight different types of information for easier understanding.")]),_v(" "),_c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️: The blue block highlights additional information that might be useful in clearing some confusion.\n")]),_v(" "),_c('div',{staticClass:"alert alert-warning",attrs:{"markdown":"1"}},[_v("\n⚠️: The yellow block draws attention to crucial information that requires careful consideration to mitigate potential risks or challenges.\n")]),_v(" "),_c('div',{staticClass:"alert alert-danger",attrs:{"markdown":"1"}},[_v("\n❗: The red block highlights information that requires immediate attention due to potential irreversible risks.\n")]),_v(" "),_c('p',[_v("Without further ado, let's dive in and uncover the power of CodeConnect! 🚀")]),_v(" "),_m(13),_v(" "),_c('hr'),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('hr'),_v(" "),_m(17),_v(" "),_c('p',[_v("Below you will find explanations for each key element in the CodeConnect GUI.")]),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_c('hr'),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Words in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UPPER_CASE")]),_v(" are the parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items in square brackets are optional."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/NAME [t/TAG] [ts/TECH_STACK]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/John Doe t/friend ts/Java")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/John Doe")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("…")]),_v("​ after them can be used multiple times including zero times."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[t/TAG]…​")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}}),_v(" (i.e. 0 times), "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/friend")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/friend t/family")]),_v(" etc.")])]),_v(" "),_c('li',[_c('p',[_v("Parameters can be in any order."),_c('br'),_v("\n*Note: Excludes Rate Command."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("n/NAME p/PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("p/PHONE_NUMBER n/NAME")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters (such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(") will be ignored."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.")])])])]),_v(" "),_m(28),_v(" "),_c('p',[_v("Shows a message explaining how to access the help page.")]),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('p',[_v("Shows a list of all contacts in the address book.")]),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_c('p',[_v("Adds a contact to the address book.")]),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ There can be a maximum of 3 tags and tech stacks each, per contact.\n")]),_v(" "),_c('div',{staticClass:"alert alert-warning",attrs:{"markdown":"1"}},[_v("\n⚠️ Contacts will be considered the same if they share the same names or GitHub usernames. \n   Please ensure that you are not adding duplicate contacts.\n")]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_c('p',[_v("Edits an existing contact in the address book.")]),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_c('p',[_v("Find contacts whose names contain any of the given keywords.")]),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_c('p',[_v("Find contacts whose tags contain all the given keywords.")]),_v(" "),_m(52),_v(" "),_m(53),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_c('p',[_v("Find contacts whose tech stack contain all the given keywords.")]),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_c('p',[_v("Rates specified skill of specified contact.")]),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(64),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_c('p',[_v("Deletes the specified contact from the address book.")]),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_c('p',[_v("Clears all entries from the address book.")]),_v(" "),_m(72),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_c('p',[_v("Exits the program.")]),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(94),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_c('p',[_v("Deletes a contact from a specific team in your team list.")]),_v(" "),_m(97),_v(" "),_m(98),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(99),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_m(102),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(105),_v(" "),_m(106),_v(" "),_m(107),_v(" "),_c('p',[_v("Copies to your clipboard the details of all the members in a particular team, so that you have an easy time signing up for hackathons!")]),_v(" "),_m(108),_v(" "),_m(109),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_c('p',[_v("Details exported to clipboard:")]),_v(" "),_m(112),_m(113),_v(" "),_m(114),_v(" "),_c('p',[_v("Opens the desktop mail application to directly email a specific contact.")]),_v(" "),_m(115),_v(" "),_m(116),_v(" "),_m(117),_v(" "),_c('p',[_v("Any commands you have run previously are saved in the command history, so that you can easily refer to them if you need to.\nAny edits you make to a command will be saved while navigating through your history, so you can go to another command\nto refer to it, and then return back to your edited command to finish typing.")]),_v(" "),_m(118),_v(" "),_m(119),_v(" "),_m(120),_v(" "),_c('p',[_v("CodeConnect data are saved in the hard disk automatically after any command that changes the data. There is no need to save manually.")]),_v(" "),_m(121),_v(" "),_m(122),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf your changes to the data file makes its format invalid, CodeConnect will discard all data and start with an empty data file at the next run. Hence, it is recommended to take a backup of the file before editing it."),_c('br'),_v("\nFurthermore, certain edits can cause the CodeConnect to behave in unexpected ways (e.g., if a value entered is outside the acceptable range). Therefore, edit the data file only if you are confident that you can update it correctly.")])]),_v(" "),_m(123),_v(" "),_c('hr'),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_m(126),_v(" "),_c('hr'),_v(" "),_m(127),_v(" "),_m(128),_v(" "),_m(129),_v(" "),_c('hr'),_v(" "),_m(130),_v(" "),_m(131),_v(" "),_m(132),_v(" "),_c('hr'),_v(" "),_m(133),_v(" "),_m(134),_m(135)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(136)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"codeconnect-user-guide"}},[_v("CodeConnect User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#codeconnect-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CodeConnect is a "),_c('strong',[_v("developer-first networking application")]),_v(" for student developers to keep track of and reach out easily to other student developers, so they can easily form teams for hackathons.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("We are "),_c('strong',[_v("optimised for use via a Command Line Interface")]),_v(" (CLI) while still having the benefits of a "),_c('strong',[_v("Graphical User Interface (GUI)")]),_v(". If you can type fast, CC can get your contact management tasks done faster than traditional GUI apps.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"what-can-codeconnect-do-for-you"}},[_v("What can CodeConnect do for you?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-can-codeconnect-do-for-you","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Add, Edit, Update, Delete")]),_v(" a student developer's contact details")]),_v(" "),_c('li',[_v("Record "),_c('strong',[_v("Tech Stack")]),_v(" and "),_c('strong',[_v("GitHub Usernames")]),_v(" for each developer")]),_v(" "),_c('li',[_c('strong',[_v("Find")]),_v(" developers by their name, tags, or tech stack")]),_v(" "),_c('li',[_c('strong',[_v("Email")]),_v(" developers directly from the app")]),_v(" "),_c('li',[_c('strong',[_v("Manage")]),_v(" your hackathon teams by adding your team members to CodeConnect")]),_v(" "),_c('li',[_c('strong',[_v("Export")]),_v(" your team details for easy signing up for hackathons")])])}
},function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"table-of-contents"}},[_v("Table of Contents"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#table-of-contents","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#introduction"}},[_v("Introduction")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#usage-of-user-guide"}},[_v("Usage of User Guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#installation-guide"}},[_v("Installation Guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#getting-started"}},[_v("Getting Started")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#tutorial"}},[_v("Tutorial (coming soon)")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#features"}},[_v("Features")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#faq"}},[_v("FAQ")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#general-questions"}},[_v("General Questions")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#task-related-questions"}},[_v("Contact-Related Questions")])])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#known-issues"}},[_v("Known Issues")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#command-summary"}},[_v("Command Summary")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"introduction"}},[_v("Introduction"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#introduction","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"usage-of-user-guide"}},[_v("Usage of User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-of-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you're already familiar with CodeConnect, you can skip ahead to the "),_c('a',{attrs:{"href":"#features"}},[_v("features section")]),_v(", or to the "),_c('a',{attrs:{"href":"#command-summary"}},[_v("command summary")]),_v(". "),_c('br'),_v("\nIf you're unsure of the constraints of each parameter for a command you want to enter, head over to the "),_c('a',{attrs:{"href":"#parameter-constraints"}},[_v("parameter constraints")]),_v(" to learn more! "),_c('br'),_v("\nBut if you're new to CodeConnect, simply follow along step-by-step to discover how to gather and form your next champion team!")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Should you encounter any problems along your journey, please take a look at our "),_c('a',{attrs:{"href":"#faq"}},[_v("FAQ")]),_v(" for more information.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"keynotes"}},[_v("Keynotes:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#keynotes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"installation-guide"}},[_v("Installation Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#installation-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed in your Computer.")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("codeconnect.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/releases"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your CodeConnect.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar codeconnect.jar")]),_v(" command to run the application."),_c('br')])]),_v(" "),_c('li',[_c('p',[_v("A GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. (e.g. typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" and pressing Enter will open the help window.)"),_c('br'),_v("\nSome example commands you can try:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" : Lists all contacts.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01 g/johnDoee ts/Java")]),_v(" : Adds a contact named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")]),_v(" to the Address Book.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")]),_v(" : Deletes the 3rd contact shown in the current list.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" : Deletes all contacts.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"getting-started"}},[_v("Getting Started"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_c('strong',[_v("Note:")])]),_v(" What you see in the GUI may differ slightly from the images below, as it depends on the data that is stored locally.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is the text input area. This is the most important part of the program. Here is where you will key in the commands you need."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/quick-start/quickstart-input.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/quick-start/quickstart-input.png","alt":"quickstart-input.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is the file button. Here is where you can exit the program."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/quick-start/quickstart-file.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/quick-start/quickstart-file.png","alt":"quickstart-file.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is the help button. Here is where you can find any kind of help with CodeConnect."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/quick-start/quickstart-help.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/quick-start/quickstart-help.png","alt":"quickstart-help.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is our teams display panel. All the teams added are displayed here."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/quick-start/quickstart-teamlist.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/quick-start/quickstart-teamlist.png","alt":"quickstart-teamlist.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is our response panel. Here is where we provide responses to your CLI commands, or offer assistance."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/quick-start/quickstart-response.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/quick-start/quickstart-response.png","alt":"quickstart-response.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is our contacts display panel. Here is where results of your searches for contacts will be displayed."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/quick-start/quickstart-personlist.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/quick-start/quickstart-personlist.png","alt":"quickstart-personlist.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"commands"}},[_v("Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"viewing-help-help"}},[_v("Viewing help : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/features/features-help.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-help.png","alt":"help message"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"listing-all-contacts-list"}},[_v("Listing all contacts : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-contacts-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/features/features-list.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-list.png","alt":"list message"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"adding-a-contact-add"}},[_v("Adding a contact: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-contact-add","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS g/GITHUB_USERNAME [t/TAG] pp/PROFILE_PICTURE [ts/TECH_STACK]…​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("g/GITHUB_USERNAME​")]),_v(" : GitHub Username of contact.\n"),_c('ul',[_c('li',[_v("e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("g/jonhdoee")])])])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pp/PROFILE_PICTURE​")]),_v(" : Profile picture of contact.\n"),_c('ul',[_c('li',[_v("e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg")])])])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[ts/TECH_STACK]…​")]),_v(" : Technical Skills of contact.\n"),_c('ul',[_c('li',[_v("e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/JavaScript")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/Python")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01 g/johnDoee pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/Betsy Crowe t/friend e/betsycrowe@example.com a/Newgate Prison p/1234567 g/betBetty t/criminal ts/Flutter pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-add-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-add-before.png","alt":"before add"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-add-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-add-after.png","alt":"after add"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"editing-a-contact-edit"}},[_v("Editing a contact : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-contact-edit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [g/GITHUB_USERNAME] [pp/PROFILE_PICTURE] [t/TAG]…​ [ts/TECH_STACK]…​")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Edits the contact at the specified `INDEX`. "),_c('br'),_v("\nℹ️ Existing values will be updated to the input values. "),_c('br'),_v("\nℹ️ When editing tags, the existing tags of the contact will be removed i.e. adding of tags is not cumulative. "),_c('br'),_v("\nℹ️ You can remove all the contact’s tags and tech stack by typing `t/` and `ts/` without\n   specifying any tags after it.\n")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-warning",attrs:{"markdown":"1"}},[_v("\n⚠️ At least one of the optional fields must be provided. "),_c('br')])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("For the remaining optional parameters, please refer to the same section under the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 p/91234567 e/johndoe@example.com")]),_v(" Edits the phone number and email address of the 1st contact to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("91234567")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("johndoe@example.com")]),_v(" respectively.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 n/Betsy Crower t/")]),_v(" Edits the name of the 2nd contact to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Betsy Crower")]),_v(" and clears all existing tags.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-edit-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-edit-before.png","alt":"before edit"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-edit-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-edit-after.png","alt":"after edit"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"locating-contacts-by-name-find"}},[_v("Locating contacts by name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#locating-contacts-by-name-find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ The search is case-insensitive. e.g. `hans` will match `Hans` "),_c('br'),_v("\nℹ️ The order of the keywords does not matter. e.g. `Hans Bo` will match `Bo Hans` "),_c('br'),_v("\nℹ️ Only the name is searched. "),_c('br'),_v("\nℹ️ Only full words will be matched e.g. `Han` will not match `Hans` "),_c('br'),_v("\nℹ️ Contacts matching at least one keyword will be returned (i.e. `OR` search).\n  e.g. `Hans Bo` will return `Hans Gruber`, `Bo Yang`\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find John")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find alex david")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alex Yeoh")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David Li")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-find-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-find-before.png","alt":"before find"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-find-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-find-after.png","alt":"after find"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"locating-contacts-by-tags-find-tags"}},[_v("Locating contacts by tags: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-tags")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#locating-contacts-by-tags-find-tags","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-tags KEYWORD [MORE_KEYWORDS]")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ The search is case-insensitive. e.g. `school` will match `School` "),_c('br'),_v("\nℹ️ Only the tags are searched. "),_c('br'),_v("\nℹ️ Only full words will be matched e.g. `school` will not match `schools` "),_c('br'),_v("\nℹ️ Contacts matching all keywords will be returned (i.e. `AND` search).\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-tags classmates")]),_v(" returns anyone with the tag "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("classmates")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-find-tags-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-find-tags-before.png","alt":"before find-tags"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-find-tags-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-find-tags-after.png","alt":"after find-tags"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"locating-contacts-by-tech-stack-find-ts"}},[_v("Locating contacts by tech stack: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-ts")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#locating-contacts-by-tech-stack-find-ts","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-ts KEYWORD [MORE_KEYWORDS]")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ The search is case-insensitive. e.g. `java` will match `Java` "),_c('br'),_v("\nℹ️ Only the tech stack are searched. "),_c('br'),_v("\nℹ️ Only full words will be matched e.g. `java` will not match `javascript` "),_c('br'),_v("\nℹ️ Contacts matching all keywords will be returned (i.e. `AND` search).\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-ts Python")]),_v(" returns anyone with the tech stack "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Python")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-find-ts-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-find-ts-before.png","alt":"before find-ts"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-find-ts-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-find-ts-after.png","alt":"after find-ts"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"rate-skills-of-contacts-rate"}},[_v("Rate skills of contacts: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rate-skills-of-contacts-rate","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate INDEX ts/KEYWORD r/RATING")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ The rating is case-sensitive. e.g. `java` will not match `Java` "),_c('br'),_v("\nℹ️ Only supports the rating of 1 tech stack per command. "),_c('br'),_v("\nℹ️ Only the tech stack in specified contact are searched. "),_c('br'),_v("\nℹ️ Only full words will be matched e.g. `java` will not match `javascript`\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate 1 ts/React r/8")]),_v(" rates the skill of React of the first contact as 8.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-rate-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-rate-before.png","alt":"before rate"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-rate-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-rate-after.png","alt":"after rate"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"deleting-a-contact-delete"}},[_v("Deleting a contact : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-contact-delete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete INDEX")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Deletes the contact at the specified `INDEX`. "),_c('br'),_v("\nℹ️ The index refers to the index number shown in the displayed contact list.\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 2")]),_v(" deletes the 2nd contact in the address book.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Betsy")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(" deletes the 1st contact in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-delete-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-delete-before.png","alt":"before delete"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-delete-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-delete-after.png","alt":"after delete"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"clearing-all-entries-clear"}},[_v("Clearing all entries : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-all-entries-clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/features/features-clear.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-clear.png","alt":"clear message"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"exiting-the-program-exit"}},[_v("Exiting the program : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exiting-the-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"team-related-commands"}},[_v("Team related commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#team-related-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("All team related commands start with the prefix: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"adding-a-team-add"}},[_v("Adding a team: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-team-add","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" team command to create teams of contacts, which will help you to keep track of your teams when joining hackathons!")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team add n/TEAM_NAME")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Each team in CodeConnect needs to have a unique name, so you can't add a team if another team with the same name is\n   already present in the team list. "),_c('br'),_v("\nℹ️ Team names are case-sensitive, so it's fine to have two teams named `NUS HACK 2024` and `Nus Hack 2024`.\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team add n/NUS HACK 2024")]),_v(" adds a new team named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NUS HACK 2024")]),_v(" into the teams list.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-add-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-add-before.png","alt":"before team add"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-add-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-add-after.png","alt":"after team add"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"adding-a-contact-to-a-team-add-contact"}},[_v("Adding a contact to a team: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add-contact")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-contact-to-a-team-add-contact","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Adds a contact to a specific team in your team list.\nA user can only add a contact from the list they are currently viewing (after filtering).\nOtherwise, they have to first enter the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" to view the contacts and then add a contact to the team.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX add-contact CONTACT_INDEX")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Adds the contact at the specified `CONTACT_INDEX` to the team at the specified `TEAM_INDEX`. "),_c('br'),_v("\nℹ️ The `TEAM_INDEX` refers to the index number shown in the displayed teams list. "),_c('br'),_v("\nℹ️ The `CONTACT_INDEX` refers to the index number of the contact shown in the contact list the user sees.\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1 add-contact 1")]),_v(" adds the contact at index 1 of the contact list you are currently viewing to the first team in the team list.")]),_v(" "),_c('li',[_v("Enter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1")]),_v(" to view the updated members of the team.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-add-contact-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-add-contact-before.png","alt":"before team add-contact"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-add-contact-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-add-contact-after.png","alt":"after team add-contact"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"list-members-belonging-to-a-team"}},[_v("List members belonging to a team:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#list-members-belonging-to-a-team","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can enter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team")]),_v(" followed by a team's index number to list the members that are in it.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Export the members' details of the team at the specified `TEAM_INDEX`. "),_c('br'),_v("\nℹ️ The index refers to the index number shown in the displayed teams list.\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1")]),_v(" updates the contact list to show the members of the first team.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-list-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-list-before.png","alt":"before team list"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-list-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-list-after.png","alt":"after team list"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"deleting-a-contact-from-a-team-delete-contact"}},[_v("Deleting a contact from a team: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete-contact")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-contact-from-a-team-delete-contact","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX delete-contact CONTACT_INDEX")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Deletes the contact at the specified `CONTACT_INDEX` from the team at the specified `TEAM_INDEX`.\nℹ️ The `TEAM_INDEX` refers to the index number shown in the displayed teams list.\nℹ️ The `CONTACT_INDEX` refers to the index number of the contact as seen when listing the members of the team \n(see "),_c('a',{attrs:{"href":"#list-members-belonging-to-a-team"}},[_v("List Team")]),_v(").\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1 delete-contact 1")]),_v(" deletes the contact at index 1 from the first team in the team list.")]),_v(" "),_c('li',[_v("Enter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1")]),_v(" to view the updated members of the team.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-delete-contact-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-delete-contact-before.png","alt":"before team delete-contact"}})]),_v("\nAfter: (replace after bugfix)\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-delete-contact-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-delete-contact-after.png","alt":"after team delete-contact"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"deleting-a-team-delete"}},[_v("Deleting a team: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-team-delete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" team command to delete a team from your team list. After deleting a team, you will still be able to find its members in the contact list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX delete")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Deletes the team at the specified `TEAM_INDEX`. "),_c('br'),_v("\nℹ️ The index refers to the index number shown in the displayed teams list. "),_c('br')])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1 delete")]),_v(" deletes the first team in the team list.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-delete-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-delete-before.png","alt":"before team delete"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-delete-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-delete-after.png","alt":"after team delete"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"exporting-team-details-export"}},[_v("Exporting team details: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("export")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exporting-team-details-export","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX export")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ Export the members' details of the team at the specified `TEAM_INDEX`. "),_c('br'),_v("\nℹ️ Only the name, phone number, email, address, and GitHub username of the contact will be exported.\n")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1 export")]),_v(" exports the members' details of the 1st team in the teams list.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-export-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-export-before.png","alt":"before team export"}})]),_v("\nAfter:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-team-export-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-team-export-after.png","alt":"after team export"}})])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Member 1\n")]),_c('span',[_v("Name: Bernice Yu\n")]),_c('span',[_v("Phone Number: 99272758\n")]),_c('span',[_v("Email: berniceyu@example.com\n")]),_c('span',[_v("Address: Blk 30 Lorong 3 Serangoon Gardens, #07-18\n")]),_c('span',[_v("GitHub Username: Berney-Yu\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-cli-features"}},[_v("Non-CLI features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-cli-features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"sending-an-email-to-a-specific-contact"}},[_v("Sending an email to a specific contact"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sending-an-email-to-a-specific-contact","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How to use:")]),_v(" Click on the contact's email.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/features/features-email.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-email.png","alt":"email"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"view-your-previous-commands"}},[_v("View your previous commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-your-previous-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How to use:")]),_v(" Use the up and down arrow keys to navigate through your history while the command input is in focus.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Before:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-command-history-before.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-command-history-before.png","alt":"before command history"}})]),_v("\nAfter clicking the up arrow key once:\n"),_c('a',{attrs:{"href":"/tp/images/features/features-command-history-after.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/features/features-command-history-after.png","alt":"after command history"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"saving-the-data"}},[_v("Saving the data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-the-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"editing-the-data-file"}},[_v("Editing the data file"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-the-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CodeConnect data are saved automatically as a JSON file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/addressbook.json")]),_v(". Advanced users are welcome to update data directly by editing that data file.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous CodeConnect home folder.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known Issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"parameter-constraints"}},[_v("Parameter Constraints"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#parameter-constraints","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("NAME")]),_v(": Must contain alphanumeric characters and may include spaces. All names must be unique.")]),_v(" "),_c('li',[_c('strong',[_v("ADDRESS")]),_v(": Can contain any value.")]),_v(" "),_c('li',[_c('strong',[_v("PHONE NUMBER")]),_v(": Must contain only numbers and should be at least 3 digits long.")]),_v(" "),_c('li',[_c('strong',[_v("EMAIL ADDRESS")]),_v(": Can contain any values. "),_c('br'),_v(" "),_c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ While the email address field accepts any values, it is important to adhere to the following: "),_c('br'),_v("\n * The local-part before the '@' symbol can only contain alphanumeric characters and the special characters +_.-. "),_c('br'),_v("\n * The local-part cannot start or end with any special characters. "),_c('br'),_v("\n * After the '@' symbol, there should be a domain name composed of domain labels separated by periods. "),_c('br'),_v("\n * The domain name must end with a label containing at least 2 characters. "),_c('br'),_v("\n * Each domain label should start and end with alphanumeric characters, and consist only of alphanumeric characters\n   with hyphens allowed as separators, if necessary.\n")])]),_v(" "),_c('li',[_c('strong',[_v("GITHUB USERNAME")]),_v(": Can contain only alphanumeric characters and hyphens(-). All GitHub usernames must be unique. "),_c('br')]),_v(" "),_c('li',[_c('strong',[_v("PROFILE PICTURE")]),_v(": Must be a valid URI to an image. Supports png, jpg, jpeg and gif formats. "),_c('br')]),_v(" "),_c('li',[_c('strong',[_v("TAGS")]),_v(": Must contain alphanumeric characters only. They are limited to only 15 characters. "),_c('br')]),_v(" "),_c('li',[_c('strong',[_v("TECH STACK")]),_v(": Can contain alphanumeric characters, underscores(_), hashtags(#), hyphens(-), periods(.) and plus signs(+).\nThey are limited to only 15 characters. "),_c('br'),_v(" "),_c('div',{staticClass:"alert alert-warning",attrs:{"markdown":"1"}},[_v("\n⚠️ If you are entering the tech stack for the `rate` command, please ensure it is the tech stack that the specified index has.\n ")])]),_v(" "),_c('li',[_c('strong',[_v("INDEX/CONTACT_INDEX")]),_v(": Must be a positive integer which is not greater than the number of contacts the user is currenty seeing in the\ncontact list. "),_c('br')]),_v(" "),_c('li',[_c('strong',[_v("RATING")]),_v(": Must be an integer between 0 (inclusive) and 10 (inclusive). "),_c('br')]),_v(" "),_c('li',[_c('strong',[_v("TEAM NAME")]),_v(": Can only contain alphanumeric characters and spaces. All team names must be unique. "),_c('br')]),_v(" "),_c('li',[_c('strong',[_v("TEAM INDEX")]),_v(": Must be a positive integer which is not greater than the number of teams in the address book.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command Summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format, Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Add")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS g/GITHUB_USERNAME pp/PROFILE_PICTURE [t/TAG] [ts/TECH_STACK]…​")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/James Ho p/22224444 e/jamesho@example.com a/123, Clementi Rd, 1234665 g/Jamesho123  pp/https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg t/friend t/colleague ts/Java ts/C++")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX [n/NAME] [p/PHONE_NUMBER] [e/EMAIL] [a/ADDRESS] [g/GITHUB_USERNAME] [pp/PROFILE_PICTURE] [t/TAG]…​ [ts/TECH_STACK]…​ ")]),_c('br'),_v(" e.g.,"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 n/James Lee e/jameslee@example.com")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find James Jake")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find by Tags")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-tags KEYWORD [MORE_KEYWORDS]")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-tags School Work")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find by Tech Stack")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-ts KEYWORD [MORE_KEYWORDS]")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find-ts Java Python")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Rate")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate INDEX ts/TECH_STACK r/RATING")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate 3 ts/Java r/7")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Team - Add")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team add n/NAME")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team add n/NUS HACK 2024")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Team - Delete")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX delete")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1 delete")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Team - List")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Team - Add Contact")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX add-contact CONTACT_INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 2 add-contact 3")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Team - Delete Contact")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX delete-contact CONTACT_INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1 delete-contact 4")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Team - Export Details")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team TEAM_INDEX export")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team 1 export")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#table-of-contents"}},[_v("[Jump to Table of Contents]")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")]),_v(", generated on Thu, 11 Apr 2024, 23:29:46 GMT+8]")])])])}
}];
  