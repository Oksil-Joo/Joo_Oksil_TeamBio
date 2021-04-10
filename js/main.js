((){
console.log("fired");

const teams = document.querySelectorAll('.teamContainer'),
      banner = document.querySelector('teamImages');

const teaminfo = [
  ['design', `Balla logo design by oksil Joo`],
  ['develop', `Logo application development by oksil Joo`]
];

function animateBanner(event) {
  let multiplier = this.dataset.offset,
      offset = 800;

  banner.style.right = `${multiplier * offset}px`;
}
  teams.forEach(team => team.addEventListener("click", animateBanner));
})();
