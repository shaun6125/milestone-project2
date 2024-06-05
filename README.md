# Brain Builder - interactive memory games.
 
#### Interactive Front-End Development Project

In this project, we were asked to create an interactive gaming website, using javascript to create interactive functions and jest to test the code whilst writing it in a test driven development. I initially set off to create multiple games with the addition of bop-it and snap, however due to time constraints and only a foundation knowledge of javascript at this time I was only able to manage two games. 

## UX DESIGN

For this project I have used the Framework known as "[Bootstrap 4.2.1](http://getbootstrap.com/docs/4.2/)" for the initial layout and added my own html alterations and CSS for the look of the website and to style some elements.

### User Stories

As a first time user I would want to be able to fully understand what the games are and how to play. For this they need:

1. Simple layout which is easily understood and easy to navigate
2. Simple colours and fonts to provide focus to the games
3. Scoring system to show progress and failures.
4. Scalable to ensure playability on mutiple devices.

All Mock-Ups and planning I did for this project can be found here 

[Index-desktop](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/index%20-%20desktop.png)
[Index-tablet-mobile](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/index%20-%20mobile%20and%20tablet.png)
[Lovemaths-desktop](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/Love%20Math%20-%20desktop.png)
[Lovemaths-tablet-mobile](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/Love%20Math%20-%20tablet%20and%20mobile.png)
[Simon-desktop](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/Simon%20-%20desktop.png)
[Simon-tablet-mobile](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/Simon%20-%20mobile.png)
[Contact-desktop](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/Contact%20-%20desktop.png)
[Contact-tablet-mobile](https://github.com/shaun6125/milestone-project2/blob/main/assets/images/Contact%20-%20tablet%20and%20mobile.png)

## DESIGN

### Colour and Font Styling

As the games are primerily aimed at young kids, i decided to incorporate my childs school colours into the background whilst ensuring the game elements still stood out and were not distracted by the background.

As white can be very bright on the eyes and cause eye strain, i decided for a game that takes focus it would need that darker background to maximise the playability of the game.

I have imported the fonts from Google: "**Raleway & Original Surfer**" (Raleway used for all pages and original surfer used for the text in the center of the simon game).
I chose "Raleway" for its clean and simple appeal and "original surfer" as it closely resembled the 80's look of the original game. 

### Research

To see the differnt styles and functionality i had a look at some existing types of the Simon games and mathmatics games, this gave me some more ideas for what i could impliment into my own games.

## FEATURES

All pages on this site include the "Header". The Header consists of the navigation bar. 

For both games a randomly generated sequence of numbers/colours will be shown to the user. The user is then required to repeat the colour sequence or answer the question. A valid user input initiates the next round.
when the user clicks on a colour or math icon they will 'flash' and return back to the original colour, this is to reaffirm that something is happening when they make their input selection.

If the user enters the wrong answer or sequence a notification with a message will pop up to highlight a failed attempt.

### [index.html](https://shaun6125.github.io/milestone-project2/index.html)

This is the landing page, where people can see the benefits of memory games. This landing page has been purposfully kept simple, clean and bitesized to encourage the leaning element and not to distract from the purpose of the site, of which is the games.

The Image [brainbuilder.jpg] was used as a royalty free option. With better software I would have designed and vectorised my own image.

### [love-math.html](https://shaun6125.github.io/milestone-project2/love-math.html)

This page is dedicated to the mathmatics game. It has a simple interface, an answer box, and an incrementing score tally. 

### [simon.html](https://shaun6125.github.io/milestone-project2/simon.html)

This page is dedicated to the simon game. It has a simple interface, which all begins with pressing start, and an incrementing score tally that clears if a wrong move is made. 

### [contact.html](https://shaun6125.github.io/milestone-project2/contact.html)

This page is where other developers with great ideas can contact me directly and submit any potential project ideas that they may wish to work on together.

On this page, I have added a contact form with details on each row being required for submit.

## TECHNOLOGIES

Here are links to each techonology I have used:

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Bootstrap 4.2.1](http://getbootstrap.com/docs/4.2/)
- [Font Awesome 5](https://fontawesome.com)
- [JavaScript](https://simple.wikipedia.org/wiki/JavaScript)
- [emailJS](https://www.emailjs.com/)


## TESTING

I conducted tests on a wide selction of browsers/devices to ensure User's can successfully use the site and it's features.

Tests conducted:

- Checking the responsiveness
- Making sure each link worked properly
- All images resize appropriately 
- For the love-math game i decided to manually test the java script through trial and error as it gave me some workable answers of  what can be achieved in javascript, this trial and error approach taught me alot as i initially struggled with the java script module.
- For the simon game i took a test driven development approach and used jest to built the test, then write enough code to pass the test, following this approach saved alot of time and head scratching as it kept me better structured and moving forwards knowing there wasnt any errors to debug later on.
- On the contact page I designed and created the form with validation in mind, To this end I checked that the contact form worked using code institutes form validation tester "https://formdump.codeinstitute.net/". I then connected it to emailJS with a self created email template and ran several tests to ensure messages send and recieved.

Once all coding was done I ran the code through the [HTML Validator](https://validator.w3.org/) and the [CSS Validator](https://jigsaw.w3.org/css-validator/). After running the test on each file I fixed any errors given and the files are now validated.


These tests included browsers/devices:

- Edge - laptop and desktop
- Mozilla - laptop and desktop
- Chrome - laptop and desktop
- Safari - Iphone
- Samsung internet browser - android
- Internet Explorer - laptop and desktop

## Issues/Bugs

I had several issues to resolve throughout this project:

The nav bar was unresponsive and wouldnt adjust to apropriate screen size, this was due to and error in the html code, and later interferance from bootstrap.

CSS stylings started to interfear with other pages and so I decided that rather than renaming multiple elements I would break up the CSS file into a page by page styling and link apropriately to each page, this also helped the readability of the code and ensures any future development can carry on with ease.

Testing with jest started out ok, however I found that some of the tests I wrote were not correct and so found it impossible to pass, to work through my confusion I searched online and read through some books and realised where I went wrong with my code. 

Connecting EmailJS to the site proved to be a challenge, the process was different to what I had seen in the code-insitute tutorial and so had to rework what I had initially written. The guidance on EmailJS doesnt explain in the docs section either, however after probing through their playground I figured out how to string all the code together to ensure the emails would send.

## DEPLOYMENT

Whenever I thought that a page was finished, I deployed it to "**GitHub Pages**".

All my commits and project be found here [milestone-project2](https://github.com/shaun6125/milestone-project2).

## CREDIT

I used stack overflow to research a number of issues.

- [Stack Overflow](https://stackoverflow.com/)

Bootstrap 4 Documentation

- [bootstrap 4 documentation](https://getbootstrap.com/docs/4.0)

W3 Schools- Used to refresh on elements and styling.

- [w3schools](https://www.w3schools.com/)

Other than the two images used in the index.html and love-math.html all media has been created by myself for this project.

## ACKNOWLEDGEMENTS

I received inspiration for this project from the desire to change career. I have also been freelancing for my brothers company and enjoying further development of my skills. I used this passion to create the site. 