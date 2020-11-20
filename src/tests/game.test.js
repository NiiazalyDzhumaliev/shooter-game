const game = require('../Objects/game');

test('it starts the game', () => {
  expect(game(true)).toBe(true);
});

test('it ends the game', () => {
  expect(game(false)).toBe(false);
});

test('it only accept boolean', () => {
  expect(game(10)).not.toBe(false || true);
});
