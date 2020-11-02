import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {


  addToPro = (stock) => {
    console.log("pc")

    let prev = this.props.stocks
    let result = prev.filter(s => s !== stock)

    this.props.setPortfolio(result)

    this.setState({
      stocks: this.props.stocks
    })
    
  }

  
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks.map(stock => <Stock addToPro={this.addToPro} aStock={stock} />)}
      </div>
    )
  }

}

export default PortfolioContainer;
