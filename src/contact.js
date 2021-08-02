export default function contact() {
	const content = document.querySelector('.content');
	content.innerHTML = 'contacasdfssssst';

	const deactive = document.querySelector('.map-deactive');

	deactive.innerHTML = `<!-- * 카카오맵 - 지도퍼가기 -->
	<!-- 1. 지도 노드 -->
	<div id="daumRoughmapContainer1627888454154" class="root_daum_roughmap root_daum_roughmap_landing"></div>`;

	new daum.roughmap.Lander({
		timestamp: '1627888454154',
		key: '26u2a',
		mapWidth: '640',
		mapHeight: '360',
	}).render();
}

// Cant find way to deactivate maps when contact is not active.
// Maps should only pop up when contact-us tab is clicked on.
// maps.innerHTML doesn't recognize script from kakao-map.
