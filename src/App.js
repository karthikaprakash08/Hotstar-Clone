import { Route, Routes } from 'react-router-dom';
import './App.css';
import BGVideo from './Components/BGVideo';
import HomeContainer from './Components/HomeContainer';
import SideBar from './Components/SideBar';
import SearchCointainer from './Components/SearchCointainer';
import MySpaceCointainer from './Components/MySpaceCointainer';
import TvCointainer from './Components/TvCointainer';
import MovieContainer from './Components/MovieContainer';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/*' element={<HomeContainer />} />
        <Route path='/home' index element={<HomeContainer></HomeContainer>}></Route>
        <Route path='/search' index element={<SearchCointainer></SearchCointainer>}></Route>
        <Route path='/my-space' index element={<MySpaceCointainer></MySpaceCointainer>}></Route>
        <Route path='/tv' index element={<TvCointainer></TvCointainer>}></Route>
        <Route path='/movies' index element={<MovieContainer></MovieContainer>}></Route>
      </Routes>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
