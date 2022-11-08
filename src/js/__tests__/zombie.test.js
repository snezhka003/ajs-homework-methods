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

test('test class Zombie with invalid values of properties', () => {
  expect(() => {
    const zombie = new Zombie('volandemort', 'Magic');
    return zombie;
  }).toThrow(new Error('Not valid character name and type!'));
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

// мне кажется, что в данном случае тесты на проверку ошибки
// при невалидном значении типа и при невалидных значениях имени и типа одновременно - избыточны,
// т.к. в самом классе прописано конкретное значение типа
