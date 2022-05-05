import React, { Component } from 'react'
import './MovieHandler.css'

export default class MovieHandler extends Component {
render() {
    console.log(this.props.photos);
    const movies = this.props.photos

    return (
        <div className='flex'>
            {movies.map((photo) => {
                return (
                                <div className='items'>
                                    <div className="image"><img src={photo.Poster} alt="" /></div>
                                    <div className="text">
                                        <h1>{photo.Title}</h1>
                                        <p>{photo.Year}</p>
                                    </div>
                                </div>
                )
                }
            )
            }
        </div>
    )
}
}
