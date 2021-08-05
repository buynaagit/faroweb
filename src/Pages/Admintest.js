import React from "react";

class NewsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      title: "",
      description: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    const response = await fetch("https://reqres.in/api/posts", requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  submit() {
    console.log(`${this.state.title}\n ${this.state.description}`);
  }

  render() {
    return (
      <form>
        <label>
          title:
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          description:
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.submit()}>Submit</button>
      </form>
    );
  }
}

export default NewsPanel;
