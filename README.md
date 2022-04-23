# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Maya Zheng**

Time spent: **7** hours spent in total 

Link to project: (https://glitch.com/edit/#!/knowledgeable-grizzled-abacus?path=README.md%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Start, stop buttons. Winning the game. 

![](http://g.recordit.co/sLxStsqzNE.gif) 

Losing after 3 strikes

![](http://g.recordit.co/tsYNiv246x.gif)

Computer picks a different pattern each time the game is played

![](http://g.recordit.co/1xPA3XwzqC.gif)

Losing beacuse time ran out

![](http://g.recordit.co/Bdc5W50uIK.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Images for Optional Tasks sourced from
- <a href="https://www.flaticon.com/free-stickers/hamster" title="hamster stickers">Hamster stickers created by Stickers - Flaticon</a>
- <a href="https://www.flaticon.com/free-stickers/nature" title="nature stickers">Nature stickers created by Stickers - Flaticon</a>
- <a href="https://www.flaticon.com/free-stickers/cat" title="cat stickers">Cat stickers created by Stickers - Flaticon</a>
- <a href="https://www.flaticon.com/free-stickers/turtle" title="turtle stickers">Turtle stickers created by Stickers - Flaticon</a>
- <a href="https://www.flaticon.com/free-stickers/nature" title="nature stickers">Nature stickers created by Stickers - Flaticon</a>
- <a href="https://www.flaticon.com/free-stickers/animals" title="animals stickers">Animals stickers created by Stickers - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/disco-ball" title="disco ball stickers">Disco ball stickers created by smashingstocks - Flaticon</a>

All Audio sourced from Noiiz Cloud.

Understanding how to use setInterval and clearInterval
- https://www.w3schools.com/jsref/met_win_clearinterval.asp
- https://www.w3schools.com/jsref/met_win_setinterval.asp
- https://tousu.in/?qa=492949/ 
- https://stackoverflow.com/questions/30427882/make-a-timer-using-setinterval

How to make a simple timer
- https://www.youtube.com/watch?v=4piMZDO5IOI

Understanding text in CSS
- https://www.w3schools.com/css/css_text_align.asp
- https://www.w3schools.com/css//css_font_websafe.asp

CSS colors
- https://www.rapidtables.com/web/css/css-color.html#cyan

Images in html
- https://www.w3schools.com/tags/tag_img.asp

Playing and pausing audio
- https://www.codespeedy.com/play-selected-part-of-an-audio-file-in-javascript/



2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

During this submission, I struggled the most with the optional tasks as I did not have much previous experience with html, and css. When I started on the optional tasks, I mainly followed the steps in the original features and altered them slightly to implement the new features. However, when it came to specific tasks like changing the audio of the buttons, changing the existing functions did not work. Therefore, I tried commenting out the existing function and instead wrote a new test function, playMyAudio() based on the original playTone() function. playMyAudio() only played the audio for one of the buttons and this enabled me to test and debug the function to figure out why audio was not playing. After fixing playMyAudio(), I was able to easily edit the rest of the audio functions to play the custom audio clips. Similarly, when building the timer, I struggled with using setInterval() and clearInterval(), as the timer I made could not be pre-set. Even after fixing this, what followed was a struggle to figure out where to put the timer function in the code and how to reset it after the player makes a correct guess. At first, I tried to add it according to where I thought it would fit. This resulted in the timer counting down very quickly and continuing from where it stopped in the previous guess, and never resets after a game ends. I soon realized that clearInterval() did not restart the timer but instead paused it, which was causing the problem. To solve this problem, I referred to videos and resources online, and drew a flow chart (similar to the one provided in the task guidelines). This helped me find the right place to add the startTime() function in the code. This also improved my understanding of the flow of the code, enabling me to find a bug where I called the startTime() function twice in a row, which was a reason for why it would sometimes count down much faster than at 1 second intervals. 


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

- When we approach web development, is it usually better to plan out the layout beforehand in other tools like Figma? How can we effectively transfer what we visualize into reality? Furthermore, in terms of front end web development, how does one design an effective User Interface? Do we need to conduct User Experience research to determine what makes the game more enjoyable for players? 
- For this project we mainly did buttons, and headings with basic colors, how should we improve on the design to make the game more visually appealing to players?
- Since we used Javascript, CSS and HTML in this pre-work to work on the front end aspect of web development, I was wondering what are the languages that we will use for backend development?
- When doing web development for different devices like mobile phones and iPads, the screen size and formatting differs. How do we design a website that is versatile and can be applied to different devices? 



4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

- Firstly, I would add heart symbols to represent the number of lives the player has. I realized while playing the game that right now the player has to remember how many mistakes they have made so far. Three symbols that represent the lives could disappear one by one with every mistake that the player makes. 
- Secondly, I would also try to shorten the time limit provided for the player to make their decision with each round to increase the difficulty as the game progresses. Furthermore, to make the interface more engaging, I would improve on the timer. When the time is running out around the last 3 seconds, the timer will flash red to increase the intensity of the game as it counts down.
- As the levels increase, the images revealed by tapping the buttons could change to increase difficulty of the game and add some variety.
I think it would also be fun to build extra levels where the audio is a short tune and the pattern is played to the beat of the tune. The player has to click buttons in the correct rhythm to win. 
- Finally, I want to create a homepage for the game where we can track the score of the player. This can give the player incentive to play the game more regularly to beat their old score. In line with this, I would also try to add a leaderboard feature where the player can compare their score with other players and compete to get the highest score. 




## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/73cb46b54eae43e0bac82595decb6232)


## License

    Copyright [Maya Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
