//65130500056 Pearmai Wannasiri

class Movies {
  
  constructor() {
    this.movies = []
  }

  getAllMovies(){
    return this.movies
  }

  addMovie(title, director, year, genre){
    if(!title || !director ||!year || !genre || this.movies.find( (titlemovie) => 
    { return titlemovie.title.toLowerCase() === title.toLowerCase() && titlemovie.director.toLowerCase() === director.toLowerCase() } )){
      return undefined 
    } 
    else {
    this.movies.push({
      title : title,
      director : director,
      year : year,
      genre : genre
    })
    return {title, director, year, genre}
    }
  }

  updateMovie(title, updatedDetails){
    if(this.movies.find( (titlemovie) => 
    { return titlemovie.title.toLowerCase() === title.toLowerCase()} )) {
      const movieFind = this.movies.findIndex((item) => { return item.title.toLowerCase() === title.toLowerCase()})
      this.movies.splice(movieFind,1,{...this.movies[movieFind],...updatedDetails})
      return this.movies[movieFind]
    } 
    else {
      return undefined
      }
    }

  deleteMovieByTitle(title){
    if(this.movies.find( (titlemovie) => 
    { return titlemovie.title.toLowerCase() === title.toLowerCase()} )) {
      const movieFind = this.movies.findIndex((item) => { return item.title.toLowerCase() === title.toLowerCase()})
      //this.movies.splice(movieFind,1)
      return `a movie object ${this.movies.splice(movieFind,1)[0]} is deleted`
    } 
    else {
      return 'no movie deleted'
      }
    }
}

//JSON.stringify({ title: 1, description: 2 })
module.exports = Movies
