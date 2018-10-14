
# Tic-Tac-Toe

This is the first of four projects I'll be doing in the Web Development Immersive
with General Assembly. Below I'l be listing technologies used, the planning process,
and what I'd like to do to improve my program.

## Technologies Used

* JavaScript
* JQuery
* Ajax Calls to an API
* HTML5
* CSS
* Bootstrap

## Planning Process

I started the planning process by reviewing the project requirements, creating
creating user stories, and sketching a [wireframe](https://imgur.com/Y0kf0KU) based
on the user stories.

### User Stories

#### Login and authentication

* User can register as a new user via email and password entry
* User can login via email and password confirmation
* User can press a button to logout after signing in
* User can change password and being logged in
* User receives messages indicating success or failure of authentication steps listed above

#### Game Play

* After login, user starts as player X and selects a container in a 3x3 grid
* User sees X on selected container
* User continues as player O and selects a container not previously selected
* Sees error message if trying to select an already selected container
* User sees message indicating who’s turn it is upon a play being made
* Play continues with user alternating X and O selections on the grid until victory state occurs
* User receives a message indicating whether player X or O won
* User is able to click “reset” button that will send game board back to “new game state” without a page reload
* User can review how many games they’ve won

With four days to work on the project, I set out with the following plan:

Day 1. Write abstract game logic in Javascript

Day 2. Game User Interface (build front-end, game grid, and flow of messages
that guide the user from login to logout)

Day 3. Connect User Authentication to API

Day 4. Connect Game Events to API (when a new game is created, when plays to the
board are made, and when a user wants to view stats)

## Development Process

Unfortunately, I didn't stick to the gameplan I created for myself. This being my
first "start-to-finish" project, I quickly deviated from my plan. I decided to
start with User Authentication, which I was most comfortable with, and accomplished
that during the second half of the first day. I began by referring to my user stories from
above and methodically working through each user story.

Unfortunately, my methodical process and clean code stopped after the first day.
What I was most concerned about was writing the abstract game logic. I spent a little
over a day taking care of this task. I didn't quite know where to begin, so I started
by playing games of tic-tac-toe in my notebook. This helped me figure out the
conditions for victory and how to programmatically step through many iterations of a
game. From there I wrote out a function that would check an array for a game over state.

Things took off from there and I lost any sense of organization for my code. I don't
remember the order in which things happened, but I created a function that alternated
whether it was X or Os turn and wrote the function that tied everything together if
a legal play was made. I created the HTML gameboard with boostrap and connected that with my
function. By the middle of the third day I had a clickable board that a user could interact
with and a game that would end when game over conditions were met. I also spent some time
adding in the UI flow (only login and create new user records visible on initial page load,
game board shows up when new game button is clicked after user login, messages pop up, etc).

The final day and a half was spent with connecting my user actions in a game to the backend API.
This was the most challenging and frustrating parts of the project. Eventually I got it done.


## Unsolved Problems / Still To Do

My current project meets technical specifications but there is more I'd like to do.

### Visual Design

I spent up until 11:30 the night before the project was due completing the programming
that takes place beneath the surface and had no time to enhance the visual components of the page. I enjoy
front-end work so I'm a bit ashamed about the current design.

### Cleaner Code

When I abandoned the methodical approach once I started writing the game logic, I abandoned the best practices that would have made my code cleaner and more modular. This is best represented by the fact that I have an AJAX call written within the function that governs when a play is made. I'd like to have separated my code into different files based on purpose.

### Next Version

In my next version I'd like a user to be able to view a record of all of the games they played including the winning condition of each game. I'd like to explore more of bootstrap and develop a more compelling user interface. 

## Conclusion

I thoroughly enjoyed the process of building this page. Each time a line of code correctly logged what I wanted to the console felt like a victory. Testing as I built and asking questions when I was stuck were the things that helped me get to this point. Building out the game logic was the most satisfying part of this project because it was what I felt least comfortable with.
