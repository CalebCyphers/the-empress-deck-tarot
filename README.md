# Empress Tarot
An app built by FrontEnd Students in Mod3 designed to facilitate creativity and the challenge of learning a new technology. The app will be designed to deliver a portable tarot journal where the user can easily do readings and log their own thoughts over time.

#### Built With

* React.js
* React Tesitng Library
* Jest
* Bootstrap
* Backend Api using Heroku and Express



#### Installation
In your terminal:
1. Clone the repo-
`git@github.com:CalebCyphers/the-empress-deck-tarot.git`

2. Install NPM packages- `npm install`

## Resources

- [Card art](https://imgur.com/a/4tylJME)

## Usage
#### MAIN PAGE DALIY READING VIEW
<img src="" alt="" width="600">

#### MAIN PAGE MOBILE DAILY READING VIEW
<img src="" alt="" width="600">

#### CARD DATABASE VIEW
<img src="" alt="" width="600">

#### MOBILE CARD DATABASE VIEW
<img src="" alt="" width="600">

#### CARD PAGE VIEW
<img src="" alt="" width="600">

#### MOBILE CARD PAGE VIEW
<img src="" alt="" width="600">

#### JOURNAL ENTRY PAGE VIEW
<img src="" alt="'" width="600">

#### MOBILE JOURNAL ENTRY PAGE VIEW
<img src="" alt="" width="600">

## Strategy to Build our App

### Iteration 1 - Foundations

#### Primary User Story: 

When a user opens the webpage, they see a tarot card 

#### Steps

- Begin research on Express. How does it work? What steps are required to host it? How does it speak to a website?
- Design basic user interface. How does the website look in general? Create file structure and baseline componants using react. 
- Get website to talk to website. Get a random card's info to display onto the webpage.
- Get basic error handling into the website. What displayes when the promise isn't fulfilled? WHat displays when the website is loading? 
- Test the heck out of it. Mock out some async integration tests with mocked datasets to verify the website's functionality. Design happy and sad path tests.

#### What to Test

- Test the DailyReading component, and App.

## Iteration 2 - Card Database

#### Primary User Story:

When on the website, the user sees a 'menu' icon. When the user clicks on the icon, a navigation menu appears. The user sees two options in the menu 'Daily Reading,' and 'Card Database.' When the user clicks on 'Card Database' they are routed to a page with a list of all of the cards from the database. When they click on a card, they see the card's art and info.

#### Steps

- Build a navigation menu and interface.
- Build out Router functionality for the multiple pages.
- Populate the Card Database page with Card titles.
- Build a 'card info' page that populates with the info of whatever card was clicked on. 

#### What to Test

- card info page should render each necessary section (subtitle, description)

### Iteration 3 - Persistant data

#### Primary User Story:

A user can add a reflection under a card. When they click 'submit,' the website displays 'This reading has been added to your journal.' The User can navigate to a new 'Journal' page, and can see previous readings.

#### Steps

- Build forms and inputs for reflections - text area? needs to be linked to 'state' somehow, data must persist when navigating around the website.
- Build up the React Router and the componants required to display journal entries. 
- Build a navbar so that the user can navigate to the Journal page
- Link the Journal data to LocalStorage to make journal data persist on a device, even when the page reloads

#### What to Test

- journal entry submition function should run on click 
- journal entries (and necessary components) are displayed 


## Roadmap

The total time allotted for this project was approximately 10 days. Future features contemplated by the developers include the following:

* Adding user options to edit or delete journal entries

See the [open issues](https://github.com/CalebCyphers/the-empress-deck-tarot/issues) for a list of proposed features (and known issues).

## Contact

 [Caleb Cyphers](https://github.com/CalebCybers)

 [Kathryn Jackson](https://github.com/kathrynljackson)

 [Chadrick Dickerson](https://github.com/chadrick-d-dev)

Project Link: [the-empress-tarot-deck Repo](https://github.com/CalebCyphers/the-empress-deck-tarot)


