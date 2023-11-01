import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'
import SearchBar from "./SearchBar"


export default function NameList() {

    const [searchTerm, setSearchTerm] = useState('') //Why do we need this here and in the search bar?
    const [drinks, setDrinks] = useState([])
    
    useEffect(()=>{
        if (searchTerm) {
            // Fetch data only when searchTerm is not empty
            const getDrinks = async () => {
              const response = await axios.get(`${BASE_URL}search.php?s=${searchTerm}`)
              setDrinks(response.data.drinks)
              console.log(response)
            };
            getDrinks()
          } else {
            // Clear the drinks array when searchTerm is empty
            setDrinks([])
          }
        }, [searchTerm])

    let navigate = useNavigate()

    const showDrinks = (key) => {
        navigate(`${key}`)
    }

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    return (
        <div>
        <SearchBar onSearch={handleSearch} />
        {drinks.length === 0 ? (
            <h2 className="Loading">Please Enter a Drink</h2>
        ) : (
            <div className="drinks">

            {drinks.map((drink, key) => (
                <div key={drink.strDrink} onClick={() => showDrinks(key)} className="card">
                <img src={drink.strImageSource} alt={drink.strDrink} />
                <h3>{drink.strDrink}</h3>
                </div>
            ))}
            </div>
        )}
        </div>
        )
    }