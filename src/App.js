import React from 'react';
import './App.css';
import Header from './Header/Header';
import Input from './components/Input';
import Output from './components/Output';
import Multiplicador from './components/Multiplicador';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InputNumberLabelName: "Multiplicar este número: ",
      OutputNumerLaberlName: "EL resultado de la multiplicación es: ",
      MultiplicadorLabelName: "Estás usando el multiplicador: ",
      numero: null,
      resultado: null
    }
  }

  actualizarCampos = (event) => {
    this.setState({
      numero: event.target.value
    })
  }
  
  numeroMultiplicador(multiplicador){
    var resultado = multiplicador * this.state.numero;
    this.setState({
      multiplicador: multiplicador,
      resultado: resultado,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container-sm p-5 text-center">
          <Header titulo="CALCULADORA" />
          <Input
            value={this.state.numero}
            labelName={this.state.InputNumberLabelName}
            change={this.actualizarCampos}>  
          </Input>
          <Multiplicador 
            parent={this}>
          </Multiplicador>
          <Output
            value={this.state.resultado}
            labelName={this.state.OutputNumerLaberlName}>
          </Output>     
          <Output
            value={this.state.multiplicador}
            labelName={this.state.MultiplicadorLabelName}>
          </Output>       
        </div>
      </div>
    )
  }
}

export default App;
