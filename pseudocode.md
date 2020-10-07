## Story
Make a website that lets two users play tic-tac-toe

As a ___ I want to ____ so that I can ____.
As a tic-tac-toe guru, I want to play tic-tac-toe electronically so that i can show off my tic-tac-toe skills and finally put Anthony in his place.

## Personas
    User playing game
    Anthony attempting to play

## DoD
    Play game until win or tie

## Acceptance Criteria:
    -click each box and display X or O
    -display player 1 or 2
    -view whose turn
    -view name of game (Tic-Tac-Toe)
    -Reset Button




# START
## View
### Render page 
    - Render game name
    - render player 1 and player 2 containers
    - render game board (3x3 grid) container
    - render invisible container for win or tie condition
    - render reset button

## Controller
    -onload() 
        -game name
        -players and X and O graphics
        -load game board
        -load container for win or loss

    -Check X input
        -have a clicklistener for x
        -display x in row that was clicked
        -push onto o state

    -Check O input
        -have a clicklistener for o
        -display o in row that was clicked
        -push onto x state
    
    -Check Win
        - O=1
        - X=2
        -''=0 
        -have a list of vertical conditions
        -have a list of horizontal conditions
        -have a list fo diagonal positions
        
        
        
    

### need a container for CRRR
### board needs col:row,row,row ^ x3
### each box must be clickable
### an icon must appear when box is clicked
### event listener to know which turn it is
### /possibly display whose turn it is at the top with the symbol or text showing

### END





M-
S-
C-
W-
