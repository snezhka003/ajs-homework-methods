import Zombie from './zombie';
import Undead from './undead';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Bowerman from './bowerman';

class Game {
  constructor() {
    this.activeCharacters = [];
    this.activeCharacters.push(
      new Zombie('zombie'),
      new Undead('undead'),
      new Daemon('daemon'),
      new Magician('magician'),
      new Swordsman('swordsman'),
      new Bowerman('bowerman'),
    );
  }
}

const game = new Game();

game.activeCharacters.forEach((character) => {
  character.levelUp();
  character.damage(10);
  console.log(character);
});
