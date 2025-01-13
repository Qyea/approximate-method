import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logs: string = '';

  getDescription(
    matrix: number[][],

    isFirstPlayer: boolean
  ) {
    let log = ` 
    <div>
      <span>
        Taking into account the probabilities of using strategies, we obtain the following matrix: \n ${matrix} \n
      </span> 
    </div>
    `;
    log += `
    <div>
      <span>
        Let's calculate the strategies
      </span> 
    </div>
   `;
    if (!isFirstPlayer) {
      log += `
        <div>
          <span>
            We calculate for each strategy (that is, we fix the column) the amount of the value in each row: 
          </span> 
        </div>
      `;

      for (let i = 0; i < matrix.length; i++) {
        log += `
        <div>
          For ${i + 1} row: \n`;
        let selectedStrategies: string = '';
        for (let j = 0; j < matrix[0].length; j++) {
          selectedStrategies += `${matrix[i][j]} ${
            j === matrix[0].length - 1 ? '' : '+'
          } `;
        }

        log += `<span>
                  $$$C_${i + 1}$$$ = ${selectedStrategies} 
                </span> `;

        if (i === matrix.length - 1) {
          log += '</div>';
        }
      }
    } else {
      log += `hhhh: \n`;

      for (let j = 0; j < matrix[0].length; j++) {
        log += `
        <div>
          For ${j + 1} column:\n`;
        let selectedStrategies: string = '';
        for (let i = 0; i < matrix.length; i++) {
          selectedStrategies += `${matrix[i][j]} ${
            i === matrix.length - 1 ? '' : '+'
          } `;
        }

        log += `<span>
                  $$$C_${j + 1}$$$ = ${selectedStrategies} 
                </span> `;

        if (j === matrix[0].length - 1) {
          log += '</div>';
        }
      }
    }

    this.logs += log;
  }

  logPlayerStep(
    iteration: number,
    probabilityVector: number[],
    strategies: number[],
    optimalValue: number,
    isFirstPlayer: boolean
  ) {
    const playerNumber = isFirstPlayer ? 'first' : 'second';

    let log = `${isFirstPlayer ? '\n' : `Iteration: ${iteration + 1}\n`}`;

    log += `The vector of using pure strategies for the ${playerNumber} player: ${probabilityVector}.\n`;
    log += `Considering the probabilities, the ${playerNumber} player's strategies vector is: ${strategies}.\n`;
    log += `The ${
      isFirstPlayer ? 'maximum' : 'minimum'
    } value is ${optimalValue}.\n`;

    log += `${isFirstPlayer ? '\nEnd of the round\n' : ''}`;

    this.logs += log;
  }

  getLogs(): string {
    return this.logs;
  }

  clearLogs() {
    this.logs = '';
  }
}
