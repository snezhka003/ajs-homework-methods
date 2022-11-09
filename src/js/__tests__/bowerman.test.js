import Bowerman from '../bowerman';

test('test class Bowerman with valid value of name', () => {
  const bowerman = new Bowerman('bowerman');
  const expected = {
    name: 'bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(expected);
});

test('test class Bowerman with invalid value of name', () => {
  expect(() => {
    const bowerman = new Bowerman('volandemort');
    return bowerman;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('test class Bowerman with invalid value of type', () => {
  expect(() => {
    const bowerman = new Bowerman('bowerman', 'Pacman');
    return bowerman;
  }).toThrow(new Error('Not valid character type!'));
});
