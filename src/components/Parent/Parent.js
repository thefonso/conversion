import React, {Component} from 'react';
import ProgressBar from "../ProgressBar";
import Products from "../Products";
import Technology from "../Technology";
import NewCondition from "../NewCondition";
import './parent.css'

class Parent extends Component {

  state={
    products:[
      {id: 0, title:'Products purchased', tagLine:'What products have they interacted with?'},
      {id: 1, title:'alpha', tagLine:'Alfonso works hard.'},
      {id: 2, title:'beta', tagLine:'Alfonso is fun to work with!'},
      {id: 3, title:'gamma', tagLine:'He likes to learn new things.'},
    ]
  }

  // make a copy of array
  deleteProduct = (index, e) => {
    const products = Object.assign([], this.state.products);
    products.splice(index, 1);
    this.setState({products:products})
  }

  render() {
    return (
        <section className={"App-content bodyPanelGray"}>
          <ProgressBar/>

          {/*TODO: products Delete button removes that card from the deck Progress bar reduces*/}

          {
            this.state.products.map((product, index) =>{
              return(<Products delEvent={this.deleteProduct.bind(this, index)} title={product.title} quote={product.tagLine}/>)
            } )
          }

          <Technology/>


          {/*TODO: when add button is pushed a new Product or Technology card is
          added to the deck and the Progressbar increases by 20%*/}
          <NewCondition/>

        </section>
    );
  }
}

export default Parent;
