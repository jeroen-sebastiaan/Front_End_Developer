//  Opdracht API client
async function getData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        var data = await response.json();
        console.log(data);
      } catch(err) {
        // catches errors both in fetch and response.json
        console.log(err);
    }
};
