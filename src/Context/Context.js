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
    let newData = data.filter(x => x.company !== datas);
    setData(newData);
  };
  let handleEdit = datas => {
    // let newData = data.map(x => {
    //   if (x.company == datas.company) {
    //     x.designation = datas.designation;
    //     x.company = datas.company;
    //     x.workingFrom = datas.workingFrom;
    //     x.workingtill = datas.workingtill;
    //     x.city = datas.city;
    //   }
    //   setData(newData);
    // });
  };
  let handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <ContextApi.Provider
      value={{
        data,
        handleAddData,
        handlePopup,
        popup,
        handleDelete,
        handleEdit,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
export default ContextProvider;
