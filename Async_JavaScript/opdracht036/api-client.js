//  Opdracht API client
const getData = async (data) => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e8a86bf6432d350ce26bacdc92cf7c9e", {
            method: "GET",
            });
        const data = await response.json();
        return data;
      } catch(err) {
        // catches errors both in fetch and response.json
        console.log(err);
    }
};

// Select genres
const genreSelection = (data) => {
    const selectGenre = data.genres.map((movie) => {
        return movie.name;
    }); 
    return selectGenre;
};

// Add UL to DOM
const makeUL = () => {
    const unorderedList = document.createElement("ul");
    const h1 = document.createElement("h2")
    const text = document.createTextNode("Dit zijn alle genres:")
    unorderedList.setAttribute("class", "movie-genres");
    h1.appendChild(text);
    document.body.appendChild(unorderedList);
    unorderedList.appendChild(h1);
};

//Add Li to UL and add to DOM
const makeLi = (data) => {
    const genresArray = data.forEach(addToList => {
        const li = document.createElement("li");
        const text = "genre naam: "
        const genreText = text.concat(addToList);
        const defText = document.createTextNode(genreText);
        li.appendChild(defText);
        const ul = document.querySelector("ul");
        ul.appendChild(li);
    }); 
}

// Add Id to Genre and add to DOM
const addId = (data) => {
    const selectId = data.genres.map((i) => i.id);
    const li = document.querySelectorAll("li");
    for (i = 0; i <= li.length;) {
        const setId = selectId.forEach((id) => {
            const text = ", id: "
            const idText = text.concat(id);
            const defText = document.createTextNode(idText);
            li[i].appendChild(defText);
            console.log();
            return i++;
        })
    }
}

//Alle functies
const storeData = async (data) => {
    const dataStore = await getData(data);
    console.log("Dit is de array:", dataStore);
    const selectGenres = genreSelection(dataStore);
    console.log("Dit zijn alle genres ", selectGenres);
    const addUL = makeUL();
    const addLi = makeLi(selectGenres);
    const makeId = addId(dataStore);
};

// Show me!
storeData(); 
