import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'
import SearchBar from "./SearchBar"


export default function NameList() {

    const [searchTerm, setSearchTerm] = useState('') //Why do we need this here and in the search bar?
    const [drinks, setDrinks] = useState([])
    
    useEffect(()=>{
        const getDrinks = async() => {
            const response = await axios.get(`${BASE_URL}search.php?s=`)
            setDrinks(response.data.drinks)
        }
        getDrinks()
    },[searchTerm])

    let navigate = useNavigate()

    const showDrinks = (key) => {
        navigate(`${key}`)
    }

    // const handleSearch = (term) => {
    //     setSearchTerm(term)
    // }

    if (drinks.length === 0) {
        return <h2 className="Loading">Loading Please Wait...</h2>
    } else {
        return(
            <div className="drinks">
                <SearchBar 
                // onSearch={handleSearch}
                />

                {
                    drinks.map((drink, key) => (
                        <div key={drink.strDrink} onClick={()=>showDrinks(key)} className="card">
                        <img src={drink.strImageSource}></img>
                        <h3>{drink.strDrink}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }}