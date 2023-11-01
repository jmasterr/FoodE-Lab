import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '..globals'

export default function IngredientPage() {

    const [ingredient, setIngredient] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getIngredientDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                setIngredient(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching ingredient details:", error);
                setIngredient(null)
        }
    }
    getIngredientDetails()
    }, [id])

    return ingredient ? (
        <div className="details">
            <img src={ingredient.strIngredientThumb} alt={ingredient.strIngredient} className="image-details" />
            <h3>{ingredient.strIngredient}</h3>
            <ul>
                <li>{ingredient.strMeasure1} {ingredient.strIngredient1}</li>
                <li>{ingredient.strMeasure2} {ingredient.strIngredient2}</li>
                <li>{ingredient.strMeasure3} {ingredient.strIngredient3}</li>
            </ul>
            <h4><span>Instructions:</span><br/>{ingredient.strInstructions}</h4>
            <Link to="/IngredientList">Return To Ingredient Search</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>






}