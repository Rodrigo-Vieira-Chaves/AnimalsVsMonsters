import renderRanking from './requests/ranking.js';

$(document).ready(() => {
	$('#play_game').click(() => {
		window.location = '/gameplay';
	});

	// When the user clicks on the button, render the ranking modal
	$('.red__button').click(() => {
		renderRanking();
	});

	$('.sound__button').click(() => {
		renderSoundMenu();
	});
});

function renderSoundMenu() {
	$('.modal').html(
		`<div class="modal__content">
		 		<div class="sound__menu">
				 <div class="volume_menu">
				 		<p class="volumeInfo_container">20%</p>
				 		<div class="volumeSlider_container">
						 <button class="sound_button_modal_empty"></button>
						 <input type="range" min="0" max="100" value="20" step="1" class="volumeSlider"/>
						 <button class="sound_button_modal_full"></button>
						</div>
					</div>
		 			<button class="close_modal">FECHAR</button>
		 		</div>
		 </div>`
	);

	$('.close_modal').click(() => {
		$('.modal')[0].style.display = 'none';
	});

	$('.modal')[0].style.display = 'block';

	$('.volumeSlider').on('input', function (e) {
		$('.volumeInfo_container').text($('.volumeSlider').val() + '%');
	});

	$('.sound_button_modal_empty').click(() => {
		$('.volumeSlider').val(0);
		$('.volumeInfo_container').text($('.volumeSlider').val() + '%');
	});

	$('.sound_button_modal_full').click(() => {
		$('.volumeSlider').val(100);
		$('.volumeInfo_container').text($('.volumeSlider').val() + '%');
	});

	// When the user clicks anywhere outside of the modal, closes it
	$(window).click((event) => {
		if (
			event.originalEvent.target === $('.modal')[0] ||
			event.originalEvent.target === $('.modal__content')[0]
		) {
			$('.modal')[0].style.display = 'none';
		}
	});
}
