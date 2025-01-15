# Iterative Method for Solving a Matrix Game


This project implements an **iterative method** to solve a matrix game using an interface built with Material-UI. A matrix game involves two players, typically referred to as *Player 1* and *Player 2*, where the objective is to find **optimal strategies** that minimize loss or maximize gain. The iterative approach is computationally efficient and provides a practical solution to finding the game's equilibrium.

## Application Features

1.  **Matrix Input Interface:**
    
    -   You can input the game matrix directly through a form. The interface includes a dynamic grid to accommodate matrices of varying dimensions.
        
2.  **Result Visualization:**
    
    -   Displays the final optimal strategies and the value of the game in an easy-to-read format.
        
    -   Includes visualizations, such as bar charts, to represent the probability distributions of mixed strategies.
        
3.  **Log output:**
    
    -   You can also see the output of all actions in the game if there is not enough information from the results table.
 
## Workflow Overview

### 1.  Input the Number of Pure Strategies

The user is provided with two input fields to specify the number of pure strategies for each player. Once both values are entered, a matrix of the corresponding size will appear for further input.

### 2. Input the Game Matrix

The user starts by defining the matrix for the game. For example, a 3x3 matrix can be entered as follows:

```
| 2  3  4 |
| 3  0  3 |
| 4  2  0 |
```

The interface will provide a grid where users can fill in these values. The Material-UI grid and text field components ensure an intuitive experience.

> [!IMPORTANT] 
> The table accepts only positive strategy values.

Only positive values should be entered in the matrix. This is based on the assumption that the values represent the payoff for Player 1. The payoff for Player 2 is the same values with the opposite sign (negative).

### 3. Enter the starting strategy of the first player and the number of iterations of the calculation

> [!IMPORTANT] 
> Indexing of strategies starts from 1.

### 4. Iterative Computation

Once the matrix is submitted, the iterative algorithm calculates the optimal strategies for both players. The algorithm involves:

-   **Initialization:** Starting with initial probabilities for each strategy.
    
-   **Iteration:** Updating probabilities based on the best response calculations.
    

### 5. View Results

The results are displayed on the screen:

-  Sets of strategies.
-  Optimal strategies for Player 1 and Player 2.
-  The upper and lower value of the game.
-   The value of the game (expected payoff).
- Logs of each game round.
    

----------

## Technologies Used

-   **[Angular](https://angular.dev/overview) :** The core framework for the application.
-   **[Material-UI](https://material.angular.io/) :** For creating the dynamic user interface.
-   **Algorithm Implementation:** Written in [TypeScript](https://www.typescriptlang.org/) to integrate seamlessly with the front end.
   
    

## Conclusion

This application was created out of personal interest and a desire to gain a deeper understanding of game theory. The added logging functionality provides users with detailed insights into the algorithm's operation, making it easier to learn and analyze the iterative process. Whether you are a student, researcher, or enthusiast, this tool offers a practical way to explore and understand matrix games.
        
