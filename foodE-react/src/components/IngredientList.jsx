import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'
import SearchBar from "./SearchBar"


export default function IngredientList() {

    const [searchTerm, setSearchTerm] = useState('')

    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        if (searchTerm) {
            const getIngredients = async () => {
                const response = await axios.get(`${BASE_URL}filter.php?i=${searchTerm}`)
                setDrinks(response.data.drinks)
            }
            getIngredients()
        } else {
            setDrinks([])
        }
    }, [searchTerm])

    let navigate = useNavigate()

    const showIngredientDetails = (idDrink) => {
        navigate(`${idDrink}`)
    }

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {drinks.length === 0 ? (
                <h2 className='Loading'>Please Enter an Ingredient to Search by</h2>
            ) : (
                <div className="drinks">

                    {drinks.map((drink) => (
                        <div key={drink.idDrink} onClick={() => showIngredientDetails(drink.idDrink)} className="card">

                            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="image-main" />

                            <h3>{drink.strDrink}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}