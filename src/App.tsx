import './styles/app.scss';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { searchMovieSchema } from './utils/schema';
import { NavBar } from './components/NavBar';
import { ContentMovie } from './components/ContentMovie';
import { useState } from 'react';
import { getMovieDetails } from './services/movie.service';
import toast, { Toaster } from 'react-hot-toast';
import { MovieDetails } from './utils/types';
import { ContentMovieSkeleton } from './components/Skeletons';
import { EmptyState } from './components/EmptyState';
import imageEmptyMovie from './assets/images/movie_search.png';
import errorImage from './assets/images/noresults.png';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieData, setMovieData] = useState<MovieDetails | null>();

  const { register, handleSubmit, reset } = useForm<z.infer<typeof searchMovieSchema>>({
    resolver: zodResolver(searchMovieSchema),
    defaultValues: {
      searchTerm: ""
    },
  })

  function onSubmit(values: z.infer<typeof searchMovieSchema>) {
    if(values.searchTerm.length){
      setLoading(true);
      getMovieDetails(values.searchTerm).then((response) => {
        setMovieData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Something went wrong, try again. 😵‍💫");
        setError(true);
        setLoading(false);
      })
    }
  }

  function handleResetSearch() {
    reset();
    setMovieData(null);
  }


  return (
    <main className='container-movie'>
      <NavBar />
      <div className="content-movie">
        <div className='section-title'>
          <h1>Discover Your Favorite Movie</h1>
          <p>Explore and uncover comprehensive details about any movie you desire. <br/> Embark on a cinematic journey with us!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            {...register("searchTerm")}
            type="text" 
            className='search-input'
            placeholder='Write the name of the movie'
          />
          <div className='form-buttons'>
            <button 
              type="submit" 
              disabled={loading}
            >
              Search
            </button>
            <button type="button" onClick={handleResetSearch}>Reset</button>
          </div>
        </form>

        {!loading && !error && movieData && <ContentMovie movieData={movieData} />}
        {!loading && !error && !movieData && 
          <EmptyState  
            imageEmpty={imageEmptyMovie}
            title='Search for your film'
            description='Search for the name of your film in the search field above and get information about it.'
          />
        }

        {loading && (
          <ContentMovieSkeleton />
        )}

        {error && (
          <EmptyState  
            imageEmpty={errorImage}
            title='Ops! Something is wrong'
            description='Try search the movie again'
          >
            <button className='retry-button' onClick={() => location.reload()}>Try again</button>
          </EmptyState>
        )}
      
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </main>
  );
}

export default App;
