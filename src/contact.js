export default function contact() {
	const content = document.querySelector('.content');
	content.innerHTML = 'contact';

	const map = document.createElement('div');
	map.classList.add('map-active');
	content.append(map);
}
