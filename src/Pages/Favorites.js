import React, { Component } from 'react';

import Card from '../Components/Card';

class Favorites extends Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            favIDs: this.getStorage()
        }

        this.getStorage = this.getStorage.bind(this)
    }

    componentDidMount() {
        if (this.state.favIDs) {
            this.state.favIDs.forEach(favID => (
                this.getMovie(favID)
            ))
        }
    }

    getMovie(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9958597c07ec90e02675c97691bf4506`)
            .then(res => res.json())
            .then(res =>
                this.setState({ movies: [res, ...this.state.movies] })
            )
    }

    getStorage() {

        let favoriteArray = localStorage.getItem("favorite")

        return JSON.parse(favoriteArray)
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
                {this.state.movies.map(movie => (
                    <Card
                        title={movie.title}
                        release={movie.release_date}
                        description={movie.overview}
                        image={movie.poster_path}
                    />
                ))}

                {!this.state.favIDs &&
                    <div className="my-5 text-center">
                        <h2>No favorites :(</h2>
                    </div>
                }
            </div >
        );
    }
}

export default Favorites;