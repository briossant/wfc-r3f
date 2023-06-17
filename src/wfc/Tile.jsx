import {Component} from "react";

export default class Tile extends Component {
    static id = "";
    static okPlusX = [];
    static okPlusY = [];
    static okPlusZ = [];
    static okMinusX = [];
    static okMinusY = [];
    static okMinusZ = [];

    static createReactInstance = (props) => <Tile {...props}/>;

    render(){
        return <></>
    }
}