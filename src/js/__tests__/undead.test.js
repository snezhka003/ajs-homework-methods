import Undead from '../undead';

test('test class Undead with valid value of name', () => {
  const undead = new Undead('undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});

test('test class Undead with invalid values of properties', () => {
  expect(() => {
    const undead = new Undead('volandemort', 'Magic');
    return undead;
  }).toThrow(new Error('Not valid character name and type!'));
});

test('test class Undead with invalid value of name', () => {
  expect(() => {
    const undead = new Undead('volandemort');
    return undead;
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('test class Undead with invalid value of type', () => {
  expect(() => {
    const undead = new Undead('undead', 'Pacman');
    return undead;
  }).toThrow(new Error('Not valid character type!'));
});

// мне кажется, что в данном случае тесты на проверку ошибки
// при невалидном значении типа и при невалидных значениях имени и типа одновременно - избыточны,
// т.к. в самом классе прописано конкретное значение типа
