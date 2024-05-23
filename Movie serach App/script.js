 const searchForm = document.querySelector('form')
 const movieContainer = document.querySelector('.movie-container')
 const inputBox = document.querySelector('.inputBox');


 // function to fetch movie data using omdb API

 const getMovieinfo = async(movie)=>{
    const myApiKey = '9d877c66';
    const url = `http://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();
    
    showMovieData(data)
 } 

 // showmovie Data Function show data on screen
 
 const showMovieData = (data)=>{

    movieContainer.innerHTML ="";

     // array desructring assigment to extract properties from data object
const {Title,imdbRating,Genre,Released,Runtime,Actors,Plot,Poster} = data;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info');

    movieElement.innerHTML = `<h2>${Title}</h2>    
                    <p><strong>Rating: &#11088; </strong>${imdbRating}</p>`;

    const movieGenereElement = document.createElement('div');

    movieGenereElement.classList.add('movie-genre');
    Genre.split(",").forEach(element =>{
        const p = document.createElement('p');
        p.innerText = element;
        movieGenereElement.appendChild(p);
    })

    movieElement.appendChild(movieGenereElement)

    movieElement.innerHTML += `<p><strong>Released Date: </strong>${Released}</p>
    <p><strong>Duration </strong>${Runtime}</p>
    <p><strong>Cast:</strong>${Actors}</p>
    <p><strong>Plot: </strong>${Plot}</p> `

    // Creating a div for movie poster
    const moviePosterElement = document.createElement('div');
    moviePosterElement.classList.add('movie-poster');
    moviePosterElement.innerHTML = `<img src="${Poster}"/>`;
    movieContainer.appendChild(moviePosterElement);
                              
      movieContainer.appendChild(movieElement)
 }

 //Adding event lister to search form
 searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const movieName = inputBox.value.trim();
    if(movieName !== '')
        {
            getMovieinfo(movieName)
        }
 })

