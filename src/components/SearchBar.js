import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name ="sort"  onChange={(e) => {props.setSort(e.target.value)}}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name= "sort"  onChange={(e) => {props.setSort(e.target.value)}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => {props.filter(e.target.value)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
