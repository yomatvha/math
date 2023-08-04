import Daemon from '../daemon';

test('AttackWithoutStoned', () => {
  const hero = new Daemon('Daemon', 'hero');
  hero.distance = 2;
  hero.attack = 40;
  const result = 36;
  const power = hero.attack;
  expect(result).toBe(power);
});

test('AttackWithStoned', () => {
  const hero = new Daemon('Daemon', 'hero');
  hero.distance = 2;
  hero.attack = 40;
  hero.getStoned = true;
  const result = 31;
  const power = hero.attack;
  expect(result).toBe(power);
});
