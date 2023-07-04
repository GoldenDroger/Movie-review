import './App.css';
import Header from "./Header"
import Pic from "./Movie"
import movies from './movie.json'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='part1'>
        {
        movies.map((ele)=>{
          return(  
            <Pic  
            title={ele.Title} 
            year={ele.Year} 
            image={ele.Poster} 
            />
            )
          
          })

        }
        
      </div>

    </div>
  );
}

export default App;
