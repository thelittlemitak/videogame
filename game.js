// Create a new Phaser game instance
var config = {
  type: Phaser.AUTO,
  width: 1440,
  height: 770,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

new Phaser.Game(config);

let cursors;
let player;

// Preload assets
function preload() {
  // Load your game assets here, such as images, audio, etc.
  this.load.spritesheet("player", "/img/player.png", {
    frameWidth: 16,
    frameHeigth: 16,
  });
}

// Create game objects
function create() {
  // ! OBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJECTSOBJE

  player = this.add.sprite(200, 200, "player");
  player2 = this.add.sprite(300, 200, "player");

  cursors = this.input.keyboard.createCursorKeys();

  // ! ANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONSANIMATIONS
  this.anims.create({
    key: "playerAnimation",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 4 }),
    frameRate: 6,
    repeat: -1,
  });

  this.anims.create({
    key: "playerQuiet",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 0 }),
    frameRate: 1,
  });
}

// Update game logic
function update() {
  // Implement your game's update logic here
  const speed = 4; // Adjust the speed of movement

  if (cursors.left.isDown) {
    console.log("it's down!");
    player.anims.play("playerAnimation", true);
    player.x -= speed;
  } else if (cursors.right.isDown) {
    player.anims.play("playerAnimation", true);
    player.x += speed;
  } else if (cursors.up.isDown) {
    player.y -= speed;
    player.anims.play("playerAnimation", true);
  } else if (cursors.down.isDown) {
    player.y += speed;
    player.anims.play("playerAnimation", true);
  } else {
    player.anims.play("playerQuiet", true);
  }

  // } else if (cursors.down.isDown) {
  //   player.y += speed;
  //   player.anims.play("playerAnimation", true);
  // } else {
  //   player.anims.play("playerQuiet", true);
  // }
}
