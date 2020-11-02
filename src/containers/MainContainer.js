import React, { Component, useCallback } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    data: [],
    proData: [],
    original: [],
    sortBy: ""
  }

  addToPro = (stock) => {
    let prev = this.state.proData
    if (!prev.includes(stock)){
      prev.push(stock)
      this.setState({
        proData: prev
      })

    }
    
    
    
    
  }

  setPortfolio = (stocks) => {
    this.setState({
      proData: stocks
    })
  }


  fetchData = () => {
    fetch(`http://localhost:3000/stocks`)
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        data: stocks,
        original: stocks
      }, () => (console.log(stocks)))
    })
  }

  filterStocks = (filter) => {
    let stocks = this.state.original
    let filtered = stocks.filter(stock => stock.type == filter)

    this.setState({
      data: filtered
    }, () => {this.sortFiltered()})
  }

  setSort = (sort) => {
    this.setState({
      sortBy: sort
    }, () => {this.sortFiltered()})
  }

  sortFiltered = () => {
    let sort = this.state.sortBy
    let filtered = this.state.data

    if(sort === "Alphabetically"){
      filtered = filtered.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 )
    }
    else if (sort === "Price"){
      filtered = filtered.sort((a,b) => a.price < b.price ? 1 : -1 )
    }

    this.setState({
      data: filtered
    })
  }


  componentDidMount = () => {
    this.fetchData()
  }

  render() {
    return (
      <div>
        <SearchBar filter={this.filterStocks} setSort= {this.setSort} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks= {this.state.data} updateProData={this.updateProData} addToPro={this.addToPro} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks= {this.state.proData} setPortfolio= {this.setPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

