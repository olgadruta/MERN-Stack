import React, {useState} from 'react'
import styles from './Box.module.css'

export const Boxy = () => {
    const [boxState, setBoxState] = useState ({
        boxes: [],
        color: ""
    })
    const submitHandler = event => {
        event.preventDefault()
        boxState.boxes.push(boxState.color)
        // boxState.boxes.color="green"
        console.log(boxState.boxes)
        setBoxState({
            ...boxState,
        })
    }

    const changeHandler = e =>{
        e.preventDefault()
        setBoxState({
            ...boxState,
            [e.target.name]: e.target.value,
        })
    }

    const colorBoxes = boxState.boxes.map((item) => <div className={styles.boxy}  style={{background: item}} />)

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="color" onChange={changeHandler} value={boxState.name} ></input>
                <button>Click Me</button>
            </form>
            <p className={styles.boxy}>  </p>
            {/* {boxState.boxes.map((item) => <div className={styles.boxy}  style={{background : item}} />)} */}
            {colorBoxes}
        </div>
    )

}
