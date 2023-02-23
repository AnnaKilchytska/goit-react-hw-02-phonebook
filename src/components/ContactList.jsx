import PropTypes from 'prop-types';

import React, { Component } from 'react';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => {
          return (
            <li key={contact.id} id={contact.id}>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
              <button
                type="button"
                onClick={() => this.props.onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
