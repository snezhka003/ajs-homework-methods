import Character from '../character';

test('test class Character with valid values of property', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('test class Character with invalid values of properties', () => {
  expect(() => {
    const character = new Character('volandemort', 'Magic', 40, 20);
    return character;
  }).toThrow(new Error('Not valid character name and type!'));
});

test('test class Character with invalid value of name', () => {
  expect(() => {
    const character = new Character('volandemort', 'Daemon', 40, 20);
    return character;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('test class Character with invalid value of type', () => {
  expect(() => {
    const character = new Character('voland', 'Pacman', 40, 20);
    return character;
  }).toThrow(new Error('Not valid character type!'));
});

test('test method levelUp with valid value of health', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  character.levelUp();
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 24,
  };

  expect(character).toEqual(expected);
});

test('test method levelUp with invalid value of health', () => {
  expect(() => {
    const character = new Character('hero', 'Bowerman', 40, 20);
    character.health = 0;
    character.levelUp();
    return character;
  }).toThrow(Error);
});

test('test method damage with value of health > 0', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  character.damage(10);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 92,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('test method damage with such value of health, when result health < 0', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  character.health = 3;
  character.damage(10);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});
