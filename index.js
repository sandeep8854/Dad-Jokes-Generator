const btnE1 = document.getElementById("btn");
const jokeEle = document.getElementById("joke");

const apiKey = "cXOIOuxy6wAVqYqhHn0xMCDbcsfSVGlM0WgVQpw2";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEle.innerText = "Updating...";
    btnE1.disabled = true;
    btnE1.innerText = "Loding...";
    const responce = await fetch(apiURL, options);
    const data = await responce.json();
    btnE1.disabled = false;
    btnE1.innerText = "Tell me joke...";
    jokeEle.innerText = data[0].joke;
  } catch (error) {
    jokeEle.innerText = "An error happened, try again later";
    btnE1.disabled = false;
    btnE1.innerText = "Tell me joke...";
    console.log(error);
  }
}

btnE1.addEventListener("click", getJoke);
