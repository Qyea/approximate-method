export const gameDescription = `
<div>
    <p> 
        In this method, the game is repeated a specified number of times, denoted by $$$s$$$. Each iteration of the game is called a "round." 
        Players operate exclusively with pure strategies. Players operate exclusively with pure strategies. In the first round, one of the players, for instance, the first player, chooses an arbitrary pure strategy $$$A_&#123;i1&#125;$$$.
        The opponent responds with their optimal pure strategy $$$B_&#123;j1&#125;$$$. Subsequently, the first player makes the next choice, and so on. At each step, a player selects their pure strategy that is optimal relative to the mixed strategy of the opponent. The mixed strategy of the opponent is determined by the frequencies of all pure strategies they have used up to that point. 
        The method can be represented in a tabular format. The first column lists the round number. The second column contains the number of the pure strategy chosen by the first player in that round. Subsequent columns show the average payoff for the rounds played so far, based on the strategies employed by both players in previous rounds, and for the second player's pure strategies 
        $$$B_&#123;i1&#125;, B_&#123;i2&#125;, …, B_&#123;im&#125;$$$ in the current round.
        The next column indicates the number of the pure strategy chosen by the first player in the current round. Following this, there are columns showing the average payoff for the corresponding number of rounds when the first player employs pure strategies 
        $$$A_&#123;i1&#125;, A_&#123;i2&#125;, …, A_&#123;in&#125;$$$.
    </p> 
</div>
<div> 
    The next three columns provide: 
</div>
<div> 
    $$$I_&#123;min&#125;$$$ &mdash; an estimate of the game's lower value,
</div>
<div> 
    $$$I_&#123;max&#125;$$$ &mdash; an estimate of the game's upper value,
</div>
<div> 
    $$$I$$$ &mdash; an estimate of the game's value.
</div>
<div> 
    In the table, $$$j_r$$$ is the number of the second player's strategy corresponding to $$$I$$$ in the $$$r$$$-th row, $$$r$$$ = 1, …, $$$s$$$. As noted earlier, $$$i_1$$$ is chosen arbitrarily, and $$$i_r$$$ is the number of the first player's strategy corresponding to 
    $$$I$$$ in the $$$r$$$-th row, $$$r$$$ = 2, …, $$$s$$$. If multiple pure strategy numbers correspond to the same value, one of them is chosen arbitrarily.
    As estimates of the probabilities in the player's optimal strategy, the frequencies of their corresponding pure strategies are used. The final value of $$$I$$$ serves as the estimate of the game's value.
</div>
`;
