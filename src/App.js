import React, { Component } from "react";
import "./styles.css";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  div = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    });
  };

  soma = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  mult = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  sub = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: 0
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  render() {
    return (
      <section className="calc">
        <h1>Calculadora</h1>
        <div className="inputs">
          <input onChange={this.handleChange1} value={this.state.n1} />
          <input onChange={this.handleChange2} value={this.state.n2} />
        </div>
        <div className="botoes">
          <button onClick={this.div}>/</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.soma}>+</button>
          <button onClick={this.clear} className="clean">
            C
          </button>
        </div>
        <p> {this.state.result}</p>
      </section>
    );
  }
}

export default App;
