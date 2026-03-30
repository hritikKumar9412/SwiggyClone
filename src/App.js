import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import Groceryoption from "./Components/Groceryoption";
import Dineoutoption from "./Components/Dineoutoption";
import Restaurant from "./Components/Restaurant";
function  App(){
    return(
        <>
        <Header/>
        <FoodOption/>
        <Groceryoption/>
        <Dineoutoption/>
        <Restaurant/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)


// proxyy server -- https://cors-anywhere.herokuapp.com/