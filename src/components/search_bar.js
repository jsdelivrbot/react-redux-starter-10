import React, { Component } from 'react';
// const Component = React.Component;

// functional component
// const SearchBar = () => {
//   return <input />
// };

// class componentm, using ES6 class
// extends gives all the functionality of react component class
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // everytime you define render you must return some JSX
  render() {
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={event => console.log(event.target.value)} />;
    // this.state.term = event.target.value //BAD!!
    // <input onChange={event => this.setState({ term: event.target.value })} />
    // Value of the input: {this.state.term}
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

// how to export code
// only exports the component, not everything
export default SearchBar;
