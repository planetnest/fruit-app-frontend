import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const styles = {
	fontWeight: 'bold',
  fontSize: 28,
  color: 'black',
  display: 'inline',
  marginRight: 10
}

// class Tab extends React.Component {
//   render() {
//     return (
//       <h1 style={styles}>{this.props.name}</h1>
//     );
//   }
// }

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
        style={styles}
      >
        {label}
      </li>
    );
  }
}

export default Tab