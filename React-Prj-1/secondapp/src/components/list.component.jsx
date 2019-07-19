import React, {Component} from 'react';
import ItemComponent from './item.component';

export default class ListComponent extends Component {
    disableHero(val){
        console.dir(val);
    }
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
                return (<ItemComponent key={i} itemData={val} disableHeroHandler={this.disableHero.bind(this, val)}/>)
            })
        )
    }
}