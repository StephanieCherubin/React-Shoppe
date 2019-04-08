import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import Product from './Product'
import CategoryButton from './Category-Button'

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      currentCategory: null
    }
  }

  setCategory(cat) {
    console.log(cat)
    this.setState({ currentCategory: cat})
  }

  render() {

    const cats = categories.map((cat) => {
      return (
        <CategoryButton 
          isSelected={this.state.currentCategory === cat}
          key={cat}
          label={cat}
          onClick={ (currentCategory) => this.setCategory(currentCategory) }/>)
    })

    const products = inventory.filter( (item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === null
    }).map((item, index) => {
      const { name, description, price } = item
      return (
        <Product 
          key={`${name} - ${index}`}
          title={name} 
          desc={description}
          price={price} />
    )})

    return (
      <div className="App">
        <h1>Products</h1>

        <div>
          {cats}
        </div>

        <div>
          {products}
        </div>

        <div className="inventory">

        </div>
      </div>
    );
  }
}

export default App;
