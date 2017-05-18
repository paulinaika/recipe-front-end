import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class IngredientForm extends Component {
	handleInputChange(e) {
		// not used, just for reference
		console.log(e.target.value)
	};

	focus() {
    // Explicitly focus the text input using the raw DOM API
    this.nameInput.focus();
  };

  newIngredient() {
  	const URL = 'http://mongo-crudient.herokuapp.com/api?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhdWxpbmFAZ21haWwuY29tIiwiaWF0IjoxNDk1MDg1NDkyfQ.RbgIYSrTWDvwzbWNa4AfpUpLsFiFmD8aF0Dda60EpIM';
  	axios.post(URL + '&ingredient_name=' + this.nameInput.value)
  		.then((response) => {
  			console.log(response);
  			// reset value of input field
  			this.nameInput.value = '';
  			this.props.getIngredientList();
  		})
  		.catch(function(error) {
  			console.log(error)
  		});
  };

	render() {
		return (
			<div>
				<input
					type="text"
					ref={(input) => { this.nameInput = input; }}
					onChange={(e) => this.handleInputChange(e)} />
				<button onClick={() => this.newIngredient()}>Add Ingredients</button>
			</div>
		)
	};
}

IngredientForm.propTypes = {
	getIngredientList: PropTypes.func.isRequired
};

export default IngredientForm;
