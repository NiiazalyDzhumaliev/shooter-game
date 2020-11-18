import Phaser from 'phaser';
import config from '../Config/config';
import { getScores } from '../Objects/scoreApi';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoardScene');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'LEADERBOARD', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    this.title.setOrigin(0.5);
    this.score1 = this.add.text(150, 200, '', {
      fontFamily: 'monospace',
      fontSize: 32,
      color: 'white',
      align: 'center',
    });

    this.score2 = this.add.text(150, 250, '', {
      fontFamily: 'monospace',
      fontSize: 32,
      color: 'white',
      align: 'center',
    });

    this.score3 = this.add.text(150, 300, '', {
      fontFamily: 'monospace',
      fontSize: 32,
      color: 'white',
      align: 'center',
    });
    this.gameButton = this.add.sprite(390, 500, 'button2').setInteractive();

    this.gameText = this.add.text(0, 0, 'Restart', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      this.scene.start('InputScene');
    });

    this.topScore();
  }

  async topScore() {
    const resultObject = await getScores();

    if (Array.isArray(resultObject.result)) {
      this.scores = resultObject.result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
      this.score1.setText(`${1} --- ${this.scores[0].user} --- ${this.scores[0].score}`);
      this.score2.setText(`${2} --- ${this.scores[1].user} --- ${this.scores[1].score}`);
      this.score3.setText(`${3} --- ${this.scores[2].user} --- ${this.scores[2].score}`);
    } else {
      this.score1.setText(resultObject);
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

  // eslint-disable-next-line class-methods-use-this
  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}
