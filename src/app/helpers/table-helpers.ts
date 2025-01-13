import { OptimalGameRound } from '../data/interfaces/optimal-game-round.interface';

export function transformGameRoundToTableRow(
  gameRound: OptimalGameRound
): Record<string, number> {
  const {
    iteration,
    firstPlayerOptimalStrategyIndex,
    firstPlayerOptimalStrategy,
    firstPlayerOptimalStrategies,
    secondPlayerOptimalStrategyIndex,
    secondPlayerOptimalStrategy,
    secondPlayerOptimalStrategies,
    gamePrice,
  } = gameRound;

  const orderedObject: Record<string, number> = {};

  orderedObject['k'] = iteration;
  orderedObject['i'] = firstPlayerOptimalStrategyIndex + 1;

  secondPlayerOptimalStrategies.forEach((value, index) => {
    orderedObject[`B${index + 1}`] = value;
  });

  orderedObject['j'] = secondPlayerOptimalStrategyIndex + 1;

  firstPlayerOptimalStrategies.forEach((value, index) => {
    orderedObject[`A${index + 1}`] = value;
  });

  orderedObject['I̅'] = firstPlayerOptimalStrategy;
  orderedObject['I̲'] = secondPlayerOptimalStrategy;
  orderedObject['I'] = gamePrice;

  return orderedObject;
}
