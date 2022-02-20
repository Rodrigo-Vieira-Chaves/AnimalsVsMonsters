export default {
	cat_tower_base: {
		price: 50,
	},
	cat_tower_level_1: {
		level: 1,
		nextLevel: 'cat_tower_level_2',
		health: 500,
		damage: 50,
		price: 100,
		attackSpeed: 200,
		projectile: 'wool_ball',
	},
	cat_tower_level_2: {
		level: 2,
		nextLevel: 'cat_tower_level_3',
		health: 750,
		damage: 100,
		price: 200,
		attackSpeed: 170,
		projectile: 'wool_ball',
	},
	cat_tower_level_3: {
		level: 3,
		nextLevel: 'fernando_torres',
		health: 1000,
		damage: 200,
		price: 300,
		attackSpeed: 120,
		projectile: 'lightning',
	},
	blue_rabbit_tower_base: {
		price: 50,
	},
	blue_rabbit_tower_level_1: {
		level: 1,
		nextLevel: 'blue_rabbit_tower_level_2',
		health: 750,
		damage: 75,
		attackSpeed: 170,
		price: 200,
		projectile: 'carrot',
	},
	blue_rabbit_tower_level_2: {
		level: 2,
		nextLevel: 'blue_rabbit_tower_level_3',
		health: 1000,
		damage: 150,
		price: 400,
		attackSpeed: 120,
		projectile: 'carrot',
	},
	blue_rabbit_tower_level_3: {
		level: 3,
		nextLevel: 'fernando_torres',
		health: 1500,
		damage: 300,
		price: 800,
		attackSpeed: 80,
		projectile: 'lightning',
	},
	red_rabbit_tower_base: {
		price: 50,
	},
	red_rabbit_tower_level_1: {
		level: 1,
		nextLevel: 'red_rabbit_tower_level_2',
		health: 1000,
		damage: 150,
		price: 500,
		attackSpeed: 120,
		projectile: 'carrot',
	},
	red_rabbit_tower_level_2: {
		level: 2,
		nextLevel: 'red_rabbit_tower_level_3',
		health: 1500,
		damage: 300,
		price: 1000,
		attackSpeed: 90,
		projectile: 'carrot',
	},
	red_rabbit_tower_level_3: {
		level: 3,
		nextLevel: 'fernando_torres',
		health: 2000,
		damage: 450,
		price: 1500,
		attackSpeed: 60,
		projectile: 'lightning',
	},
	fernando_torres: {
		level: 4,
		health: 100000,
		damage: 100000,
		price: 3000,
		attackSpeed: 50,
		projectile: 'football_ball',
	},
};
