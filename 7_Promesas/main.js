const request = require('request');

const getAsteroides = (year, month, day) => {
    const URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&end_date=${year}-${month}-${day}&api_key=VFI03yxvT6ZwxPmssiuXJXKdXjLxwWrTewPXjWJ7`;
    
    return new Promise((resolve, reject) => {
        request(URL, (error, response, body) => {
            if (!error) {
                const json = JSON.parse(body);
                switch (response.statusCode) {
                    case 200:
                        const asteroids = json.near_earth_objects[`${year}-${month}-${day}`];
                        const resultado = asteroids.map(value => {
                            return {
                                [value.id]: {
                                    name: value.name,
                                    dangerous: value.is_potentially_hazardous_asteroid
                                }
                              };
                        });
                        
                        resolve(resultado);
                        
                        break;
                    
                    case 400:
                        reject(json.error_message);
                        break;

                    case 401:
                        reject(json.error_message);
                        break;
                
                    default:
                        reject(json.error_message);
                }
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
    
}

getAsteroides(2020, '03', '02') //lo pasamos como string ya que como numero quita los ceros de la izquierda
    .then((respuesta) => {console.log(respuesta);})
    .catch((error) => {console.log(error);});