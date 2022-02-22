import Game from '../Components/Game.js';
import assetManager from '../Components/AssetManager.js';
import * as saveScore from '../requests/save-score.js';
import renderRanking from '../requests/ranking.js';

$(document).ready(() => {
	// Prevent user from reloading page by accident
	window.addEventListener('beforeunload', function (e) {
		const score = $('#score_value').html();

		if (score >= 100) {
			e.preventDefault();
			// In Mozilla Firefox prompt will always be shown
			// Chrome requires returnValue to be set
			e.returnValue = '';
		}
	});

	// When the user clicks anywhere outside of the modal, closes it
	$(window).click((event) => {
		if (event.target === $('.save_score_button')[0]) {
			saveScore.saveScore();
		}
		if (event.target === $('.close_modal')[0]) {
			$('.modal')[0].style.display = 'none';
			$('#level_value').html('');
			game.startAnimation();
		}
	});

	$('.save_ranking').click(() => {
		const score = $('#score_value').html();
		if (score >= 100) {
			game.stopAnimation();
			saveScore.renderNodes();
			$('#level_value').html('');
		} else {
			alert('Pontuação mínima para registrar ranking: 100 pontos');
		}
	});

	$('.restart_level').click(() => {
		window.location.reload();
	});

	$('.cat_tower').on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData('text', 'cat_tower_level_1');
	});

	$('.blue_rabbit_tower').on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData(
			'text',
			'blue_rabbit_tower_level_1'
		);
	});

	$('.red_rabbit_tower').on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData(
			'text',
			'red_rabbit_tower_level_1'
		);
	});

	$('#canvas1').on('dragover', function (event) {
		event.originalEvent.preventDefault();
	});

	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');

	// const apiURL = 'http://edtech.dudeful.com:3004';
	// const apiURL = 'http://localhost:3004';
	const port = 3004;

	$.get(
		`http://${location.host}:${port}/load-assets`,
		async (assetLoaderInstance) => {
			await assetManager.prepareAssets(assetLoaderInstance);

			const game = new Game();
			game.start();

			$('#canvas1').click(() => {
				game.evolveTower();
			});
		}
	);

	createTooltip('.blue_rabbit_tower', 750, 75, Math.floor(10000 / 170));
	createTooltip('.red_rabbit_tower', 500, 100, Math.floor(10000 / 120));
	createTooltip('.cat_tower', 500, 50, Math.floor(10000 / 200));
});

function createTooltip(element, live, strenght, speed) {
	$(element).tooltip({
		classes: {
			'ui-tooltip': 'tooltip1',
			'ui-tooltip-content': 'tooltip1',
		},
		content: `
			<div class="tooltip1">
				<div>
					<img src="../assets/images/live_icon_tooltip.png" alt="Live">
					<label id="live_value_">${live}</label>
				</div>
				<div>
					<img src="../assets/images/strenght_icon_tooltip.png" alt="Força">
					<label id='strength_value_'>${strenght}</label>
				</div>
				<div>
					<img src="../assets/images/speed_icon_tooltip.png" alt="spped">
					<label id="live_value_">${speed}</label>
				</div>
			</div>`,
	});
}
