import { Link, useLocation } from 'react-router-dom'

export default function Nav () {

    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/NameList">Search by Name</Link>
            <Link to="/IngredientList">Search by Ingredient</Link>
        </div>
    )
}