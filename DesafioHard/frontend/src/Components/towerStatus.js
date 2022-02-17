const explosionsArray = [
  "../assets/explosions/Explosion_A.png",
  "../assets/explosions/Explosion_B.png",
  "../assets/explosions/Explosion_C.png",
  "../assets/explosions/Explosion_D.png",
  "../assets/explosions/Explosion_E.png",
  "../assets/explosions/Explosion_F.png",
  "../assets/explosions/Explosion_G.png",
  "../assets/explosions/Explosion_H.png",
];

export default {
  cat_tower_base: {
    price: 50,
    image: "../assets/towers/cat_tower_base.png",
  },
  cat_tower_level_1: {
    level: 1,
    nextLevel: "cat_tower_level_2",
    health: 500,
    damage: 50,
    price: 100,
    attackSpeed: 200,
    image: "../assets/towers/cat_tower_level_1.png",
    projectile: "../assets/projectiles/wool_ball.png",
    explosions: explosionsArray,
  },
  cat_tower_level_2: {
    level: 2,
    nextLevel: "cat_tower_level_3",
    health: 750,
    damage: 100,
    price: 200,
    attackSpeed: 150,
    image: "../assets/towers/cat_tower_level_2.png",
    projectile: "../assets/projectiles/wool_ball.png",
    explosions: explosionsArray,
  },
  cat_tower_level_3: {
    level: 3,
    health: 1000,
    damage: 200,
    price: 300,
    attackSpeed: 100,
    image: "../assets/towers/cat_tower_level_3.png",
    projectile: "../assets/projectiles/lightning.svg",
    explosions: explosionsArray,
  },
  blue_rabbit_tower_base: {
    price: 50,
    image: "../assets/towers/blue_rabbit_tower_base.png",
  },
  blue_rabbit_tower_level_1: {
    level: 1,
    nextLevel: "blue_rabbit_tower_level_2",
    health: 500,
    damage: 50,
    attackSpeed: 100,
    price: 150,
    image: "../assets/towers/blue_rabbit_tower_level_1.png",
    projectile: "../assets/projectiles/carrot.png",
    explosions: explosionsArray,
  },
  blue_rabbit_tower_level_2: {
    level: 2,
    nextLevel: "blue_rabbit_tower_level_3",
    health: 750,
    damage: 100,
    price: 250,
    attackSpeed: 50,
    image: "../assets/towers/blue_rabbit_tower_level_2.png",
    projectile: "../assets/projectiles/carrot.png",
    explosions: explosionsArray,
  },
  blue_rabbit_tower_level_3: {
    level: 3,
    health: 1000,
    damage: 200,
    price: 350,
    attackSpeed: 30,
    image: "../assets/towers/blue_rabbit_tower_level_3.png",
    projectile: "../assets/projectiles/lightning.svg",
    explosions: explosionsArray,
  },
  red_rabbit_tower_base: {
    price: 50,
    image: "../assets/towers/red_rabbit_tower_base.png",
  },
  red_rabbit_tower_level_1: {
    level: 1,
    nextLevel: "red_rabbit_tower_level_2",
    health: 500,
    damage: 50,
    price: 200,
    attackSpeed: 150,
    image: "../assets/towers/red_rabbit_tower_level_1.png",
    projectile: "../assets/projectiles/carrot.png",
    explosions: explosionsArray,
  },
  red_rabbit_tower_level_2: {
    level: 2,
    nextLevel: "red_rabbit_tower_level_3",
    health: 750,
    damage: 100,
    price: 300,
    attackSpeed: 100,
    image: "../assets/towers/red_rabbit_tower_level_2.png",
    projectile: "../assets/projectiles/carrot.png",
    explosions: explosionsArray,
  },
  red_rabbit_tower_level_3: {
    level: 3,
    health: 1000,
    damage: 200,
    price: 400,
    attackSpeed: 50,
    image: "../assets/towers/red_rabbit_tower_level_3.png",
    projectile: "../assets/projectiles/lightning.svg",
    explosions: explosionsArray,
  },
};
