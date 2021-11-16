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
        console.log(this.state.movies)
        return (
            <div>
                <h1>Popular</h1>

                {this.state.movies.map(movie => (
                    <Card title={movie.title} image={movie.poster_path} release={movie.release_date} description={movie.overview} />
                ))}
            </div>
        );
    }
}

export default Popular;