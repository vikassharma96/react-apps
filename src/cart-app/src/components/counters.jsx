import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   state = {
  //     counters: [
  //       { id: 1, value: 0 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //     ],
  //   };

  //   handleIncrement = (counter) => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     console.log(this.state.counters[index]);
  //     this.setState({
  //       counters,
  //     });
  //   };

  //   handleReset = () => {
  //     const counter = this.state.counters.map((c) => {
  //       c.value = 0;
  //       return c;
  //     });
  //     this.setState({
  //       counter,
  //     });
  //   };

  //   handleDelete = (counterId) => {
  //     console.log("Event Handler Called", counterId);
  //     const counters = this.state.counters.filter(
  //       (counter) => counter.id !== counterId
  //     );
  //     this.setState({
  //       counters,
  //     });
  //   };

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
            // value={counter.value}
            // id={counter.id}
            // selected={true}
          >
            <h4>Counter# {Counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
