import {useEffect, useState} from "react";
import "./style.css"
import axios from "axios";



function Main() {
const [items,setitems]= useState([])
useEffect(()=> {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res => {
        // console.log(res.data)
        setitems(res.data.meals);
    })
    .catch((err) => {
        console.log(err);
    });
}, []);

    const itemList =items.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <section className="card">
            <img src={strMealThumb} alt="" />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
            </section> 
            
        )
    })

    return <div className="items-container">{itemList}</div>
}

export default Main;