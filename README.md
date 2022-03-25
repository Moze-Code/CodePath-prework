# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Omoze Oyarebu**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/natural-billowy-vault

## Required Functionality

The following **required** functionality is complete:

* Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* "Start" button toggles between "Start" and "Stop" when clicked. 
* Game buttons each light up and play a sound when clicked. 
* Computer plays back sequence of clues including sound and visual cue for each button
* Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* User wins the game after guessing a complete pattern
* User loses the game after an incorrect guess

The following **optional** features are implemented:

* Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* More than 4 functional game buttons
* Playback speeds up on each turn
* Computer picks a different pattern each time the game is played


The following **additional** features are implemented:



## Video Walkthrough (GIF)

<img src = "http://g.recordit.co/CidTavMOiA.gif" width=300><br>
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
<br>w3schools.com
<br>How to shuffle an array in JavaScript-youtube.com/watch?v=5sNGqsMpW1E

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
So I had two challenges while working on the game, my first was writing the nested if statements for the guess function. I had previously written programs that i used if/else-if statements that picked one of possible scenarios. I tried using the same approach here and was getting an undesired result such as the game only working for a turn, if the computer picked the next pattern and I choose the correct pick it would automatically declare i lost the game. It wasn’t until going back to update my understanding of the if control structure that I realized that my first if/else-if approach would not capture all the dependencies needed for the desired output and instead I should use only if/else. 
My Second challenge was writing the random pattern function that would change the order of the pattern array. This was a challenge at for me because been new to JavaScript I didn’t know how use the built in Math.random() function. So after a quick google search I was able to understand how to write the return method that randomizes the array.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Omoze Oyarebu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
