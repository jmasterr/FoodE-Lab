import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'


export default function NameList() {

    const [drinks, setDrinks] = useState([])

    useEffect(()=>{
        const getDrinks = async() => {
            const response = await axios.get(`${BASE_URL}search.php?s=`)
            setDrinks(response.data.drinks)
            console.log(response)
        }
        getDrinks()
    },[])

    let navigate = useNavigate()

    const showDrinks = (key) => {
        navigate(`${key}`)
    }

    if (drinks.length === 0) {
        return <h2 className="Loading">Loading Please Wait...</h2>
    } else {
        return(
            <div className="drinks">

                {
                    drinks.map((drink, key) => (
                        <div key={drink.strDrink} onClick={()=>showDrinks(key)} className="card">
                        <h3>{drink.strImageSource}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }}