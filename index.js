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

  const ol = document.querySelector('ol');
  ol.innerHTML = playerLI.join('');
}

puppyBowl();