import React from 'react'
import ReactDOM from 'react-dom';

const styles = {
	fontWeight: 'bold',
	fontSize: 18,
	display: 'inline-flex',
	alignItems: 'center',
	color: '#5B5757',
	marginRight: '5px'
}

const dropdownArrow = {
	height: 15
}
// class FruitDropdown extends React.Component {
//   render() {
//     return (
//     	<div>
// 		    <p style={styles}>May</p>
// 		    <img src="../static/down.svg" style={dropdownArrow} alt="arrow down" />
// 		</div>
// 	);
//   }
// }


class FruitDropdown extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { value: 'select'};
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div className="form-group">
        <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control" style={styles}>
          <option value="select">May</option>
          <option value="First">June</option>
          <option value="Second">July</option>
          <option value="Third">August</option>
        </select>
      </div>
    )
  }
}


export default FruitDropdown