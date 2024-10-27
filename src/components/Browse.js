
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
 
  return (
    
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      
    {
      /**
       * MainContainer
       *  -VideoBackground
       *  -VideoTitle and description
       * SecondaryContainer
       *  -MoviesList *n
       *    cards * n
       */
    }
    </div>
  )
}

export default Browse