import { createContext, useState } from "react";

export let ContextApi = createContext();

let ContextProvider = ({ children }) => {
  let [data, setData] = useState([]);
  let [popup, setPopup] = useState(false);
  let handleAddData = props => {
    let newState = data;
    newState.push(props);
    setData(newState);
    setPopup(!popup);
  };
  let handleDelete = datas => {
    let newData = data.filter(item => item !== data);
    setData(newData);
    data.map(details => {
      if (details.company === datas) {
        data.delete(datas);
      }
    });
  };

  let handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <ContextApi.Provider
      value={{ data, handleAddData, handlePopup, popup, handleDelete }}
    >
      {children}
    </ContextApi.Provider>
  );
};
export default ContextProvider;
