import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'


export default function IngredientList() {

    const [drinks, setDrinks] = useState([])

    useEffect(()=>{
        const getIngredients = async() => {
            const response = await axios.get(`${BASE_URL}filter.php?i=Gin`)
            console.log(response)
            setDrinks(response.data.drinks)
        }
        getIngredients()
    },[])

    let navigate = useNavigate()

    const showIngredients = (key) => {
        navigate(`${key}`)
    }

    // if (drinks.length === 0) {
    //     return <h2 className="Loading">Loading Please Wait...</h2>
    // } else {
    //     return(
    //         <div className="ingredients">

    //             {
    //                 drinks.map((drink, key) => (
    //                     <div key={drink.strDrink} onClick={()=>showIngredients(key)} className="card">
    //                     <h3>{drink.strDrink}</h3>
    //                     </div>
    //                 ))
    //             }
    //         </div>
    //     )
    }
// }