import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'


export default function IngredientList() {

    const [drinks, setDrinks] = useState([])

    useEffect(()=>{
        const getIngredients = async() => {
            const response = await axios.get(`${BASE_URL}filter.php?i=Gin`)
            setIngredients(response.data.drinks)
            console.log(response)
            setDrinks(response.data.drinks)
        }
        getIngredients()
    },[])

    let navigate = useNavigate()

    const showIngredients = (key) => {
        navigate(`${key}`)
    }

    // if (ingredients.length === 0) {
    //     return <h2 className="Loading">Loading Please Wait...</h2>
    // } else {
        return(
            <div className="ingredients">

                {
                    ingredients.map((ingredient, key) => (
                        <div key={ingredient.strDrink} onClick={()=>showIngredients(key)} className="card">
                        <h3>{ingredient.strDrink}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }