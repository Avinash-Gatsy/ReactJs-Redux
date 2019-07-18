import React, {Component} from 'react';
import ReactDom from 'react-dom';

//let elm = React.createElement('h1', null, "Welcome"); //create a react element

// let elm = React.createElement('ul', null,
//     [React.createElement('li', null, 'List 1'), React.createElement('li', null, 'List 2'), React.createElement('li', null, 'List 3'),
//     React.createElement('li', null, 'List 4'), React.createElement('li', null, 'List 5')]);


const heroes = ['Superman', 'Batman', 'Ironman', 'Spiderman', 'Antman'];

//creating nested elements by passing dynamic values
/*const heroes = ['Superman', 'Batman', 'Ironman', 'Spiderman', 'Antman'];
let elm = React.createElement('ol',null, heroes.map((val, i, arr)=>{
   return React.createElement('li',{key:i},val) 
}))*/

// let elm = 
//     <div>
//         <h1>Heroes List</h1>
//         <ol>
//             <li>{heroes[0]}</li>
//             <li>{heroes[1]}</li>
//             <li>{heroes[2]}</li>
//             <li>{heroes[3]}</li>
//             <li>{heroes[4]}</li>
//         </ol>
//     </div>

// let elm =
//     <React.Fragment>
//         <h1>Heroes List</h1>
//         <ol>
//             {heroes.map((val, i) => {
//                 return <li key={i}>{val}</li>
//             })}
//         </ol>
//     </React.Fragment>

class HeaderComponent extends Component{
    render(){
        return <>
            <h1>{this.props.title}</h1>
        </>
    }
}
class HeroListComponent extends Component{
    render(){
        console.dir(this.props);
        return <>
                <ol>
                    {this.props.list.map((val, i) => {
                        return <li key={i}>{val}</li>
                    })}
                </ol>
        </>
    }
}
class MainComponent extends Component{
    pokemons = ['pikachu','squirtle','charizard','bulbasaur'];
    render(){
        return <React.Fragment>
                <HeaderComponent title={this.props.title}/>
                <HeroListComponent list={heroes}/>
                <hr/>
                <HeroListComponent list={this.pokemons}/>
              </React.Fragment>
    }
}
ReactDom.render(<MainComponent title="Heroes List"/>, document.getElementById('root')); //render the elm or comp in <div id="root"></div> -> index.html (webpack will map this index.js to index.html)

