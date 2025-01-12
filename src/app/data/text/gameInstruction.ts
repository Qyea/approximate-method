export const gameInstruction = `
<h3> Steps to Use the Application: </h3>
<div> 
    <p>Input the number of pure strategies for both players:</p>
    <ul> 
        <li> Number of Pure Strategies for Player 1: Enter the total number of pure strategies available to Player 1. </li>
        <li> Number of Pure Strategies for Player 2: Enter the total number of pure strategies available to Player 2.</li>
        <li> Fill the matrix with pure strategies. </li>
    </ul>
    <p>The game matrix will be displayed after inputting the number of strategies. You need to fill in the payoffs for each combination of pure strategies for both players. The matrix represents the payoffs for Player 1 based on their chosen strategy and Player 2's response.</p>          
</div>
<div> 
    <p>The matrix will be structured as follows:</p>
    <ul> 
        <li> Rows represent the pure strategies of Player 1. </li>
        <li> Columns represent the pure strategies of Player 2.</li>
        <li> Each cell contains the payoff for Player 1 given the combination of Player 1's strategy and Player 2's strategy. </li>
    </ul>
    <p> Once the matrix is filled, you will need to specify the first pure strategy that Player 1 will choose in the first round. </p>
</div>
<div> 
    <p>Then input the number of iterations (s) for the game. This is the number of rounds the game will be repeated. In each round, players will update their strategies based on the results of previous rounds.</p>
</div>
`;
