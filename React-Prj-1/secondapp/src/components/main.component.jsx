import React, {Component} from 'react';
import HeadingComponent from './heading.component';
import ListComponent from './list.component';
import '../styles/appstyle.css';

const heroes = [{
    "sl": 1,
    "title": "Batman",
    "gender": "male",
    "firstname": "Bruce",
    "lastname": "Wayne",
    "city": "Gotham",
    "ticketprice": 123.45,
    "releasedate": "1/26/2018",
    "poster": "images/batman.jpg",
    "movieslist": [
        {
            "title": "Batman Begins",
            "poster": "images/bat1_tn.jpg"
        }, {
            "title": "Dark Knight",
            "poster": "images/bat2_tn.jpg"
        }, {
            "title": "Dark Knight Raises",
            "poster": "images/bat3_tn.jpg"
        }
    ]
},
{
    "sl": 2,
    "title": "Superman",
    "gender": "male",
    "firstname": "Clark",
    "lastname": "Kent",
    "city": "Metropolis",
    "ticketprice": 178.67,
    "releasedate": "1/27/2018",
    "poster": "images/superman.jpg",
    "movieslist": [
        {
            "title": "Superman The Movie",
            "poster": "images/super1_tn.jpg"
        }, {
            "title": "Superman Returns",
            "poster": "images/super2_tn.jpg"
        }, {
            "title": "Superman Man of Steel",
            "poster": "images/super3_tn.jpg"
        }
    ]
},
{
    "sl": 3,
    "title": "Ironman",
    "gender": "male",
    "firstname": "Tony",
    "lastname": "Stark",
    "city": "New York",
    "ticketprice": 122.90,
    "releasedate": "1/27/2018",
    "poster": "images/ironman.jpg",
    "movieslist": [
        {
            "title": "Ironman",
            "poster": "images/iron1_tn.jpg"
        }, {
            "title": "Ironman 2",
            "poster": "images/iron2_tn.jpg"
        }, {
            "title": "Ironman 3",
            "poster": "images/iron3_tn.jpg"
        }
    ]    
}, {
    "sl": 4,
    "title": "Phantom",
    "gender": "male",
    "firstname": "Kit",
    "lastname": "Walker",
    "city": "Bhangala",
    "ticketprice": 98.64,
    "releasedate": "1/27/2018",
    "poster": "images/phantom.jpg",
    "movieslist": [
        {
            "title": "The Phantom Slam Evilz",
            "poster": "images/phantom1_tn.jpg"
        }
    ]
}, {
    "sl": 5,
    "title": "Spiderman",
    "gender": "male",
    "firstname": "Peter",
    "lastname": "Parker",
    "city": "New York",
    "ticketprice": 451.34,
    "releasedate": "9/26/2018",
    "poster": "images/spiderman.jpg",
    "movieslist": [
        {
            "title": "Spiderman",
            "poster": "images/spider1_tn.jpg"
        }, {
            "title": "Spiderman 2",
            "poster": "images/spider2_tn.jpg"
        }, {
            "title": "Spiderman 3",
            "poster": "images/spider3_tn.jpg"
        }
    ]
},
{
    "sl": 6,
    "title": "W Woman",
    "gender": "female",
    "firstname": "Princess",
    "lastname": "Diana",
    "city": "Amazon",
    "ticketprice": 341.34,
    "releasedate": "11/26/2018",
    "poster": "images/wonderwoman.png",
    "movieslist" : []
}];

export default class MainComponent extends Component{
    
    // pokemons = ['pikachu','squirtle','charizard','bulbasaur'];
    render(){
        return (<React.Fragment>
            <HeadingComponent/>
            <ListComponent list={heroes}/>
            {/* <hr/>
            <ListComponent list={this.pokemons}/> */}
        </React.Fragment>)
    }
}