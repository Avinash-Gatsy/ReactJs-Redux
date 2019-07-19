import React, {Component} from 'react';
import MovieListComponent from './movielist.component';

export default class ItemComponent extends Component{
    constructor(){
        super();
        this.state= {
            showMoviesInfo : false
        }
        this.disableHero = this.disableHero.bind(this);
    }
    disableHero(){
        this.props.disableHeroHandler();
    }
    render(){
        return (
            <div className="box">
                <h1>{this.props.itemData.title}</h1>
                <img src={this.props.itemData.poster} alt={this.props.itemData.poster}></img>
                <h2>{this.props.itemData.firstname}{' '}{this.props.itemData.lastname}</h2>
                <p>
                    City: <span>{this.props.itemData.city}</span><br/>
                    Release Date: <span>{this.props.itemData.releasedate}</span><br/>
                    Ticket Price: <span>{this.props.itemData.ticketprice}</span>
                </p>
                <div style={{display: 'inline-flex'}}>
                    <button onClick={()=>{
                        this.setState({
                            showMoviesInfo: !this.state.showMoviesInfo
                        })
                    }}>Show Movies List</button>
                    <button onClick={this.disableHero}>Disable Hero</button>
                </div>
                {(this.state.showMoviesInfo && this.props.itemData.movieslist.length > 0) ? <hr/> : null}
                {this.state.showMoviesInfo ? <MovieListComponent movies={this.props.itemData.movieslist}/> : null}
            </div>)
    }
}