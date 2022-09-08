import React from 'react';
import './AddKeeper.css'

export default function AddKeeper() {
  const [keeperObj, setKeeperObj] = React.useState({
    title: "",
    desrciption: ''
  })
  const onchangeHandler = (e) => {
    const [name, value] = e.target;
    setKeeperObj({
      ...keeperObj,
      [name]: value
    })
  };
  const add = () => {
    if (keeperObj.title && keeperObj.desrciption) {
      alert("Done")
    }
  }
  return (
    <div className="addKeeper">
    <input
         className="inputBox titleInput"
         autoFocus
         type="text"
         name="title"
         autoComplete="off"
         placeholder="Add Title"
         onChange={onchangeHandler}
         value={keeperObj.title}
     />
     <textarea 
         className="inputBox description"
         name="description"
         placeholder="Add Description Here"
         onChange={onchangeHandler}
         value={keeperObj.desrciption}
     />
     <div className="addButton" onClick={add}>Add</div>
 </div>
  )
}













































