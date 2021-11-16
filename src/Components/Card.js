import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, image, release, description } = this.props
        return (
            <div className="card">
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>{release}</p>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;