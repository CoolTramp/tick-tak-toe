import { Players } from "../../src/modules/classes/players";

describe("the togglePlayer() method", () => {
  let game = new Players();

  test("must return 2 if currentPlayer === 1", () => {
    expect(game.togglePlayer()).toBe(2);
  });

  test("must return 1 if currentPlayer === 2", () => {
    expect(game.togglePlayer()).toBe(1);
  });
});
