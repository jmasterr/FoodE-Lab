import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function NamePage() {

    const [drink, setDrink] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getDrinkDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
                // Use [0] because it returns an array
                setDrink(response.data.drinks[0])
            } catch (error) {
                console.error("Error fetching drink details:", error);
                setDrink(null)
            }
        }
        getDrinkDetails()
    }, [id])

    return drink ? (
        <div className="details">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="image-details" />
            <h3>{drink.strDrink}</h3>
            <ul>
                <li>{drink.strMeasure1} {drink.strIngredient1}</li>
                <li>{drink.strMeasure2} {drink.strIngredient2}</li>
                <li>{drink.strMeasure3} {drink.strIngredient3}</li>
            </ul>
            <h4><span>Instructions:</span><br/> {drink.strInstructions}</h4>
            <Link to="/NameList">Return to Drink Search</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>
}