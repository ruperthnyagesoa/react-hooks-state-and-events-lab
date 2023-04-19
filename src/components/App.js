import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const[isColor, setColor] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"


  function changeTheme(){
    setColor(isColor => !isColor)
   }
   const appClass = isColor ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeTheme}> {isColor ? "Dark Mode" : "Light Mode"} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;