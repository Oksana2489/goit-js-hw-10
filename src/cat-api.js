const API_key = 'live_ quhXgo8hYOvzHwt9xGRV9NRNMaWB2h yJsjR5WRa5R0yAolibd9QfhjSTEKT4 rHr6';

function fetchBreeds() {
    return fetch ('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json());
}

function fetchCatByBreed(breedId){
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}&api_key=${API_key}`)
        .then(data => data.json());
}
export { fetchBreeds, fetchCatByBreed };