import React, { Component } from "react";
import ProgressBar from "../ProgressBar";
import Products from "../Products";
import Technology from "../Technology";
import NewCondition from "../NewCondition";
import "./parent.css";

class Parent extends Component {
  constructor(){
    super();
    this.prodID = 0;

    this.state = {
        products: [
        ],
        title: "",
        tagLine: "",
        id: "",

      };
  }



  deleteProduct = (index, e) => {
    const copyProducts = Object.assign([], this.state.products); // make a copy of array
    copyProducts.splice(index, 1);
    this.setState({ products: copyProducts });
  };

  addProduct = ()=>{
    this.prodID = this.prodID + 1;
    const copyProducts = Object.assign([],this.state.products);
    copyProducts.push({
      id: this.prodID,
      title: this.state.title,
      tagLine: this.state.tagLine,
    })
    this.setState({ products: copyProducts });
  }

  setProduct = (element) => {
    this.setState({
      title : element.target.value
    })
  }


  render() {
    return (
      <section className={"App-content bodyPanelGray"}>
        <ProgressBar />

        {/*TODO: products Delete button removes that card from the deck Progress bar reduces*/}
        <input type="text" onBlur={this.setProduct}/>
        <button onClick={this.addProduct}>Add</button>

        <form action={this.addProduct()}>
          <input type="text" onChange={this.} onBlur={this.setProduct}/>
        </form>

        {this.state.products.map((product, index) => {
          return (
            <Products
              key={product.id}
              delEvent={this.deleteProduct.bind(this, index)}
              title={product.title}
              quote={product.tagLine}
            />
          );
        })}

        <Technology />

        {/*TODO: when add button is pushed a new Product or Technology card is
          added to the deck and the Progressbar increases by 20%*/}
        <NewCondition addEvent={this.addProduct.bind(this)} />
      </section>
    );
  }
}

export default Parent;
