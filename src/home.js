export default function home() {
	const content = document.querySelector('.content');
	content.innerHTML = `	<div>
   <p>
      <span class="food-intro">texeeeeet for intro of different food :</span> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Necessitatibus, veniam minima, aperiam et omnis deleniti non quae totam
      impedit animi enim harum molestiae, quo eius minus magnam! Iusto,
      soluta laudantium.
      <ul>
         <li>food1</li>
         <li>food2</li>
         <li>food3</li>
      </ul>
   </p>
</div>`;

	const deactive = document.querySelector('.map-deactive');
	deactive.innerHTML = ``;
}
