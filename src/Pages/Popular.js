import React, { Component } from 'react';

import Card from '../Components/Card';

class Popular extends Component {
    constructor() {
        super()


        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
            .then(result => result.json())
            .then(result => {
                this.setState({
                    movies: result.results
                })
            })
    }


    render() {
        return (
            <>
                <h1>Popular</h1>
                <div className="popular">
                    {this.state.movies.map(movie => (
                        <div className="popularity">
                            <Card
                             title={movie.title} 
                             image={`https://image.tmdb.org/t/p/w300/` + movie.poster_path} 
                             release={movie.release_date} 
                             description={movie.overview}
                            />
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Popular;