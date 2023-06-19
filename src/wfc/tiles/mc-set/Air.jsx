import {Component} from "react";

export default class Air extends Component {
    static id = "Air";
    static okPlusX = ["Air", "Grass", "Flower"];
    static okPlusY = ["Air"];
    static okPlusZ = ["Air", "Grass", "Flower"];
    static okMinusX = ["Air", "Grass", "Flower"];
    static okMinusY = ["Air", "Grass", "Flower"];
    static okMinusZ = ["Air", "Grass", "Flower"];

    static createReactInstance = (props) => <Air {...props}/>;

    render(){
        return <></>
    }
}
