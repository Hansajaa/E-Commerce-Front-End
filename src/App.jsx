import './App.css'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import MenCategorySection from './components/MenCategorySection'
import RegisterPage from './components/RegisterPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WomenCategorySection from './components/WomenCategorySection'
import ItemAddPage from './components/ItemAddPage'
import BabyCategorySection from './components/BabyCategorySection'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage></HomePage>}/>
          <Route path='login' element={<LoginPage></LoginPage>}/>
          <Route path='signup' element={<RegisterPage></RegisterPage>}/>
          <Route path='menCategory' element={<MenCategorySection></MenCategorySection>}></Route>
          <Route path='womenCategory' element={<WomenCategorySection></WomenCategorySection>}></Route>
          <Route path='addItem' element={<ItemAddPage></ItemAddPage>}></Route>
          <Route path='babyCategory' element={<BabyCategorySection></BabyCategorySection>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
