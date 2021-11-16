import React, { Component } from 'react';

import Card from '../Components/Card';

class PopularBattle extends Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            currentBattle: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
            .then(result => result.json())
            .then(result => {
                this.setState({
                    movies: result.results,
                    currentBattle: 0,
                    favorites: []
                })
            })
    }

    handleClick(id) {
        this.setState({ currentBattle: this.state.currentBattle += 2 })

        let favoriteArray = localStorage.getItem("favorite")

        if (!favoriteArray) {
            favoriteArray = localStorage.setItem("favorite", JSON.stringify([id]))
        } else {
            favoriteArray = JSON.parse(favoriteArray)
            favoriteArray = [...favoriteArray, id]
            favoriteArray = localStorage.setItem("favorite", JSON.stringify(favoriteArray))
        }
    }

    render() {
        const { movies, currentBattle } = this.state
        console.log(localStorage)
        return (
            <div>
                <span>
                    <h1>Popular Battle </h1>
                </span>
                <div className="d-flex flex-wrap justify-content-center session">
                    {movies.map((movie, index) => {
                        if (index === currentBattle || index === currentBattle + 1) {
                            return <div onClick={() => this.handleClick(movie.id)}>
                                <Card
                                    title={movie.title}
                                    release={movie.release_date}
                                    description={movie.overview}
                                    image={`https://image.tmdb.org/t/p/w300/` + movie.poster_path}
                                />
                            </div>
                        }
                    })}
                </div>
                {currentBattle === 20 &&
                    <div className="sessionEnd">
                        <h2>Vous avez parcouru tous les films !</h2>
                    </div>
                }

            </div>
        );
    }
}


export default PopularBattle;