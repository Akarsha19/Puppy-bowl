const main = document.querySelector(`main`);
//get api - change class section

const puppyBowl = async () => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players`);
  const puppyData = await response.json();
  console.log(puppyData);
  const puppyInfo = puppyData.data.players;


  const playerLI = puppyInfo.map((player) => {
    return `<li>${player.name}</li>`
  });

  const ol = document.createElement('ol');

  ol.innerHTML = playerLI.join('');

  const main = document.querySelector(`main`);
  main.replaceChildren(ol);

  main.append(ol);
}

const renderPuppyBowl = async () => {
  await puppyBowl();

  const click = document.querySelectorAll(`li`);

  click.forEach((puppyClick) => {
    puppyClick.addEventListener('click', async (event) => {
      //console.log(`click`)
      const info = event.target.innerText;

      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/players`);
      const detailData = await response.json();
      const puppyDetails = detailData.data.players;

      const playerLI = puppyDetails.map((player) => {

        main.innerHTML = `
        <h2>${player.name}</h2>
        <p>${player.id}</p>
        <p>${player.breed}</p>
        <p>${player.status}</p>

        <button>Back</button>
        `;
        const button = document.querySelector(`button`);
        button.addEventListener(`click`, () => {
          renderPuppyBowl();
        });
      });

    });
  });

}

renderPuppyBowl();