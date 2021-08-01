export default function contact() {
	const content = document.querySelector('.content');
	content.innerHTML = 'contact';

	const map = document.createElement('div');
	map.classList.add('map-active');
	content.append(map);
}

// Cant find way to deactivate maps when contact is not active.
// Maps should only pop up when contact-us tab is clicked on.
// maps.innerHTML doesn't recognize script from kakao-map.
