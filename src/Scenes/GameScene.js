import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {    
    // this.load.image('playerShip', 'src/assets/playerShip.png');
    // this.load.image('water', 'src/assets/water.jpg');
    // this.load.image('blaster', 'src/assets/blasterbolt.png')
  }
 
  create() {
    // this.add.image(400, 300, 'water');
    // // this.add.image(400, 550, 'playerShip');
    // let ship = game.add.sprite(game.world.centerX, game.world.centerY, 'playerShip');
    // ship.anchor.setTo(0.5, 0.5);
  }
};
