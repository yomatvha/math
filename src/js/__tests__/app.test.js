import Character from '../app';

test('heroCreate', () => {
  const hero = new Character('Daemon', 'hero');
  const result = {
    type: 'Daemon',
    name: 'hero',
    power: 0,
    getStoned: false,
    distance: 0,
  };
  expect(result).toEqual(hero);
});

test('characterType', () => {
  expect(() => new Character('hero', 'hero')).toThrow('Укажите тип персонажа');
});
