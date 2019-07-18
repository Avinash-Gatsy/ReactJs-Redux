import React, {Component} from 'react';

export default class MovieListComponent extends Component{
    render(){
        console.dir(this.props.movies);
        return this.props.movies.map((val,i)=>{
            return <div className="poster-container" key={i}><span>{val.title}</span>
                    <img src={val.poster} alt={val.poster}></img>
                </div>
        })
    }
}