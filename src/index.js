import React from "react";
import ReactDOM from "react-dom/client";

function Main () {
        const [person, setPerson] = React.useState({
            firstName: "John",
            lastName: "Smith"
    })

    function lol () {
        setPerson(oldStuff => ({
            ...oldStuff,
            age: 30
        }))
    }
    console.log(person)
    return <button onClick={lol}>click me</button>
}



const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<Main />)


















// const [people, setPeople] = React.useState([
//     {
//         firstName: "John",
//         lastName: "Smith"
//     }
// ])

// function addPeople () {
//     setPeople(oldPepole => {
//         oldPepole.push({
//             firstName: "john", 
//             lastName: "cina"
//         })
//     })
//     console.log(people)
// }

// return (
//     <>
//         <button onClick={addPeople}>CLICK ME</button>
//     </>
// )










// const [color, setColor] = React.useState("Pink")

// function colorChanger () {
//     switchColor ()
// }
// function switchColor () {
//     setColor(oldValue => oldValue === "Pink" ? "Blue" : "Pink")
// }
// return(
//     <>
//         <button onClick={colorChanger}>click me</button>
//         <h1>{color}</h1>
//     </>
// )