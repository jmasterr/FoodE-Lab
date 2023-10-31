import { Route, Routes } from 'react-router-dom'
import NameList from './NameList'
// import NamePage from './NamePage'
import IngredientList from './IngredientList'
// import IngredientPage from './IngredientPage'
import Home from './Home'

export default function Main () {
    
    return (
        <div className="Main">
            <Routes>
                <Route path="/NameList" element={<NameList/>}/>
                {/* <Route path="/NameList/:id" element={<NamePage/>}/> */}
                <Route path="/IngredientList" element={<IngredientList/>}/>
                {/* <Route path="/IngredientList/:id" element={<IngredientPage/>}/> */}
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}