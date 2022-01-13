import React, { useContext } from "react";
import "./home.css";
import { ContextApi } from "./../Context/Context";
import Popup from "../components/Popup";
const Home = () => {
  let contextData = useContext(ContextApi);
  let { data, handlePopup, popup } = contextData;
  console.log(data);
  return (
    <div id="homeDiv">
      <div
        id="popupDiv"
        style={popup ? { display: "block" } : { display: "none" }}
      >
        <Popup />
      </div>
      <h1 id="empExp">Employee Experience</h1>
      <table>
        <thead>
          <tr id="thRow">
            <th>Designation</th>
            <th>Company</th>
            <th>Working From</th>
            <th>Working Till</th>
            <th>City</th>
            <th id="btns">
              <h3 onClick={handlePopup}>+</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(details => (
              <tr className="detailsRow" key={details.company}>
                <td>{details.designation}</td>
                <td>{details.company}</td>
                <td>{details.workingFrom}</td>
                <td>{details.workingtill}</td>
                <td>{details.city}</td>
                <td className="buttons">
                  <button className="editBtn">Edit</button>
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      contextData.handleDelete(details.company);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
