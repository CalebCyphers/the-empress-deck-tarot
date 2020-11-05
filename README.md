# Empress Tarot Journal
An app built by FrontEnd Students in Mod3 designed to facilitate creativity and the challenge of learning a new technology. The app will be designed to deliver a portable tarot journal where the user can easily do readings and log their own thoughts over time.

## Overview

- **[Deployed Site]()**
- **[Site Repository](https://github.com/CalebCyphers/the-empress-deck-tarot)**
- **[API Repository](https://github.com/kathrynljackson/empress-tarot-api)**
- **[Deployed API](https://empress-tarot-api.herokuapp.com/cards)**

#### Technologies Used

* React.js
* React Tesitng Library
* Jest
* Bootstrap
* Heroku
* Express

#### Installation
In your terminal:
1. Clone the repo-
`git@github.com:CalebCyphers/the-empress-deck-tarot.git`

2. Install NPM packages- `npm install`

## Artwork
- [Card art](https://imgur.com/a/4tylJME)
- [Retrieved From _WeirdWorks.com_](https://weird.works/peculiar-products/adventurers-tarot-empress-deck)


## Strategy to Build our App

A big component of this project was to teach ourselves a new technology. We chose to build an API and use it to build a working app. Before beginning our project, we met and created [our DTR](https://docs.google.com/document/d/1u0vh6wgpC_LHcpd9ImehJk20vpEHG_Pr5gLici4ajzo/edit?usp=sharing). This step gave us the opportunity to discuss our expectations, preferred schedule, and work style. Once we completed our DTR, we began to collaborate on a wireframe to help us convey our ideas and choose the best ones for our project. 

#### Wireframe: 
![Screen Shot 2020-11-04 at 10 20 50 PM](https://user-images.githubusercontent.com/65988644/98193797-3d4c1700-1edb-11eb-9ee8-dd4319830adb.png)

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

### Iteration 2 - Card Database

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

## Usage
#### MAIN PAGE DALIY READING VIEW
<img src="https://imgur.com/jRCK2eD.gif" alt="" width="600">



## Roadmap

The total time allotted for this project was approximately 10 days. Future features contemplated by the developers include the following:

* Adding user options to edit or delete journal entries

See the [open issues](https://github.com/CalebCyphers/the-empress-deck-tarot/issues) for a list of proposed features (and known issues).

## Contact

 [Caleb Cyphers](https://github.com/CalebCybers)

 [Kathryn Jackson](https://github.com/kathrynljackson)

 [Chadrick Dickerson](https://github.com/chadrick-d-dev)
