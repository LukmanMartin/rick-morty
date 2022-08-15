
const URL = "https://rickandmortyapi.com/api/character/";
let previousCharacters = ""


window.onload = () => {
  init();
}

const init = async () => {
  
  const characters = await getCharacters();
  mappedCharacters(characters);
}


const getCharacters = async () => {

  try {
   
    const result = await fetch(URL);
    const resultToJson = await result.json();
    return resultToJson;
  } catch (error) {
    printError(error);
  }

}


const mappedCharacters = async (characters) => {

  previousCharacters = characters.info.next;
  
  characters.results.map((character) => {
   
    return printCharacter({
      name: character.name,
      image: character.image,
      origin: character.origin.name,
      species: character.species,
      gender: character.gender,
    });
  })
}


const printCharacter = async (character) => {

  const container = document.querySelector("#characters");
 
  container.innerHTML += `
    <li>
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>${character.origin}</p>
      <p>${character.species}</p>
      <p>${character.gender}
    </li>
  `
}

