

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import GPTSearch from './GPTSearch.js';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptView=useSelector(store=>store.gpt.showGpt);
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
 
  return (
    
    <div>
      <Header></Header>
      {
        showGptView ?(<GPTSearch></GPTSearch>):(<><MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer></>)
      }
    </div>
  )
}

export default Browse