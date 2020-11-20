/* eslint-disable class-methods-use-this */
import Phaser from 'phaser';
import config from '../Config/config';

export default class InputScene extends Phaser.Scene {
  constructor() {
    super('InputScene');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SHOOTER GAME', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    this.title.setOrigin(0.5);

    this.input = this.add.dom(200, 235, 'input', {
      type: 'text',
      name: 'nameField',
      fontSize: '32px',
      backgroundColor: '#ffffff',
    });

    this.gameButton = this.add.sprite(400, 300, 'button2').setInteractive();

    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Your name here';
    nameInput.type = 'text';
    nameInput.id = 'username';

    document.querySelector('#game').appendChild(nameInput);

    this.title1 = this.add.text(70, 350,
      'Please use the ARROW KEYS and Space to play', {
        fontFamily: 'monospace',
        fontSize: 25,
        fontStyle: 'bold',
        color: '#ffbb00',
      });

    this.alertMsg = this.add.text(250, 400,
      '', {
        fontFamily: 'monospace',
        fontSize: 25,
        fontStyle: 'bold',
        color: 'red',
      });

    this.gameText = this.add.text(0, 0, 'Start', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      if (nameInput.value !== '') {
        localStorage.setItem('DHplayerName', nameInput.value);
        nameInput.style.display = 'none';
        this.scene.start('GameScene');
      } else {
        this.alertMsg.setText('Alert: Name Required!');
      }
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2, config.height / 2 - offset * 100,
        config.width, config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}
