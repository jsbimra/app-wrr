class MovieAPI {

    static getMoviesBySearch(keyword) {
        const omdbAPIKEY = 'e0432997';
        if (keyword) {
            const fetchData = fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${omdbAPIKEY}`)
                .then(resp => resp.json())
                .then(data => {
                    // console.log(data); 
                   return data.Search ? data.Search: ['no data in response'];
                })
                .catch(err => new Error(err));
            return fetchData
        }
    }
}

export default MovieAPI;