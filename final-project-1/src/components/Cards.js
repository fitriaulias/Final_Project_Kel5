import { Component } from "react";

export default class Cards extends Component {
    data(){

    }

    render() {
        return(
            <div className="bg-card">
                <div className="click-here">
                    <div>{this.props.source}</div>
                </div>
            </div>
        ) 
    }
}