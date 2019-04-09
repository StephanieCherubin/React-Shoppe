import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import './Categories.css'
import './Products.css'
import Product from './Product'
import CategoryButton from './Category-Button'

class App extends Component {

  constructor(props) {
    super(props)

    categories.push("All")
    
    this.state = {
      currentCategory: !null
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
          isSelected={this.state.currentCategory === "cat"}
          key={cat}
          label={cat}
          onClick={ (currentCategory) => this.setCategory(currentCategory) }/>)
    })

    const products = inventory.filter( (item) => {
      return item.category === this.state.currentCategory || this.state.currentCategory === 'All'
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
        <h1>Shoppe</h1>

        <div className="Categories">
          {cats}
        </div>

        <div className="Products">
          {products}
        </div>

        <div className="inventory">

        </div>
      </div>
    );
  }
}

export default App;
