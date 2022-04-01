# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Annesa Tran

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/spiffy-west-muscari

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] When the user makes a mistake, the user can re-attempt the sequence from the beginning.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/35d26b8a-c122-4f05-9618-a09901eacf73/Lost_Game.gif?v=1648452265648)
    A game where the user loses after making 3 mistakes.
![](https://cdn.glitch.global/35d26b8a-c122-4f05-9618-a09901eacf73/New_Game.gif?v=1648452967115)
    A new pattern is generated when a new game is started.
![](https://cdn.glitch.global/35d26b8a-c122-4f05-9618-a09901eacf73/Won_Game1.gif?v=1648454030609)
    Part 1 of a full game where the user wins by guessing a complete pattern. Note that playback speeds up on each turn.
![](https://cdn.glitch.global/35d26b8a-c122-4f05-9618-a09901eacf73/Won_Game2.gif?v=1648454469740)
    Part 2 of a full game where the user wins by guessing a complete pattern. Note that playback speeds up on each turn.

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    * [https://www.w3schools.com/cssref/css3_pr_transform.asp](https://www.w3schools.com/cssref/css3_pr_transform.asp)
    * [https://www.w3schools.com/js/js_loop_for.asp](https://www.w3schools.com/js/js_loop_for.asp)
    * [https://www.w3schools.com/JS/js_random.asp](https://www.w3schools.com/JS/js_random.asp)
    * [https://www.w3schools.com/tags/tag_img.asp](https://www.w3schools.com/tags/tag_img.asp)
    * [https://emojipedia.org/](https://emojipedia.org/)


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
    My primary experience has been in Python, and I am much less familiar with Javascript. So, I faced challenges in adapting to the Javascript language because I would end up “translating” what I would do if I were writing in Python into Javascript. For instance, while I was writing the function to generate a randomized pattern for each new game, my first idea was to write a list comprehension. However, I did not know how that would translate into Javascript, so I settled on writing a regular for loop. Even then, I had trouble getting accustomed to Javascript’s syntax in order to get this done. Also, since Python and Javascript have different standard libraries, I had to find Javascript equivalents to the Python methods that I was used to, such as the push() method in javascript and the append() method in Python. It also took me a little time to get used to the let, var, and const keywords.
    
    To overcome this challenge, I relied on online resources to better understand Javascript’s features and get used to writing in Javascript rather than thinking about everything in terms of how I would solve the same problem in Python. Online resources were also helpful for seeing examples of Javascript’s syntax and good formatting practices. Luckily, the more I wrote in Javascript during the process of creating this submission, the easier it got.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    
    Since this submission involved creating a static site, I’d like to know more about creating dynamic, multi-page websites. Questions I have are: how do web development frameworks and database programs actually get integrated into a web project? How are multiple-page sites organized file-wise given that there are Javascript, CSS, HTML, and other files to include? For back-end development, what languages are usually used? How does the web browser and/or operating system impact implementation and architecture decisions?

    Also, while I was reading resources about Javascript, I was confused about a couple terms. Specifically, what exactly is a JSON file format and what is asynchronous programming (async and await)? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    
    I would like to refactor the generatePattern function I created, which is called in the startGame function and to create a new pattern for the game. Currently, this function uses a loop to append a random integer between 1 and 5 (inclusive) to an initially empty array 8 times to create the pattern. If I had more time, I would take more time to look into Javascript’s standard library to possibly make the function more efficient or to rewrite it more elegantly.

    Regarding additional gameplay and interface features, I would edit the project so that the user is prevented from pressing any of the game buttons while the sequence is being played. That way, the user cannot just simply follow along as the sequence plays and will actually have to memorize the sequence. I think it would also be a good idea to have the interface show the user when it is their turn to repeat the pattern. For example, there could be an area on the page where “Sequence Playing” would appear while the sequence is being played, “Your Turn” would  appear when the user should input their guesses, and no text would appear when gamePlaying is false. I’d also like to improve the interface by making it responsive to screen size and editing the CSS so that it formats correctly on mobile devices.

    I would also like to make the CSS easier to edit through declaring variables. For instance, all of the game buttons in their default inactive state have a box-shadow property where its vertical offset of 7px. If I wanted to edit all of the game buttons to change the vertical offset, I would have to edit each and every game button’s CSS. So, in instances where a CSS property is repeated, I would like to implement variables.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://vimeo.com/694703364)


## License

    Copyright Annesa Tran

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.