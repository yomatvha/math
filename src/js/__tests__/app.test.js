import Character from '../app';

test('heroCreate', () => {
  const hero = new Character('Daemon', 40);
  const result = {
    type: 'Daemon',
    power: 40,
    getStoned: false,
    distance: 0,
  };
  expect(result).toEqual(hero);
});

test('characterType', () => {
  expect(() => new Character('hero', 30)).toThrow('Укажите тип персонажа');
});
