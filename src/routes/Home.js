import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import "./Home.css";


class Home extends React.Component
{

    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {

      const {data : { data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({movies: movies, isLoading: false});
    }


    componentDidMount()
    {
        this.getMovies();
    }

    // 같은 페이지에서 갱신할때만.. 이 상태를 다 주고다녀야 다시갱신을 안할텐데..
    shouldComponentUpdate(nextProps, nextState)
    {
      return this.state !== nextState;
    }

    render()
    {
        const {isLoading, movies } = this.state;

        return (
          <section className="container">
            { isLoading ? (  
               <div className="loader">
                 <span className="loader_text">Loading...</span>
               </div>
            ) : (
              <div className="movies">
              {
                movies.map(movie => (<Movie key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres} />)
              )} 
              </div> 
            )} 
          </section>
          );
    }

}

export default Home;