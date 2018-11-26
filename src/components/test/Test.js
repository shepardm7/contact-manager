import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillUpdate");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
