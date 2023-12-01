import React from 'react'
import Clas from './Clas.js'
const Fun = () => {
    let a = 36;
    let name = "aruna"
    let obj1 = { a: 1, b: 2 }
    return (
        <div>
            <u><b>Function to Class using props</b> </u>
            <Clas n={a} name={name} o={obj1} />
        </div>
    )
}
export default Fun;