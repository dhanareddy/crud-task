import React, { useContext, useEffect, useState } from "react";
import { ContextApi } from "../Context/Context";
import "./popup.css";
const Popup = () => {
  let contextData = useContext(ContextApi);
  console.log(contextData);
  let [state, setState] = useState({
    designation: "",
    company: "",
    workingFrom: "",
    workingtill: "",
      city: "",
  });
  let { designation, company, workingFrom, workingtill, city } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleAdd = e => {
    e.preventDefault();
    contextData.handleAddData(state);
    console.log(state);
  };

  let handleClose = () => {
    contextData.handlePopup();
  };
  return (
    <div id="popipDiv">
      <form id="addForm" onSubmit={handleAdd}>
        <h1>Experience</h1> <p id="close">X</p>
        <div>
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            name="designation"
            value={designation}
            onChange={handleChange}
            className="inputs"
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>

          <input
            type="text"
            name="company"
            value={company}
            onChange={handleChange}
            className="inputs"
          />
        </div>
        <div>
          <label htmlFor="workingFrom">Working From</label>

          <input
            type="text"
            name="workingFrom"
            value={workingFrom}
            onChange={handleChange}
            className="inputs"
          />
        </div>
        <div>
          <label htmlFor="workingtill">Working Till</label>

          <input
            type="text"
            name="workingtill"
            value={workingtill}
            onChange={handleChange}
            className="inputs"
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            className="inputs"
          />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
};

export default Popup;
