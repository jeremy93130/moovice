import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, image, release, description } = this.props
        return (
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Card;