class Enemy {
	constructor(monster, x, y, width, height, line, level) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = monster.speed;
		this.health = monster.health + monster.health * level * 0.5;
		this.maxHealth = this.health;
		this.attack = this.health;
		this.monster = monster;
		this.line = line;
		this.isDying = false;
		this.isDead = false;
	}

	update() {
		this.x -= this.speed;
	}

	setDyingAnimation() {
		this.isDying = true;
		this.speed = 0;
		this.monster.changeAnimation(this.monster.type + '_dying');
	}

	draw(ctx) {
		const monsterImage = this.monster.selectImage();
		const delta_y = (this.height - monsterImage.height) / 2;

		if (this.monster.animation.isAnimationFinished() && this.isDying) {
			this.isDead = true;
		}

		// if (!this.isDying) {
		// ctx.font = '30px arial';
		// ctx.strokeStyle = 'black';
		// ctx.fillText(this.health, this.x, this.y + delta_y);
		// }

		if (!this.isDead) {
			ctx.drawImage(monsterImage, this.x, this.y + delta_y);
		}
		if (!this.isDying) {
			this.drawLiveBar(ctx);
		}
		this.drawLiveBar(ctx);
	}
	drawLiveBar(ctx) {
		ctx.fillStyle = '#000';
		ctx.fillRect(this.x, this.y, 100, this.width / 10);
		ctx.fillStyle = '#FF0000';
		ctx.fillRect(
			this.x + 5,
			this.y + 5,
			90 * (this.health / this.maxHealth),
			this.width / 10 - 10
		);
	}
}

export default Enemy;
