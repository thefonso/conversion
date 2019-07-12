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
    this.handleChange = this.handleChange.bind(this)
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

  // setProduct = (event) => {
  //   console.log(event);
  //   this.setState({
  //     [event.target.title]: event.target.value,
  //     [event.target.tagLine]: event.target.value,
  //   })
  // }

  handleSubmit = (event) =>{
    event.preventDefault()
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <section className={"App-content bodyPanelGray"}>
        <ProgressBar />

        {/*TODO: products Delete button removes that card from the deck Progress bar reduces*/}

        <form onSubmit={this.handleSubmit}>
          <input name={"title"} value={this.state.title} type="text" onChange={this.handleChange}/>
          <input name={"tagLine"} value={this.state.tagLine} type="text" onChange={this.handleChange}/>
          <button onClick={this.addProduct}>Add</button>
        </form>

        <p>title: {this.state.title}</p>
        <p>tagLine: {this.state.tagLine}</p>
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
