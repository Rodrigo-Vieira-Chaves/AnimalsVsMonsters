import Game from '../../game_components/Game.js';
import assetManager from '../../game_components/AssetManager.js';
import renderConfigurationModal from '../configuration_modal/configuration_modal.js';

// const apiURL = 'https://data.dudeful.com';
const apiURL = 'http://localhost:5000';

$(document).ready(() => {
	// Prevent user from unloading the page by accident
	window.onbeforeunload = (e) => {
		const score = $('#score_value').html();

		if (score >= 100) {
			e.preventDefault();
			// In Mozilla Firefox prompt will always be shown
			// Chrome requires returnValue to be set
			e.returnValue = '';
		}
	};

	$('.cat_tower').on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData('text', 'cat_tower_level_1');
	});

	$('.pikachu_tower').on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData('text', 'pikachu_tower_level_1');
	});

	$('.rabbit_tower').on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData('text', 'rabbit_tower_level_1');
	});

	$('#canvas').on('dragover', function (event) {
		event.originalEvent.preventDefault();
	});

	$.get(`${apiURL}/load-assets`, async (assetLoaderInstance) => {
		await assetManager.prepareAssets(assetLoaderInstance);

		const game = new Game();
		game.start();

		$('#canvas').click(() => {
			game.evolveTower();
		});

		$('#configuration_button').click(() => {
			game.stopAnimation();
			renderConfigurationModal(game);
		});

		//refazer tooltip sem jquery ui
		// createTooltip('.pikachu_tower', 750, 75, Math.floor(10000 / 170));
		// createTooltip('.rabbit_tower', 500, 100, Math.floor(10000 / 120));
		// createTooltip('.cat_tower', 500, 50, Math.floor(10000 / 200));
	});
});

function createTooltip(element, live, strength, speed) {
	const lifeSymbol = assetManager.getImage('live_icon_tooltip');
	const strenghtSymbol = assetManager.getImage('strength_icon_tooltip');
	const speedSymbol = assetManager.getImage('speed_icon_tooltip');

	$(element).tooltip({
		classes: {
			'ui-tooltip': 'tooltip',
			'ui-tooltip-content': 'tooltip',
		},
		content: `
			<div class="tooltip">
				<div>
					${lifeSymbol.outerHTML}
					<label id="live_value_">${live}</label>
				</div>
				<div>
					${strenghtSymbol.outerHTML}
					<label id='strength_value_'>${strength}</label>
				</div>
				<div>
					${speedSymbol.outerHTML}
					<label id="live_value_">${speed}</label>
				</div>
			</div>`,
	});
}
