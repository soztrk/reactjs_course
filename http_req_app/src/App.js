import React,{useState,useEffect,useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from "./components/AddMovie"

function App() {

  const [movies,setMovies] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(null)

  /*
  const fetchMoviesHandler = () => {
    setIsLoading(true)
    fetch('https://swapi.dev/api/films/').then(response=>{
      return response.json()
    }).then(data=>{
      const transformedData = data.results.map(val=>{
        return {
          id:val.episode_id,
          title:val.title,
          openingText:val.opening_crawl,
          releaseDate:val.release_date
        }
      })
      setMovies(transformedData)
    }).catch(error=>{
      console.log(error)
    })
  }
  */

  const awaitMoiveHandler = useCallback( async () => {

      setIsLoading(true)
      setError(null)
      try{
        const response = await fetch('https://react-http-52c30-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
  
        if(!response.ok){
          throw new Error("Something went wrong!")
        }
  
        const data = await response.json()
        let movies = []  
        
        for(const key in data){
          movies.push({
            id:key,
            title:data[key].title,
            openingText:data[key].openingText,
            releaseDate:data[key].releaseDate
          })
        }
        /*
        const transformedData = data.results.map(val=>{
          return {
            id:val.episode_id,
            title:val.title,
            openingText:val.opening_crawl,
            releaseDate:val.release_date
          }
        })
        */
        setMovies(movies)
      } catch(error){
        setError(error.message)
      }
      setIsLoading(false)

    },[])

    const addMovieHandler = async (movie) => {
      setIsLoading(true)
      setError(null)
      try{
        const response = await fetch('https://react-http-52c30-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
        {
          method:"POST",
          body:JSON.stringify(movie),
          headers:{
            "Content-Type":"application/json"
          }
        })
  
        if(!response.ok){
          throw new Error("Something went wrong!")
        }

        const data = await response.json()
        if(data) awaitMoiveHandler(data)
       
      } catch(error){
        setError(error.message)
      }
      setIsLoading(false)
    }

  useEffect(()=>{
    awaitMoiveHandler()
  },[awaitMoiveHandler])

  let content = <p>Found no movies.</p>

  if(isLoading){
    content = <p>Loading...</p>
  }
  else if(error){
    content = <p>{error}</p>
  }
  else if(movies.length > 0){
    content = <MoviesList movies={movies} />
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={awaitMoiveHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
