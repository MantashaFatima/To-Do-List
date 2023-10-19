import React, { useState } from 'react';
import './App.css';
import TudoInput from './Component/TudoInput';
import TudoList from './Component/TudoList';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


function App() {
  const [listTudo, setListTudo] = useState([]);


  const addList = (inputText) => {
    setListTudo([...listTudo, inputText]);
  };

  const deleteListItem = (key)=>{ 
    let newListTudo=[...listTudo];  
    newListTudo.splice(key,1)
    setListTudo([...newListTudo])
       

  }
  
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TudoInput addList={addList} />    
      {listTudo.map((listItem, i) => {
        return (
          <div key={i}>
            <TudoList item={listItem} deleteItem={deleteListItem}/>
            {/* <li>{listItem}</li> */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
