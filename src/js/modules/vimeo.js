var vimeoPlayers = document.querySelectorAll('.is-provider-vimeo');
let soundIcon = '<svg xmlns="http://www.w3.org/2000/svg" version="1.0"  width="500" height="500" viewBox="0 0 75 75">\n' +
	'<path class="path-speaker" d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"\n' +
	'style="stroke:#fff;stroke-width:5;stroke-linejoin:round;fill:#fff;"\n' +
	'/>\n' +
	'<path class="path-wave" d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#fff;stroke-width:5;stroke-linecap:round"/>\n' +
	'</svg>';
for (var vimeoPlayer of vimeoPlayers.values()) {
	console.log('vimeoPlayer: ', vimeoPlayer);
	var iframe = vimeoPlayer.querySelector('iframe');
	var player = new Vimeo.Player(iframe, {loop: false});

	var muteButton = document.createElement('button');
	muteButton.className = 'btn btn-vimeo-sound btn-muted';
	muteButton.innerHTML = soundIcon;

	muteButton.addEventListener('click', function(event) {
		player.getVolume().then(function(volume) {
			muteButton.className = (volume > 0) ? 'btn btn-vimeo-sound btn-muted' : 'btn btn-vimeo-sound';
			player.setVolume(volume > 0 ? 0 : 1);
		}).catch(function(error) {
			console.log('could not toggle volume');
		});
	});

	iframe.parentElement.appendChild(muteButton);
};
