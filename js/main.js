(() => {
  console.log('fired');

  const sigils = document.querySelector('#navList'),
        banner = document.querySelector('#houseImages'),
        houseName = document.querySelector('h1'),
        houseDescription = document.querySelector('.house-info');

  const houseInfo = [
  ['Balla logo design', `Currently, this design of the Balla logo is from the Balla Foundation. The new Balla logo was created by applying the characteristic color, typography, pattern, and style of the Alexander Keith's beer brand. This logo is designed using Photoshop, Illustration, and Indesign to create a more systematic and specific brand identity.`],
  ['Logo application development', `I used the logo created to build the brand and applied it to various packages and advertisements. In order to promote this logo and increase corporate profits, promotional materials were produced on the web, printed, and video. First of all, we modeled beer bottles and cans with cinema 4d, edited these modeled beer bottles and cans with Photoshop to produce promotional prints, and used these images to produce videos with affter effets. In addition, I made a web page by using the applied web page and JavaScript css to materialize the brand identity.`]
];

function setHouseData(name, desc) {
  houseName.textContent = `${name}`;
  houseDescription.textContent = desc;
}

function animateBanner(event) {
  if (event.target.className.includes('sigilContainer')) {
    let multiplier = event.target.dataset.offset,

      offsetwidth = 500;

      banner.style.right = `${multiplier * offsetwidth}px`;
    }
}

  function popLightBox(event) {
    if (event.target.className.includes('sigilContainer')) {

      let targetHouse = event.target.className.split(" ")[1];

      setHouseData(houseInfo[event.target.dataset.offset][0],
          houseInfo[event.target.dataset.offset][1]);
        }
}
sigils.addEventListener('click', animateBanner);
sigils.addEventListener('click', popLightBox);
  // sigils.forEach(sigil => sigil.addEventListener("click", animateBanner));

})();
