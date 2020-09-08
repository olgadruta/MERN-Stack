import React, {useEffect, useState} from 'react'

export const Pokemon = props => {

    const [state, setState] = useState([]);
    
    const clickHandler = e => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setState(response.results) && console.log(response.results))
            .catch((err)=> console.log(err))
    }

    // console.log(state)
 
    return (
        <div>
            <button onClick={clickHandler} >Fetch Pokemon </button>
            {state.length > 0 && state.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );

    // const[state, setState] = useState('')

    //     const clickHandler = e =>{
    //         fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(res => res.json())
    //         .then(res => setState(res.results))
    //         .catch(err => console.log(err))
    //     }
    // }

    // return(
    //     <div>
    //         <button onClick={clickHandler} >Fetch Pokemon </button>
    //         <h1>It worked </h1>
    //     </div>
    // )
}