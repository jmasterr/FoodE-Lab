import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function NamePage() {

    const [drinks, setDrinks] = useState()

    let {id} = useParams()

    useEffect(() => {
        const getDrinks = async() => {
            const response = await axios.get(`${BASE_URL}search.php?s=${searchTerm.id}`)
            setDrinks(response.data.drinks[id])
        }
        getDrinks()
    }, [])

    return drinks ? (
        <div className="details">
            <img src={drinks.strDrinkThumb} alt={drinks.strDrink} className="image-details" />
            <h3>{drinks.strDrink}</h3>
            <p>{drinks.strIngredient1}</p>
            <Link to="/NameList">Return to Drink Search</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>
}