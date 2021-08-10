import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Select Category", "FARO", "IFD", "VRLAB", "FOUNDATION"];
const defaultOption = options[0];

const DropDownCategory = ({ category, setCategory }) => {
  const onSelect = (e) => {
    console.log(`e`, e);
    setCategory(e.value);
  };

  return (
    <Dropdown
      options={options}
      onChange={onSelect}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

export default DropDownCategory;
