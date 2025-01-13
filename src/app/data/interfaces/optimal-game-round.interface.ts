export interface OptimalGameRound {
  iteration: number;
  firstPlayerOptimalStrategyIndex: number;
  firstPlayerOptimalStrategy: number;
  firstPlayerOptimalStrategies: number[];
  secondPlayerOptimalStrategyIndex: number;
  secondPlayerOptimalStrategy: number;
  secondPlayerOptimalStrategies: number[];
  gamePrice: number;
}
