import Magician from '../daemon';

test('AttackWithoutStoned', () => {
  const hero = new Magician('Magician', 'hero');
  hero.attack = 10;
  hero.distance = 2;
  const result = 9;
  const power = hero.attack;
  expect(result).toBe(power);
});

test('AttackWithStoned', () => {
  const hero = new Magician('Magician', 'hero');
  hero.attack = 10;
  hero.distance = 2;
  hero.getStoned = true;
  const result = 4;
  const power = hero.attack;
  expect(result).toBe(power);
});
