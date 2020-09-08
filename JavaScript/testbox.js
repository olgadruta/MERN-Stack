import React, {useState} from 'react'
import style from * /.Box.module.css //this separete file created

export const box = () => {
    const [boxState, setState] = useState ({
        boxes: [],
        color: ''
    })


    const submitHandler =e => {
        console.log("")
        console.log("Stop")
        e.preventDefault()
        boxState.boxes.push("Hello")
        // console.log(boxState.boxes)
        setState({
            ...boxState,
        })
    }
    
    const changeHandler = e => {
        e.preventDefault()
        // console.log("change the item")
        // boxState.color.target.value
        console.log(e.target.value)
        setState({
            ...boxState
            [e.target.name]=e.target.value
        })
    } 

    // let newBoxes= arr.map((item, index) => item*2);    //create new arr          //{boxState.boxes.map((item, index, list) )}  

    const colorBoxes = boxState.boxes.map(item => <div clasName={styles.boxy}  style={{background : item}} />)  //you need to call colorBoxes in return or put everything in {} in return


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="color" onChange={changeHandler} ></input>
                <button>Click me</button>
            </form>
            <p className={styles.boxy} >boxes are gonna go here</p>             //can be id={styles.boxy}
            {/* {boxState.boxes.map(item => <div className={styles.boxy} style={{background: item}} />)} */}
        </div>
    )
}