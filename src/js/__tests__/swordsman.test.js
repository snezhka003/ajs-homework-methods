import Swordsman from '../swordsman';

test('test class Swordsman with valid value of name', () => {
  const swordsman = new Swordsman('swordsman');
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});

test('test class Swordsman with invalid values of properties', () => {
  expect(() => {
    const swordsman = new Swordsman('volandemort', 'Magic');
    return swordsman;
  }).toThrow(Error);
});

test('test class Swordsman with invalid value of name', () => {
  expect(() => {
    const swordsman = new Swordsman('volandemort');
    return swordsman;
  }).toThrow(Error);
});

test('test class Swordsman with invalid value of type', () => {
  expect(() => {
    const swordsman = new Swordsman('swordsman', 'Pacman');
    return swordsman;
  }).toThrow(Error);
});

// мне кажется, что в данном случае тесты на проверку ошибки
// при невалидном значении типа и при невалидных значениях имени и типа одновременно - избыточны,
// т.к. в самом классе прописано конкретное значение типа
