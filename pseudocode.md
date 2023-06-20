# Tic-Tac-Toe # 

## ABOUT ##  
- Classic tic-tac-toe grid with 9 squares playable on desktop or mobile.
  <br>
- Two users will input their name or nickname and take turns to try and get 3 squares in a row with their corresponding symbol.
  <br>
- Behind the scenes, there is a turn *counter* which will **increment** after every time a user clicks a button.
  <br>
- Similarly, after a button click the function behind the button will check if the number of turns is equal to or over 9 and end the game if so.
  <br>
- It will also check if there is a winner (three tiles in a row of the same symbol) after every turn and if there is end the game and declare the winner!

## Atomic Design 
- *ATOMS*
    - Heading display Tic-Tac-Toe
    - Subheading displaying current turn number
    - Individual buttons on the grid
    - Reset button at the bottom
- *MOLECULES*
    - Entire Header displaying the heading text and currentTurn
    - All of the buttons making up the entire game board (grid) and their functionality
    - Reset button functionality to change turncounter back down and reset the page 
- *ORGANISMS* 
    -Entire app working together
  
## MoSCoW:
- *MUST HAVE*
    * 3 x 3 Grid Layout
    * Click functionality to update the grid with the symbol
    * Player wins and is alerted when they get 3 in a row or if they tie
    * Buttons only have single click functionality, once clicked they can't be clicked again
    * Only a single div HTML element with id of "div"
- *SHOULD HAVE*
    * Let players know who turn it is (display at top under header?)
    * Restart button at the bottom to reset the grid and take the turn back down to turn 1 (so users dont have to refresh and enter usernames again)
- *COULD HAVE*
    * CSS animations to show flip animations when button is clicked to diplay an 'X' or an 'O'
    * Function to create 9 buttons (3 columns?) to cut back on lines of code. 
- *WON'T HAVE*



## INIT : Create variables for the Program
1. **grid**
      * Made up of 3 columns of 3 buttons (9 buttons total)
        * Properties:
            - Nine unique buttons with their own click functionality
2. **players**
      * An array of objects: player1 and player2
        * Properties:
            - Name : value saved from user prompt when loading the page
            - Symbol : X or O depending on which player number they are
3. **buttons**
      * An Array
      * Nine different buttons with unique ids created by a function
      * When clicked, invokes a function to increment the turn counter, loop through all of the winning combos to check if there is a winner
        * Properties :
          - name of the button (1 - 9)
          - display set false by default, upon user click changes to true to display
5. **turnCounter**
      * Start this variable at 0
      * Increments by one every time a button is clicked
      * Displayed at the top of the page under the app header
      * Can't go above 9 without ending the game and declaring a tie or victor
6. **updatedGrid**
      * Takes the current symbol: X or O and is pushed to this array
7. **winningCombos**
      * Array of arrays of all the possible winning combos
      * compared to updatedGrid to check in anyone won after every turn
8. **resetButton**
      * Button that when clicked resets turnCounter back to 1;
      * Clears all of the arrays besides the buttons, resets the displays back to false
9. **currentSymbol**
      * Updates based on whether or not turnCounter is divisble by 2 or not.
      * IF it isn't current symbol = X
      * ELSE current symbol = O
  
## FUNCTIONALITY : 

* FUNCTION onLoad (eventListener)
  1. INVOKES the createButtons function to create 9 buttons
  2. PROMPT users to enter their name or nickname and stores in the name property of the two objects
  3. ADDs the event listeners for the buttons to check turn, check if winner, reset page, push symbol to the other array 
  4. INITIALIZES the other elements/variables on page load like the header and reset button
  5. END

* FUNCTION click (eventListener) on the grid
  1. INVOKES the updateGrid function
  2. INVOKES checkWinner function
  3. INVOKES the changeTurn function
  4. One click functionality, after clicking once, value becomes null and cannot click again
  
* FUNCTION updateGrid()
  1. Change button innerText to variable currentSymbol value
  2. Push currentSymbol value to an array called updatedGrid

* FUNCTION checkWinner()
  1. IF turnCounter > 8 ALERT : TIE GAME, PLAY AGAIN!
  2. IF turnCounter >= 4
       * Loop updatedGrid variable through winningCombos
       * IF the updatedGrid matches any of the arrays in winningCombos ALERT users that the currentPlayer won
  3. ELSE ALERT users that its a tie game and play again
  
* FUNCTION changeTurn()
  1. IF turnCounter not divisble by two or undefined then it's player one's turn
  2. Have setTimeout functionality to alert the user and not right after user click 
  3. ALERT player one that it's their turn
  4. ELSE it is player two's turn
  5. ALERT player two that it's their turn
 
        

