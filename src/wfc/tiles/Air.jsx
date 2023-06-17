import {Component} from "react";

export default class Air extends Component {
    static id = "Air";
    static ok = ["Air", "Grass"];

    static createReactInstance = (props) => <Air {...props}/>;

    render(){
        return <></>
    }
}
