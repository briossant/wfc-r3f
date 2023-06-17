import {Component} from "react";

export default class Air extends Component {
    static id = "Air";
    static okPlusX = ["Air", "Grass"];
    static okPlusY = ["Air"];
    static okPlusZ = ["Air", "Grass"];
    static okMinusX = ["Air", "Grass"];
    static okMinusY = ["Air", "Grass"];
    static okMinusZ = ["Air", "Grass"];

    static createReactInstance = (props) => <Air {...props}/>;

    render(){
        return <></>
    }
}
