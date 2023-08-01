import Daemon from '../daemon';

test('AttackWithoutStoned', () => {
  const hero = new Daemon('Daemon', 40);
  hero.attack = 2;
  const result = 36;
  const power = hero.attack;

  expect(result).toBe(power);
});

test('AttackWithStoned', () => {
  const hero = new Daemon('Daemon', 40);
  hero.attack = 2;
  hero.getStoned = true;
  const result = 31;
  const power = hero.attack;

  expect(result).toBe(power);
});
