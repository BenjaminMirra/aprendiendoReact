import React, { Component } from "react";

class Recordatorio extends Component {
    render() {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.anterior}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.historial.map((historia, index)=>{
                    return <li key={index + 1}>{historia}</li>
                })}</ul>
            </div>
        );
    }
}

export default Recordatorio;
