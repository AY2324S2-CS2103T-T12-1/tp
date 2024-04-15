
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("CodeConnect")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"target":"_blank","href":"https://github.com/AY2324S2-CS2103T-T12-1/tp"}},[_c('img',{staticClass:"icon",attrs:{"src":"/images/github-icon.png","alt":"View on GitHub"}})])])])],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("Welcome to the CodeConnect Developer Guide!")]),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('p',[_v("Code Reused:")]),_v(" "),_m(3),_v(" "),_c('hr'),_v(" "),_m(4),_v(" "),_c('p',[_v("Before you begin your development journey in TaskWise, make sure that you meet the minimum requirements needed to run CodeConnect on your development device!")]),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('div',{staticClass:"alert alert-warning",attrs:{"markdown":"1"}},[_v("\n⚠️ This step is crucial to ensure that you set up the environment correctly before you start developing for CodeConnect!\n")]),_v(" "),_m(7),_v(" "),_c('p',[_v("Now that you have installed Java 11 and JavaFX, you are all ready to get started on introducing new features or fix bugs in CodeConnect!")]),_v(" "),_m(8),_v(" "),_c('hr'),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureDiagram.png","width":"280"}}),_v(" "),_m(11),_v(" "),_c('p',[_v("Given below is a quick overview of main components and how they interact with each other.")]),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("The bulk of the app's work is done by the following four components:")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureSequenceDiagram.png","width":"574"}}),_v(" "),_c('p',[_v("Each of the four main components (also shown in the diagram above),")]),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ComponentManagers.png","width":"300"}}),_c('br'),_v("\n  "),_c('br'),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UiClassDiagram.png","alt":"Structure of the UI Component"}}),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/LogicClassDiagram.png","width":"550"}}),_v(" "),_m(31),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram.png","alt":"Interactions Inside the Logic Component for the `delete 1` Command"}}),_v(" "),_c('br'),_v("\n  "),_c('br'),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ParserClasses.png","width":"600"}}),_v(" "),_c('p',[_v("How the parsing works:")]),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ModelClassDiagram.png","width":"100%"}}),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ An alternative (arguably, a more OOP) model is given below: "),_c('br'),_v(" "),_m(41),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/BetterModelClassDiagram.png","width":"100%"}})],1),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/StorageClassDiagram.png","width":"550"}}),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_c('hr'),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_c('p',[_v("The Contact class is a fundamental component of the contact management system within the application.\nIt represents an individual contact entry, encapsulating various details such as name, contact information, address, GitHub username, associated tech stack, tags, and a profile picture.")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ContactClassDiagram.png","width":"100%"}}),_v(" "),_c('p',[_v("Take note that while contacts may not always have all valid details, such as a missing profile picture, these\nnull cases should be handled separately within each Attribute's class (in this context, the ProfilePicture class). A contact's attribute should never\nbe left null. This ensures that such invalid cases are always handled in that separate class, keeping the Contact class lean.")]),_v(" "),_m(49),_v(" "),_c('p',[_v("The Team class is another fundamental component of the contact management system. Teams are created to keep track of\ngroups of contacts, and hold aggregate data about these contacts. These teams are used by the user to keep track of\nhackathon teams. Multiple teams are kept track by ModelManager.")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/TeamClassDiagram.png","width":"100%"}}),_v(" "),_c('br'),_v("\n  "),_c('br'),_v(" "),_m(50),_v(" "),_c('p',[_v("Every time a new contact is added to a team, team aggregate statistics is recalculated and TeamStats is replaced.")]),_v(" "),_m(51),_v(" "),_c('p',[_v("ModelManager keeps track of all Contacts and Teams. Only existing contacts can be added to a Team. They are added\nto a team by passing the reference of an existing contact.")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/TeamContactModelDiagram.png","width":"100%"}}),_v(" "),_c('hr'),_v(" "),_m(52),_v(" "),_c('p',[_v("This section describes some noteworthy details on how certain features are implemented.")]),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_c('p',[_v("The following sequence diagram models the interactions between the different components of CodeConnect for the execution of the Find Command.")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/FindSequenceDiagram.png","width":"100%"}}),_c('br'),_v("\n  "),_c('br'),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/AddTeamSequenceDiagram.png","width":"100%"}}),_c('br'),_v("\n  "),_c('br'),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ExportTeamSequenceDiagram.png","width":"100%"}}),_c('br'),_v("\n  "),_c('br'),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_m(72),_v(" "),_c('p',[_v("This feature saves previously entered commands so that the user can easily view them again.")]),_v(" "),_c('p',[_v("The following sequence diagram shows what happens as the user requests to view the command history, and what happens after\nthe command is executed:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/CommandHistorySequenceDiagram.png","alt":"Sequence Diagram for Command History"}}),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_c('p',[_v("The following sequence diagram shows what happens as the user double-clicks on the email address:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/SendEmailSequenceDiagram.png","alt":"Sequence Diagram for sending an email"}}),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_c('hr'),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_c('hr'),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_m(90),_m(91),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_m(94),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_m(97),_v(" "),_m(98),_v(" "),_m(99),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_m(102),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_m(105),_v(" "),_m(106),_v(" "),_m(107),_v(" "),_m(108),_v(" "),_m(109),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_m(112),_v(" "),_m(113),_v(" "),_m(114),_v(" "),_m(115),_v(" "),_m(116),_v(" "),_m(117),_v(" "),_m(118),_v(" "),_m(119),_v(" "),_m(120),_v(" "),_m(121),_v(" "),_m(122),_v(" "),_m(123),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_m(126),_v(" "),_m(127),_v(" "),_m(128),_v(" "),_m(129),_v(" "),_m(130),_v(" "),_m(131),_v(" "),_m(132),_v(" "),_m(133),_v(" "),_m(134),_v(" "),_m(135),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_m(138),_v(" "),_m(139),_v(" "),_m(140),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_m(143),_v(" "),_m(144),_v(" "),_m(145),_v(" "),_m(146),_v(" "),_m(147),_v(" "),_m(148),_v(" "),_m(149),_v(" "),_m(150),_v(" "),_m(151),_v(" "),_m(152),_v(" "),_m(153),_v(" "),_m(154),_v(" "),_m(155),_v(" "),_m(156),_v(" "),_m(157),_v(" "),_m(158),_v(" "),_m(159),_v(" "),_m(160),_v(" "),_m(161),_v(" "),_m(162),_v(" "),_m(163),_v(" "),_m(164),_v(" "),_m(165),_v(" "),_m(166),_v(" "),_m(167),_v(" "),_m(168),_v(" "),_m(169),_v(" "),_m(170),_v(" "),_m(171),_v(" "),_m(172),_v(" "),_m(173),_v(" "),_m(174),_v(" "),_c('ul',[_m(175),_v(" "),_m(176),_v(" "),_m(177),_v(" "),_m(178),_v(" "),_m(179),_v(" "),_m(180),_v(" "),_m(181),_v(" "),_m(182),_v(" "),_m(183),_v(" "),_m(184),_v(" "),_c('li',[_c('strong',[_v("Details of contact")]),_v(":\n"),_c('ul',[_c('li',[_v("Name: The name of the contact (String).")]),_v(" "),_c('li',[_v("GitHub username: The username associated with the contact's GitHub account (String).")]),_v(" "),_c('li',[_v("Tags: Descriptive keywords or labels associated with the contact (List"),_c('string',[_v(").")])],1),_v(" "),_c('li',[_v("Phone number: The phone number of the contact (String).")]),_v(" "),_c('li',[_v("Address: The physical or mailing address of the contact (String).")]),_v(" "),_c('li',[_v("Email: The email address of the contact (String).")]),_v(" "),_c('li',[_v("Profile Picture: The image associated with the contact (Image).")]),_v(" "),_c('li',[_v("Tech stack: The technologies or programming languages known or used by the contact (List"),_c('string',[_v(").")])],1),_v(" "),_c('li',[_v("Rating: The rating given to the contact's specific tech stack (Integer).")])])])]),_v(" "),_c('hr'),_v(" "),_m(185),_v(" "),_c('p',[_v("Team size: 5")]),_v(" "),_m(186),_v(" "),_m(187),_v(" "),_c('p',[_v("A known workaround is to run the command to list the members of the team again, which will show the updated members of the team.")]),_v(" "),_m(188),_v(" "),_m(189),_v(" "),_m(190),_v(" "),_m(191),_v(" "),_m(192),_v(" "),_m(193),_v(" "),_c('p',[_v("Currently, CodeConnect does not allow for contacts to share the same names. However, different people can have the same\nnames. Since GitHub usernames already need to be unique, we can use them to prevent duplicate contacts from being added into\nCodeConnect, instead of requiring both names and GitHub usernames to unique.")]),_v(" "),_m(194),_v(" "),_m(195),_v(" "),_m(196),_v(" "),_m(197),_v(" "),_m(198),_v(" "),_m(199),_v(" "),_m(200),_v(" "),_m(201),_v(" "),_m(202),_v(" "),_m(203),_v(" "),_m(204),_v(" "),_m(205),_v(" "),_c('p',[_v("The current implementation allows a user to add/edit phone numbers with lengths greater than 15 digits. Additionally,\nthere's ambiguity regarding the format of phone numbers, especially for Singaporean and International contexts.")]),_v(" "),_c('p',[_v("Since CodeConnect is an application that can be used by anyone around the world, we will ensure that the number of digits\na phone number can contain is between 3 and 15. This gives the user the flexibility to add contacts from anywhere across\nthe world, which presents especially useful when he/she would like to invite the recipient to join an online hackathon.")]),_v(" "),_m(206),_v(" "),_m(207),_v(" "),_m(208),_v(" "),_m(209),_v(" "),_c('p',[_v("Our current implementation supports users to add and edit contacts with email addresses and phone numbers that already\nexist in the contact list. However, we understand that this is not applicable in the real life scenario, as every email\naddress and phone number has to be unique.")]),_v(" "),_m(210),_v(" "),_c('hr'),_v(" "),_m(211),_v(" "),_c('p',[_v("Given below are instructions to test the app manually.")]),_v(" "),_m(212),_v(" "),_m(213),_v(" "),_m(214),_v(" "),_m(215),_v(" "),_m(216),_v(" "),_m(217),_v(" "),_m(218),_v(" "),_c('hr'),_v(" "),_m(219),_v(" "),_m(220),_v(" "),_c('p',[_v("Throughout the development of our project, we encountered several significant challenges that tested our problem-solving skills and collaboration abilities.")]),_v(" "),_c('p',[_v("One of the foremost hurdles we faced was gaining a comprehensive understanding of the underlying implementation of AddressBook Level 3. As we inherited the codebase from a previous developer, we needed considerable time to unravel the complexities within AddressBook. We meticulously dissected each component, deciphering its role in the application, and strategised on how to extend, modify, or replace existing features to tailor it for our CodeConnect application.")]),_v(" "),_c('p',[_v("Another major challenge arose during the refactoring process of the pre-existing codebase. The codebase exhibited multiple layers of nesting, making it extremely difficult to refactor classes and methods. This extended into the test cases as well - making changes to one class meant that many of the original tests would have to be refactored to accommodate to modifications. Despite leveraging IntelliJ IDE’s intelligent refactoring features, we encountered difficulties in properly detecting and renaming some classes and methods. This led to instances of broken code, necessitating extensive debugging and testing efforts to rectify.")]),_v(" "),_c('p',[_v("Additionally, we encountered learning curves as we navigated working together as a cohesive team utilising a Version Control System (GitHub). Merge conflicts were a recurring obstacle, resulting in inadvertent overwrites of previously implemented code. The culmination of these challenges peaked during the integration phase for V1.3, where merging our individually assigned features into the team repository's master branch demanded meticulous coordination and communication.")]),_v(" "),_c('p',[_v("Despite these formidable challenges, our team persevered with determination and resourcefulness. Each hurdle became an opportunity for growth, reinforcing our collaboration skills, technical acumen, and adaptability in the face of complexity. Through tenacity and a shared commitment to excellence, we successfully navigated these challenges, emerging stronger and more capable as a unified team.")]),_v(" "),_m(221),_v(" "),_c('p',[_v("Developing CodeConnect demanded a significant allocation of effort from each team member. In addition to our regular weekly meetings, every developer was tasked with traversing through the meticulous stages of analysis, design, development, testing, and documentation for every new feature integrated into the application.")]),_v(" "),_c('p',[_v("Given that we inherited a brownfield project, a considerable amount of time and resources were dedicated to understanding the intricate architecture of AB3. Ensuring compatibility and stability remained at the forefront of our efforts, prompting numerous brainstorming sessions and thorough evaluations of how each new feature would seamlessly integrate.")]),_v(" "),_c('p',[_v("Furthermore, as not all team members were well-versed in utilising a Version Control System (VCS) within a collaborative setting, considerable effort was expended. Guided by the more experienced members of our team, these individuals diligently worked towards acquiring the necessary proficiency with the VCS. This learning curve should be acknowledged, as mastering a VCS is a substantial step for future software professionals and bears significant importance.")]),_v(" "),_m(222),_v(" "),_m(223),_v(" "),_m(224),_v(" "),_c('p',[_v("Approximately 10% of our project's effort was conserved through the judicious reuse of existing components and libraries, particularly in the realm of commands and parsers. Leveraging the established practices of previous developers when modifying the application provided us with a valuable foundation, expediting the implementation of new functionalities.")])],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#codeconnect-developer-guide"}},[_v("CodeConnect Developer Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#acknowledgements"}},[_v("Acknowledgements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#getting-started"}},[_v("Getting Started‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#minimum-requirements"}},[_v("Minimum Requirements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#what-s-next"}},[_v("What’s Next?‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design"}},[_v("Design‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#architecture"}},[_v("Architecture‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-component"}},[_v("UI component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#logic-component"}},[_v("Logic component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#model-component"}},[_v("Model component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#storage-component"}},[_v("Storage component‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#common-classes"}},[_v("Common classes‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#contact-class"}},[_v("Contact Class‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#team-class"}},[_v("Team Class‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#how-the-contact-team-and-modelmanager-are-related"}},[_v("How the Contact, Team and ModelManager are related‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#implementation"}},[_v("Implementation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#general-commands"}},[_v("General Commands‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#team-commands"}},[_v("Team Commands‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-history"}},[_v("Command History‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#send-direct-email"}},[_v("Send Direct Email‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-requirements"}},[_v("Appendix: Requirements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#product-scope"}},[_v("Product scope‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#user-stories"}},[_v("User stories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-cases"}},[_v("Use cases‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#non-functional-requirements"}},[_v("Non-Functional Requirements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-planned-enhancements"}},[_v("Appendix: Planned Enhancements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#1-automatically-update-team-in-contacts-list-when-delete-contact-is-run"}},[_v("1. Automatically update team in contacts list when delete-contact is run‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#2-support-special-characters-in-names-for-contacts-and-teams"}},[_v("2. Support special characters in names for contacts and teams‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#3-allow-different-contacts-to-have-the-same-name"}},[_v("3. Allow different contacts to have the same name‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#4-detect-when-tags-with-same-name-but-in-different-case-are-entered"}},[_v("4. Detect when tags with same name but in different case are entered‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#5-detect-when-tech-stacks-with-same-name-but-in-different-case-are-entered"}},[_v("5. Detect when tech stacks with same name but in different case are entered‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#6-more-specific-error-messages-when-parsing-index"}},[_v("6. More specific error messages when parsing INDEX‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#7-phone-number-validation"}},[_v("7. Phone number validation‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#8-inconsistent-rate-command-errors"}},[_v("8. Inconsistent rate command errors‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#9-prevent-adding-and-editing-contacts-with-duplicate-email-addresses-and-phone-numbers"}},[_v("9. Prevent adding and editing contacts with duplicate email addresses and phone numbers‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#launch-and-shutdown"}},[_v("Launch and shutdown‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-a-contact"}},[_v("Deleting a contact‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#saving-data"}},[_v("Saving data‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-effort"}},[_v("Appendix: Effort‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#difficulty-level-and-challenges-faced"}},[_v("Difficulty Level and Challenges Faced‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#effort-required"}},[_v("Effort Required‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#achievements-of-project"}},[_v("Achievements of Project‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#effort-saved-through-reuse"}},[_v("Effort Saved Through Reuse‎")])])])])],1)]),_v(" "),_c('scroll-top-button')],1),_v(" "),_m(225)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"codeconnect-developer-guide"}},[_v("CodeConnect Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#codeconnect-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Thank you to the developers of the original "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3"}},[_v("addressbook-level3")]),_v(" for creating the brownfield project that served as the basis for CodeConnect!")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://chat.openai.com/"}},[_v("ChatGPT")]),_v(" "),_c('ul',[_c('li',[_v("Generating Regex strings used for parsing and validating user inputs")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://regex101.com/"}},[_v("Regex101")]),_v(" "),_c('ul',[_c('li',[_v("Building and Testing Regex strings generated by ChatGPT")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://site.mockito.org/"}},[_v("Mokito")]),_v(" "),_c('ul',[_c('li',[_v("Used to mock the MailApp for testing purposes.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"getting-started"}},[_c('strong',[_v("Getting Started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"minimum-requirements"}},[_v("Minimum Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#minimum-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("CodeConnect uses Java 11 with JavaFX. If you are not sure how to install Java 11 and JavaFX, refer to this "),_c('a',{attrs:{"href":"/tp/UserGuide.html#installation-guide"}},[_v("section")]),_v(" in our User Guide to install and start CodeConnect.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"what-s-next"}},[_v("What’s Next?"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#what-s-next","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Want to start introducing new ideas to CodeConnect or contemplating on how to integrate your new features? Refer to the Design section for more information on how CodeConnect was built!")])]),_v(" "),_c('li',[_c('p',[_v("Want to know more about our existing features? Refer to the "),_c('a',{attrs:{"href":"#implementation"}},[_v("Implementation")]),_v(" section to kickstart your understanding of how CodeConnect works!")])]),_v(" "),_c('li',[_c('p',[_v("Want to integrate our best practices into your own project? Refer to the "),_c('a',{attrs:{"href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, Logging, Testing, Configuration and DevOps")]),_v(" section for more information on how we documented, tested and developed CodeConnect!")])]),_v(" "),_c('li',[_c('p',[_v("Want to understand our motivation behind developing CodeConnect? Refer to the "),_c('a',{attrs:{"href":"#appendix-requirements"}},[_v("Appendix: Requirements")]),_v(" section for a clearer picture on how we tailored and scoped CodeConnect for our target audience!")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_c('em',[_v("Architecture Diagram")])]),_v(" given above explains the high-level design of the App.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"main-components-of-the-architecture"}},[_v("Main components of the architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#main-components-of-the-architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of\nclasses "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v("\nand "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is\nin charge of the "),_c('strong',[_v("app launch")]),_v(" and "),_c('strong',[_v("shut down")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(": The UI of the App.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(": The command executor.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(": Holds the data of the App in memory.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": Reads data from, and writes data to, the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"how-the-components-interact-with-each-other"}},[_v("How the components interact with each other"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-the-components-interact-with-each-other","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_v("Sequence Diagram")]),_v(" below shows how the components interact with each other for the scenario where the user issues\nthe command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding\nAPI "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using\nthe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class which follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface. Other components interact with a given component\nthrough its interface rather than the concrete class (reason: to prevent outside component's being coupled to the\nimplementation of a component), as illustrated in the (partial) class diagram below.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("The sections below give more details of each component.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified\nin "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The UI consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts\ne.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ContactListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(",\ninherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the\nvisible GUI.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these UI parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that\nare in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of\nthe "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v("\nis specified\nin "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the UI can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Contact")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified\nin "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\"delete 1\")")]),_v(" API\ncall as an example.")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ The lifeline for "),_c('code',{pre:true},[_v("DeleteCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of\nPlantUML, the lifeline continues till the end of diagram.\n")])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CodeConnectParser")]),_v(" object which in turn creates\na parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which\nis executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to delete a contact)."),_c('br'),_v("\nNote that although this is shown as a single step in the diagram above (for simplicity), in the code it can take\nseveral interactions (between the command object and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(") to achieve.")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CodeConnectParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a\nplaceholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse\nthe user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CodeConnectParser")]),_v(" returns back as\na "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v("\ninterface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified\nin "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Contact")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniqueContactList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Contact")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which\nis exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Contact>")]),_v(" that can be 'observed' e.g. the UI can be bound to\nthis list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as\na "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they\nshould make sense on their own without depending on other components)")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("It has a "),_c('code',{pre:true},[_v("Tag")]),_v(" list in the "),_c('code',{pre:true},[_v("CodeConnect")]),_v(",\nwhich "),_c('code',{pre:true},[_v("Contact")]),_v(" references. This allows "),_c('code',{pre:true},[_v("CodeConnect")]),_v(" to only require one "),_c('code',{pre:true},[_v("Tag")]),_v(" object per unique tag, instead of\neach "),_c('code',{pre:true},[_v("Contact")]),_v(" needing their own "),_c('code',{pre:true},[_v("Tag")]),_v(" objects."),_c('br')])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified\nin "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data and user preference data in JSON format, and read them back into corresponding\nobjects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CodeConnectStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(", which means it can be treated as either one (if only\nthe functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects\nthat belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Classes used by multiple components are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"contact-class"}},[_v("Contact Class"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#contact-class","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"team-class"}},[_v("Team Class"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#team-class","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ With the use of "),_c('code',{pre:true},[_v("UniqueTeamList")]),_v(", each contact in a team is guaranteed to be unique. However, each contact\nmay belong in more than one team.\n")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"how-the-contact-team-and-modelmanager-are-related"}},[_v("How the Contact, Team and ModelManager are related"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-the-contact-team-and-modelmanager-are-related","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ "),_c('b',[_v("Note from Developers: ")]),_c('br'),_v(" "),_c('ul',[_c('li',[_v("With many commands having similar underlying implementations, our team has deliberately chosen to reduce the length of this section by focusing on unique implementations of features.")]),_v(" "),_c('li',[_v("This aligns with the purpose of minimising the overhead from writing and maintaining developer documentation.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"general-commands"}},[_v("General Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ "),_c('b',[_v("Commands Included:")]),_v(" "),_c('br'),_v(" \nList, Add, Edit, Find, Find by Tags, Find by Tech Stack, Rate, Delete, Clear, Exit, Help\n")])}
},function anonymous(
) {
with(this){return _c('p',[_v("General commands follow the same flow, with only differences deep within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of each command.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("In this section, we will focus on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommand")]),_v(" as an example.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Details:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("The user inputs the command to find contacts containing the word \"John\".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommandParser")]),_v(" parses the user input.")]),_v(" "),_c('li',[_v("An "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommand")]),_v(" object is created.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommandParser")]),_v(" returns the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommand")]),_v(" object.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(" invokes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FindCommand")]),_v(", which finds the contacts containing the word \"John\" and returns these contacts.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"team-commands"}},[_v("Team Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#team-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Team commands follow either one of the two sequences stated below, depending on the command type. Within each flow, the only differences lie in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of each command.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"sequence-1-team-add-team-add-contact-team-delete-contact"}},[_v("Sequence 1: Team - Add, Team - Add Contact, Team - Delete Contact"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sequence-1-team-add-team-add-contact-team-delete-contact","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("In this section, we will focus on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddTeamCommand")]),_v(" as an example.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram models the interactions between the different components of CodeConnect for the execution of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddTeamCommand")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Details:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("The user inputs the command to add a team called \"NUS HACKERS\".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TeamCommandParser")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddTeamCommandParser")]),_v(" parses the user input.")]),_v(" "),_c('li',[_v("An "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddTeamCommand")]),_v(" object is created.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TeamCommandParser")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddTeamCommandCommandParser")]),_v(" return the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddTeamCommand")]),_v(" object.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(" invokes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddTeamCommand")]),_v(", which creates a new team called \"NUS HACKERS\".")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"sequence-2-team-list-team-delete-team-export"}},[_v("Sequence 2: Team - List, Team - Delete, Team - Export"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sequence-2-team-list-team-delete-team-export","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("In this section, we will focus on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportTeamCommand")]),_v(" as an example.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram models the interactions between the different components of CodeConnect for the execution of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportTeamCommand")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Details:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("The user inputs the command to copy the details of a team specified at index 1.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TeamCommandParser")]),_v(" parses the user input.")]),_v(" "),_c('li',[_v("An "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportTeamCommand")]),_v(" object is created.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TeamCommandParser")]),_v(" return the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportTeamCommand")]),_v(" object.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(" invokes the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ExportTeamCommand")]),_v(", which copies the details of the team members of the team specified at index 1.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"command-history"}},[_v("Command History"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-history","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Details:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User focuses the command input.")]),_v(" "),_c('li',[_v("User presses the Up Arrow Key to view the previous command in history, or Down Arrow Key to view the next.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("updateCommandInput()")]),_v(" saves the currently edited command to the command buffer.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("next()")]),_v("/"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("previous()")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandHistoryView")]),_v(" is called and if a next/previous command exists, the command text field is updated.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"possible-improvements"}},[_v("Possible Improvements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#possible-improvements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The history size could be made to be configurable by the user.")]),_v(" "),_c('li',[_v("The history could be saved to disk so that it persists between app launches.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"send-direct-email"}},[_v("Send Direct Email"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#send-direct-email","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"possible-improvements-2"}},[_v("Possible Improvements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#possible-improvements-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("There can be a feature where multiple emails can be selected to send a mass email to them.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Student developers")]),_v(" "),_c('li',[_v("hopes to connect and collaborate with other student developers")]),_v(" "),_c('li',[_v("has a need to manage a significant number of contacts")]),_v(" "),_c('li',[_v("prefer desktop apps over other types")]),_v(" "),_c('li',[_v("can type fast")]),_v(" "),_c('li',[_v("prefers typing to mouse interactions")]),_v(" "),_c('li',[_v("is reasonably comfortable using CLI apps")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("keep track of other student developers")]),_v(" "),_c('li',[_v("reach out easily to those with relevant skills for collaboration opportunities when forming hackathon teams.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Priorities: High (must have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")]),_v(", Medium (nice to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")]),_v(", Low (unlikely to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("save the contacts of student developers")]),_v(" "),_c('td',[_v("remember them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("see the contacts of student developers")]),_v(" "),_c('td',[_v("reach out to them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("delete the contacts of student developers")]),_v(" "),_c('td',[_v("remove entries that I no longer need")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("search for the contacts of student developers")]),_v(" "),_c('td',[_v("locate details of contacts without having to go through the entire list")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("update the details of contacts that I already have in my address book")]),_v(" "),_c('td',[_v("keep my contact details up to date")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("search for contacts by tags")]),_v(" "),_c('td',[_v("locate a category of student developers easily")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("categorise the contacts I have saved into the projects I am working on")]),_v(" "),_c('td',[_v("have an organised address book")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("Forgetful Student")]),_v(" "),_c('td',[_v("add profile pictures for each contact")]),_v(" "),_c('td',[_v("know who I am contacting")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("search for contacts based on their technical skills")]),_v(" "),_c('td',[_v("form teams for hackathons more easily")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("rate technical skills of my contacts")]),_v(" "),_c('td',[_v("get apt members for my hackathon team")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("view my most used commands while typing")]),_v(" "),_c('td',[_v("save time typing out the full command")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("create teams of contacts")]),_v(" "),_c('td',[_v("keep track of my teammates when participating in hackathons")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("add contacts to a team")]),_v(" "),_c('td',[_v("can update my team as it changes")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("Student signing up for a hackathon")]),_v(" "),_c('td',[_v("export the contact details of my team")]),_v(" "),_c('td',[_v("easily sign up for events")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("place reminders for meetings with my contacts")]),_v(" "),_c('td',[_v("keep track of them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("New user")]),_v(" "),_c('td',[_v("import existing contacts into this application")]),_v(" "),_c('td',[_v("reuse contacts that I have saved previously")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("add notes to different contacts")]),_v(" "),_c('td',[_v("remember specific details")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("integrate my contacts with calendar events")]),_v(" "),_c('td',[_v("schedule meetings directly from the application")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("tag contacts based on their time zone")]),_v(" "),_c('td',[_v("take note of different time zones when scheduling meetings")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("link GitHub profiles or personal portfolio websites to contacts")]),_v(" "),_c('td',[_v("easily access their projects and contributions")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("be given smart suggestions for potential contacts based on my current network and interests")]),_v(" "),_c('td',[_v("find new like-minded student developers")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("integrate messaging apps to initiate conversations directly from the application")]),_v(" "),_c('td',[_v("interact with new contacts that I have made")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("New user")]),_v(" "),_c('td',[_v("have a tutorial feature that shows me how to use the app")]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("Student attending conferences or events")]),_v(" "),_c('td',[_v("quickly exchange contact information with fellow attendees through QR codes")]),_v(" "),_c('td',[_v("quickly add new contacts")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("Team Lead")]),_v(" "),_c('td',[_v("have access to integrated online learning platforms to track the courses or certificates completed by my contacts")]),_v(" "),_c('td',[_v("understand their evolving skills")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("endorse or rate the skills of my contacts")]),_v(" "),_c('td',[_v("keep track of their expertise and choose the right team members")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CodeConnect")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("user")]),_v(", unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC01 - Delete a contact")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to delete a specific contact in his list of contacts.")]),_v(" "),_c('li',[_v("CodeConnect deletes the contact. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The list is empty.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. The given index does not exist in CodeConnect.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC02 - Add a contact")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to add a Student’s contact information into his list of contacts.")]),_v(" "),_c('li',[_v("CodeConnect saves the new contact and displays it at the top of the contact list. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The contact already exists in the system.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. No fields are entered.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC03 - Update a contact")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to update a Student’s contact information into his list of contacts.")]),_v(" "),_c('li',[_v("CodeConnect updates the contact. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The given index to identify contact is invalid.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. No fields are entered.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1c. Updated value does not follow format of the specific field.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1d. Updated contact matches another existing contact")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC04 - View all contacts")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to view all his contacts.")]),_v(" "),_c('li',[_v("CodeConnect displays all contacts. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC05 - Search a contact by name")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to look up contacts with a specific substring in their name.")]),_v(" "),_c('li',[_v("CodeConnect checks each contact’s name in the list that contains the substring.")]),_v(" "),_c('li',[_v("CodeConnect shows a list of contacts that match the criteria. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No substring is given.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. There are no contacts in the list that match the criteria.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an empty list. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC06 - Search a contact by tags")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to look up contacts with specific tags.")]),_v(" "),_c('li',[_v("CodeConnect checks each contact’s tags in the list.")]),_v(" "),_c('li',[_v("CodeConnect shows a list of contacts that match the criteria. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No tag is given.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. There are no contacts in the list that match the criteria.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an empty list. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC07 - Search a contact by tech stack")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to look up contacts with specific tech stack.")]),_v(" "),_c('li',[_v("CodeConnect checks each contact’s tech stack in the list.")]),_v(" "),_c('li',[_v("CodeConnect shows a list of contacts that match the criteria. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No tech stack is given.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. There are no contacts in the list that match the criteria.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an empty list. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC08 - Rate a tech stack of a contact")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to rate specific tech stack of specific contact.")]),_v(" "),_c('li',[_v("CodeConnect checks specified tech stack in specified contact’s tech stack.")]),_v(" "),_c('li',[_v("CodeConnect rates specified tech stack of specified contact with rating. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No tech stack is given.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. No rating is given.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1c. No index is given.")]),_v(" "),_c('ul',[_c('li',[_v("1c1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1d. The specified contact does not have specified tech stack.")]),_v(" "),_c('ul',[_c('li',[_v("1d1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC09 - Sending an email to a specific contact")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User clicks on the email address of a specific contact.")]),_v(" "),_c('li',[_v("CodeConnect detects the user action and retrieves the email address associated with the clicked contact.")]),_v(" "),_c('li',[_v("CodeConnect opens the default desktop mail application.")]),_v(" "),_c('li',[_v("CodeConnect populates the recipient field of the mail application with the retrieved email address. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("1a. The default desktop mail application is not available on the system.\n"),_c('ul',[_c('li',[_v("1a1. CodeConnect displays an error message indicating that the desktop mail application is not supported. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC10 - Viewing command history")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User selects command input.")]),_v(" "),_c('li',[_v("User requests to view previous or next command in history.")]),_v(" "),_c('li',[_v("CodeConnect retrieves the command from the command history.")]),_v(" "),_c('li',[_v("CodeConnect updates the contents of the command input.\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("3a. CodeConnect does not find any previous/next command in the command history. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC11 - Export team members' details")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to export the details of team members of a specific team.")]),_v(" "),_c('li',[_v("CodeConnect retrieves the details of the team members.")]),_v(" "),_c('li',[_v("CodeConnect copies the teams' details to the clipboard. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("2a. An invalid index is passed into the command.")]),_v(" "),_c('ul',[_c('li',[_v("2a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("2b. CodeConnect does not find any team members in the team.")]),_v(" "),_c('ul',[_c('li',[_v("2b1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC12 - Adding a team")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to add a team.")]),_v(" "),_c('li',[_v("CodeConnect adds the team and displays it in the team list. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. No name is provided.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("2a. Another team with the same name already exists in CodeConnect.")]),_v(" "),_c('ul',[_c('li',[_v("2a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC13 - Delete a team")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to delete a specific team.")]),_v(" "),_c('li',[_v("CodeConnect deletes the team. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("1a. The given index does not exist in CodeConnect.\n"),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC14 - List a team's members")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list a specific team's members.")]),_v(" "),_c('li',[_v("CodeConnect shows the members of the team. "),_c('br'),_v("\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("1a. The given index does not exist in CodeConnect.\n"),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message. "),_c('br'),_v("\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC15 - Add a contact to a team")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to add a contact from the contact list to a team.")]),_v(" "),_c('li',[_v("CodeConnect saves the new contact and displays it in the team list.\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The given contact index does not exist in CodeConnect.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message.\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. The given team index does not exist in CodeConnect.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message.\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Use case: UC16 - Delete a contact from a team")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to delete a contact from a team.")]),_v(" "),_c('li',[_v("CodeConnect removes the contact from the team.\nUse case ends.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("1a. The given contact index does not exist in CodeConnect.")]),_v(" "),_c('ul',[_c('li',[_v("1a1. CodeConnect shows an error message.\nUse case ends.")])])]),_v(" "),_c('li',[_c('p',[_v("1b. The given team index does not exist in CodeConnect.")]),_v(" "),_c('ul',[_c('li',[_v("1b1. CodeConnect shows an error message.\nUse case ends.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{More to be added}")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Should work on any "),_c('em',[_v("mainstream OS")]),_v(" as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should be portable, and be able to run without any installation process.")]),_v(" "),_c('li',[_v("This program should only be used by a single user.")]),_v(" "),_c('li',[_v("A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 contacts without a noticeable sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("Should be able to respond within 2 seconds of user input.")]),_v(" "),_c('li',[_v("Should be able to launch and load its saved data below 10 seconds.")]),_v(" "),_c('li',[_v("Should be able to run basic commands (add, list, update, delete) without a network connection.")]),_v(" "),_c('li',[_v("Any stored data should be in a human-readable format.")]),_v(" "),_c('li',[_v("Must support a minimum window size of 800x600.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("Mainstream OS")]),_v(": Windows, Linux, MacOS")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("Argument")]),_v(": A word or number or a sequence of words or numbers that represent.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("CLI")]),_v(": A Command Line Interface is a text-based interface where users can interact with the software by typing commands.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("Command")]),_v(": A sequence of words that represents an action that CodeConnect can understand and execute.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("Field/Parameter")]),_v(": Refers to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Status")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Deadline")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Priority")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Description")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Member")]),_v(" of a Task.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("GUI")]),_v(": A Graphical User Interface is a visual interface where users can interact with the software through on-screen elements like buttons and windows.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("JAR")]),_v(": A file that contains all the resources needed for TaskWise to run.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("Java")]),_v(": A general-purpose programming language on which TextWise is built.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("Contact")]),_v(": An entry that holds information about someone that the user wants to save.")])}
},function anonymous(
) {
with(this){return _c('li',[_c('strong',[_v("Private contact detail")]),_v(": A contact detail that is not meant to be shared with others")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-planned-enhancements"}},[_c('strong',[_v("Appendix: Planned Enhancements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-planned-enhancements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"1-automatically-update-team-in-contacts-list-when-delete-contact-is-run"}},[_v("1. Automatically update team in contacts list when "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete-contact")]),_v(" is run"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-automatically-update-team-in-contacts-list-when-delete-contact-is-run","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("When the members of a team are "),_c('a',{attrs:{"href":"/tp/UserGuide.html#list-members-belonging-to-a-team"}},[_v("shown")]),_v(" in the contacts list,\n"),_c('a',{attrs:{"href":"/tp/UserGuide.html#deleting-a-contact-from-a-team-delete-contact"}},[_v("deleting")]),_v(" a member of that team does not update the contact list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("In the future, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete-contact")]),_v(" command should be enhanced to detect if the contact list is showing the current members of the\nteam, and automatically update the contact list to show the updated team if necessary.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"2-support-special-characters-in-names-for-contacts-and-teams"}},[_v("2. Support special characters in names for contacts and teams"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-support-special-characters-in-names-for-contacts-and-teams","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Currently, CodeConnect does not allow for special characters to be used in names. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s/o")]),_v(" cannot be used in\nnames even though it would be a valid name because it contains the special character "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/")]),_v(". Other examples include "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Harry S. Truman")]),_v(",\nor "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("T-Pain")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("In the future, we plan to expand the restrictions on names to also include special characters such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The parser in CodeConnect already should be able to parse most special characters without issue, except for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/")]),_v(",\nsince it is used to separate prefixes from their values. To solve this problem, we could either use another character instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/")]),_v("\nfor the prefixes, or use a delimiter to mark the start and end of names so that the parser can ignore any occurrences of special characters in them.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"3-allow-different-contacts-to-have-the-same-name"}},[_v("3. Allow different contacts to have the same name"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-allow-different-contacts-to-have-the-same-name","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"4-detect-when-tags-with-same-name-but-in-different-case-are-entered"}},[_v("4. Detect when tags with same name but in different case are entered"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-detect-when-tags-with-same-name-but-in-different-case-are-entered","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Currently, CodeConnect does not check if tags with the same name but with different capitalisation exist.\nFor example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/friend")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/Friend")]),_v(" can both be added to a contact, which should not be allowed.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("In these situations, CodeConnect should treat these two tags as identical. For example, adding "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/friend")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("t/Friend")]),_v("\nto a contact should display an error saying that identical tags cannot be added to a contact.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("To achieve this, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag::equals")]),_v(" method can be modified to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("String::equalsIgnoreCase")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("String::equals")]),_v(" to compare tags.\nWhen displaying tags, they should all be displayed either in upper or lower case, to show to the user that\ntags are treated with case-insensitivity.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"5-detect-when-tech-stacks-with-same-name-but-in-different-case-are-entered"}},[_v("5. Detect when tech stacks with same name but in different case are entered"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#5-detect-when-tech-stacks-with-same-name-but-in-different-case-are-entered","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Currently, CodeConnect does not check if tech stacks with the same name but with different capitalisation exist.\nFor example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/C")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/c")]),_v(" can both be added to a contact, which should not be allowed.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("In these situations, CodeConnect should treat these two tech stacks as identical. For example, adding "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/C")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/c")]),_v("\nto a contact should display an error saying that identical tech stacks cannot be added to a contact.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("To achieve this, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TechStack::equals")]),_v(" method can be modified to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("String::equalsIgnoreCase")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("String::equals")]),_v(" to compare tech stacks.\nWe can also consider saving tech stacks in upper case, which shows a consistent style and prevents the problem of one contact having\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/Javascript")]),_v(" but another contact having "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/JaVaScRipT")]),_v(". Instead, both contacts would show that they have "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ts/JAVASCRIPT")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"6-more-specific-error-messages-when-parsing-index"}},[_v("6. More specific error messages when parsing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#6-more-specific-error-messages-when-parsing-index","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("For commands such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate")]),_v(", inputting an invalid "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" gives a generic error message, which is\nunhelpful for the user. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 0")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Invalid command format!")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The command parsers for all commands that take in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" as an argument should be enhanced to detect when an invalid\ninput has been given, and output a more specific error message such as\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX should be a positive non-zero integer and not greater than the index of the last contact in the list")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"7-phone-number-validation"}},[_v("7. Phone number validation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#7-phone-number-validation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"8-inconsistent-rate-command-errors"}},[_v("8. Inconsistent "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate")]),_v(" command errors"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#8-inconsistent-rate-command-errors","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The current implementation allows a user to input an Integer rating only, not a Double or a Long etc. Hence, the error\nmessages for the different numbers vary.\nWhen the user inputs large numbers, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("100000000")]),_v(" (an Integer) and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("10000000000")]),_v(" (a Long), error messages, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Rating should be between 0 and 10.")]),_v("\nand "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Invalid command format!")]),_v(" are displayed respectively.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("We intend to enhance the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("rate")]),_v(" feature by separating the error handling for ParseException and NumberException into two\nwith respective error messages.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"9-prevent-adding-and-editing-contacts-with-duplicate-email-addresses-and-phone-numbers"}},[_v("9. Prevent adding and editing contacts with duplicate email addresses and phone numbers"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#9-prevent-adding-and-editing-contacts-with-duplicate-email-addresses-and-phone-numbers","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("We intend to enhance the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" features by implementing a check within the contact list. This check will verify\nwhether the email address and phone number intended for addition or modification already exists within the contact list.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"1"}},[_v("\nℹ️ "),_c('b',[_v("Note:")]),_c('br'),_v("\nThese instructions only provide a starting point for testers to work on;\ntesters are expected to do more *exploratory* testing.\n")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Initial launch")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Download the jar file and copy into an empty folder")])]),_v(" "),_c('li',[_c('p',[_v("Double-click the jar file Expected: Shows the GUI with a set of sample contacts. The window size may not be\noptimum.")])])])]),_v(" "),_c('li',[_c('p',[_v("Saving window preferences")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Resize the window to an optimum size. Move the window to a different location. Close the window.")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app by double-clicking the jar file."),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-contact"}},[_v("Deleting a contact"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-contact","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Deleting a contact while all contacts are being shown")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all contacts using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. Multiple contacts in the list.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_c('br'),_v("\nExpected: First contact is deleted from the list. Details of the deleted contact shown in the status message.\nTimestamp in the status bar is updated.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 0")]),_c('br'),_v("\nExpected: No contact is deleted. Error details shown in the status message. Status bar remains the same.")])]),_v(" "),_c('li',[_c('p',[_v("Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than the list size)"),_c('br'),_v("\nExpected: Similar to previous.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Dealing with missing/corrupted data files")]),_v(" "),_c('ol',[_c('li',[_c('em',[_v("{explain how to simulate a missing/corrupted file, and the expected behavior}")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-effort"}},[_c('strong',[_v("Appendix: Effort")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-effort","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"difficulty-level-and-challenges-faced"}},[_v("Difficulty Level and Challenges Faced"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#difficulty-level-and-challenges-faced","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"effort-required"}},[_v("Effort Required"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#effort-required","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"achievements-of-project"}},[_v("Achievements of Project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#achievements-of-project","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Redesigning existing commands for better intuitiveness and fit for our target audience - student developers.")]),_v(" "),_c('li',[_v("Expanded existing search functionalities, empowering users to more efficiently navigate through their contacts.")]),_v(" "),_c('li',[_v("Seamless integration of contacts and teams, enabling users to manage both contacts and hackathon teams.")]),_v(" "),_c('li',[_v("Improved GUI of existing application to accommodate the new teams feature, enabling users to flawlessly transition between team members and contacts in the address book.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"effort-saved-through-reuse"}},[_v("Effort Saved Through Reuse"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#effort-saved-through-reuse","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")]),_v(", generated on Mon, 15 Apr 2024, 22:55:43 GMT+8]")])])])}
}];
  