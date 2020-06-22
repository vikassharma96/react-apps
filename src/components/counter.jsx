import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data
    }
  }

  componentWillUnmount() {
    console.log("Counter - componentWillUnmount");
  }
  //   state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"],
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = (product) => {
  //     this.setState({
  //       value: this.state.value + 1,
  //     });
  //     console.log("product");
  //   };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <l1 key={tag}></l1>
          ))}
        </ul> */}
      </div>
    );
  }

  getBatchClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
