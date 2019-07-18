import React, {Component} from 'react';
import MovieListComponent from './movielist.component';
export default class ListComponent extends Component {
    render(){
        // return (<>
        //     <ol>
        //         {this.props.list.map((val, i)=>{
        //             return <li key={i} style={{ textTransform: 'capitalize', color: 'red' }}>{val}</li>
        //         })}
        //     </ol>
        // </>)
        return (

            this.props.list.map((val, i)=>{
                return (<div className="box" key={i}>
                    <h1>{val.title}</h1>
                    <img src={val.poster} alt={val.poster}></img>
                    <h2>{val.firstname}{' '}{val.lastname}</h2>
                    <p>
                        City: <span>{val.city}</span><br/>
                        Release Date: <span>{val.releasedate}</span><br/>
                        Ticket Price: <span>{val.ticketprice}</span>
                    </p>
                    <hr/>
                    <MovieListComponent movies={val.movieslist}/>
                    </div>)
            })
        )
    }
}