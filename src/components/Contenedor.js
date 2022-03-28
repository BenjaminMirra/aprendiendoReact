import React, { Component } from 'react';
import info from './data.json';
import Opciones from './Opciones';
import Recordatorio from './Recordatorio';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            historial: [],
            anterior: '',
        };
    }

    handleClick = ({ target }) => {
        let id = target.id;
        let contador = this.state.i;
        if (contador >= 7) {
            alert(' ¡FIN DEL JUEGO! \n\n ¡Refrezque la página si quiere volver a jugar!');
        } else if (id === 'A' && contador === 0) {
            this.setState({
                i: contador + 1,
                anterior: 'A',
            })
        } else if(id=== 'B' && contador === 0) {
            this.setState({
                i: contador +2,
                anterior: "B",
            })
        }else if (id === 'A' && this.state.anterior === 'A') {
            this.setState({
                i: contador + 2,
                anterior: 'A',
            })
        }else if (id === 'B' && this.state.anterior === 'B') {
            this.setState({
                i: contador + 2,
                anterior: 'A',
            })
        }else if (id === 'B' && this.state.anterior === 'A'){
            this.setState({
                i: contador + 3,
                anterior: 'A'
            })
        }else if(id === 'A' && this.state.anterior === 'B'){
            this.setState({
                i: contador + 1,
                anterior: 'A'
            })
        }
    };

    componentDidUpdate(p, prevState) {
        if (prevState.i !== this.state.i) {
            this.setState({
                ...this.setState.historial
            })
            this.state.historial.push(this.state.anterior);
        }
    }

    render() {
        let contador = this.state.i;
        return (
            <div className="layout">
                <h1 className="historia">{info[contador].historia}</h1>
                <Opciones
                    handleClick={this.handleClick}
                    opcionA={info[contador].opciones.a}
                    opcionB={info[contador].opciones.b}
                />
                <Recordatorio anterior={this.state.anterior} historial={this.state.historial.map((e, index) => (
                    <li key={index}>{e}</li> ),info[contador].id)}
                />
            </div>
        );
    }
}

export default Main;
