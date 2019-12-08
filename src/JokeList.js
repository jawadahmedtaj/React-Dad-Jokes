import React, { Component } from "react";
import Axios from "axios";

export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await Axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
  }

  render() {
    return (
      <div className="JokeList">
        <h1>Joke List</h1>
        <div className="JokeList-Jokes">
          {this.state.jokes.map(j => (
            <div>{j}</div>
          ))}
        </div>
      </div>
    );
  }
}
