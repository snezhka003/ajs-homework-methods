import Zombie from '../zombie';

test('test class Zombie with valid value of name', () => {
  const zombie = new Zombie('zombie');
  const expected = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});

test('test class Zombie with invalid value of name', () => {
  expect(() => {
    const zombie = new Zombie('volandemort');
    return zombie;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('test class Zombie with invalid value of type', () => {
  expect(() => {
    const zombie = new Zombie('zombie', 'Pacman');
    return zombie;
  }).toThrow(new Error('Not valid character type!'));
});
