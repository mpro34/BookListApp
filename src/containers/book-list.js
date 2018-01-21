import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
}

//Connect react to redux
function mapStateToProps(state) {
  //will show up as props inside of book list
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props on the BookList Container.
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a Component to Container - it needs to know about this new
// dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
