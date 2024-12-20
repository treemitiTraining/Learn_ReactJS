// function Nav() {

import { Component } from "react"

// }

// export default function Nav(){

// }


// const Nav = () => {

// }
// export default Nav

// export {Nav, };



// Class base components


class Student extends Component {

    constructor() {
        super();
        this.state = { name: "yash" }
    }


    render() {
        return (
            <>
                <h1>Student list</h1>
                <h2>Name: {this.state.name}</h2>
            </>
        )
    }
}

export { Student }