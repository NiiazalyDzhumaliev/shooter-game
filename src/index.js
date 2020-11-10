import 'phaser';
import config from './Config/config';
import SceneMainMenu from './Scenes/SceneMainMenu';
import SceneMain from './Scenes/SceneMain';
import SceneGameOver from './Scenes/SceneGameOver';
// import Entities from './Objects/Entities';
// import GameScene from './Scenes/GameScene';
// import BootScene from './Scenes/BootScene';
// import PreloaderScene from './Scenes/PreloaderScene';
// import TitleScene from './Scenes/TitleScene';
// import OptionsScene from './Scenes/OptionsScene';
// import CreditsScene from './Scenes/CreditsScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('MainScene', SceneMain);
    this.scene.start('MainScene');
    this.scene.add('MainMenu', SceneMainMenu);
    this.scene.add('GameOver', SceneGameOver);
    // this.scene.add('Boot', BootScene);
    // this.scene.add('Preloader', PreloaderScene);
    // this.scene.add('Title', TitleScene);
    // this.scene.add('Options', OptionsScene);
    // this.scene.add('Credits', CreditsScene);
    // this.scene.add('Game', GameScene);
    // this.scene.start('Game');
  }
}

window.game = new Game();
