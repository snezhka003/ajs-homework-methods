import Daemon from '../daemon';

test('test class Daemon with valid value of name', () => {
  const daemon = new Daemon('daemon');
  const expected = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});

test('test class Daemon with invalid value of name', () => {
  expect(() => {
    const daemon = new Daemon('volandemort');
    return daemon;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('test class Daemon with invalid value of type', () => {
  expect(() => {
    const daemon = new Daemon('daemon', 'Pacman');
    return daemon;
  }).toThrow(new Error('Not valid character type!'));
});
