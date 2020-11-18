// /* eslint-disable class-methods-use-this */
import Phaser from 'phaser';
import config from '../Config/config';
import { postScore } from '../Objects/scoreApi';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
    this.gameScore = 0;
    this.myScore = 0;
    this.savedScore = 0;
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.gameButton = this.add.sprite(200, 200, 'button2').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameText = this.add.text(0, 0, 'Restart', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    this.title.setOrigin(0.5);

    this.gameScore = localStorage.getItem('gameScore');
    this.myScore = parseInt(this.gameScore, 10);
    this.highScore = localStorage.getItem('highScore');
    this.savedScore = parseInt(this.highScore, 10);
    this.playerName = localStorage.getItem('DHplayerName');

    this.textScore = this.add.text(
      270,
      300,
      `Your Score: ${this.gameScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: '#ffffff',
        align: 'center',
      },
    );

    this.highScore = this.add.text(
      270,
      250,
      `High Score: ${this.highScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: '#ffffff',
        align: 'center',
      },
    );

    this.congra = this.add.text(
      150,
      450,
      ' ',
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: '#ffffff',
        align: 'center',
      },
    );

    this.gameButton3 = this.add.sprite(395, 390, 'button2').setInteractive();

    this.gameText = this.add.text(0, 0, 'Leaderboard', { fontSize: '25px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton3);

    this.gameButton3.on('pointerdown', () => {
      this.scene.start('LeaderBoardScene');
    });

    this.checkHighScore();

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('button3');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('button2');
    });
  }

  checkHighScore() {
    if (this.myScore > this.savedScore) {
      this.congra.setText('CONGRATULATIONS ON NEW HIGH SCORE!!');
      postScore(this.playerName, this.gameScore);
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2,
        config.height / 2 - offset * 100,
        config.width, config.height),
    );
  }

  /* eslint-disable class-methods-use-this */
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}
