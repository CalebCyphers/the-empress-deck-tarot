# Empress Tarot
An app built by FrontEnd Students in Mod3 designed to facilitate creativity and the challenge of learning a new technology. The app will be designed to deliver a portable tarot journal where the user can easily do readings and log their own thoughts over time.

## Resources

- [Card art](https://imgur.com/a/4tylJME)

## Iteration 1 - Foundations

#### Primary User Story: 

When a user opens the webpage, they see a tarot card 

#### Steps

- Begin research on Express. How does it work? What steps are required to host it? How does it speak to a website?
- Design basic user interface. How does the website look in general? Create file structure and baseline componants using react. 
- Get website to talk to website. Get a random card's info to display onto the webpage.
- Get basic error handling into the website. What displayes when the promise isn't fulfilled? WHat displays when the website is loading? 
- Test the heck out of it. Mock out some async integration tests with mocked datasets to verify the website's functionality. Design happy and sad path tests.

## Iteration 2 - Card Database

#### Primary User Story:

When on the website, the user sees a 'menu' icon. When the user clicks on the icon, a navigation menu appears. The user sees two options in the menu 'Daily Reading,' and 'Card Database.' When the user clicks on 'Card Database' they are routed to a page with a list of all of the cards from the database. When they click on a card, they see the card's art and info.

- Build a navigation menu and interface.
- Build out Router functionality for the multiple pages.
- Populate the Card Database page with Card titles.
- Build a 'card info' page that populates with the info of whatever card was clicked on. 

## Iteration 3 - Persistant data

#### Primary User Story:

A user can add a reflection under a card. When they click 'submit,' the website displays 'This reading has been added to your journal.' The User can navigate to a new 'Journal' page, and can see previous readings.

- Build forms and inputs for reflections - text area? needs to be linked to 'state' somehow, data must persist when navigating around the website.
- Build up the React Router and the componants required to display journal entries. 
- Build a navbar so that the user can navigate to the Journal page
- Link the Journal data to LocalStorage to make journal data persist on a device, even when the page reloads
