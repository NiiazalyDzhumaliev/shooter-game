import Phaser from 'phaser';
import config from './Config/config';
import SceneMainMenu from './Scenes/SceneMainMenu';
import SceneMain from './Scenes/SceneMain';
import SceneGameOver from './Scenes/SceneGameOver';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('MainScene', SceneMain);
    this.scene.start('MainScene');
    this.scene.add('MainMenu', SceneMainMenu);
    this.scene.add('GameOver', SceneGameOver);
  }
}

window.game = new Game();
