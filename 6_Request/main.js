const request = require('request');
const {Banda} = require("./Banda");

const obtenerBanda = (nombreBanda) => {
    request(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${nombreBanda}`, (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            if (response.statusCode == 200) {
                const json = JSON.parse(body);
                if (json.artists != null) {
                    const {strArtist: artista, strWebsite: webSite, intFormedYear: anio, strGenre: genero} = json.artists[0];
                    const banda = new Banda(artista, webSite, anio, genero);
                    console.log(banda);
                } else {
                    console.log(`No Encontré A ${nombreBanda}`);
                }
            }
        }
    });
}

obtenerBanda('nirvana');
obtenerBanda('Los Temerarios');