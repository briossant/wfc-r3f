import {Component} from "react";

export default class Air extends Component {
    static id = "Air";
    static okPlusX = ["Air"];
    static okPlusY = ["Air", "Roof"];
    static okPlusZ = ["Air"];
    static okMinusX = ["Air"];
    static okMinusY = ["Air", "Ground"];
    static okMinusZ = ["Air"];

    static createReactInstance = (props) => <Air {...props}/>;

    render(){
        return <></>
    }
}
