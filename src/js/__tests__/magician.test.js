import Magician from '../magician';

test('test class Magician with valid value of name', () => {
  const magician = new Magician('magician');
  const expected = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});

test('test class Magician with invalid value of name', () => {
  expect(() => {
    const magician = new Magician('volandemort');
    return magician;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('test class Magician with invalid value of type', () => {
  expect(() => {
    const magician = new Magician('magician', 'Pacman');
    return magician;
  }).toThrow(new Error('Not valid character type!'));
});
