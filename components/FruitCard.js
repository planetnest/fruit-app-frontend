import React from 'react'
import ReactDOM from 'react-dom';


const imageWrapper = {
	flex:'auto',
	flexBasis: '40%',
    marginRight: 10,
    marginBottom: 10,
	borderRadius: 9,
	boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -30px 8px rgba(145, 96, 0, 0.78)',
	position: 'relative'
}
const imageSize = {
	width: '100%',
	height: 'auto',
    boxShadow: 'inset 0px -30px 8px rgba(255, 186, 0, 0.58)',
    marginBottom: -25,
    borderRadius: 9
} 
const fruitName = {
	textAlign: 'center',
	fontSize: 18,
	color: '#FFFFFF',
	position: 'relative',
	top: 15,
	paddingTop: 15
}
class FruitCard extends React.Component {
  render() {  
    return (
	    <div style={imageWrapper}>
		    <img src={this.props.src} style={imageSize} alt="banana" />
		    <p style={fruitName}>{this.props.name}</p>
		</div>
	);
  }
}


export default FruitCard