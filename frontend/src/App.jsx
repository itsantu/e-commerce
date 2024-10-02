import './App.css'
import BestDeals from './components/BestDeals'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import NewHero from './components/NewHero'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <Header/>
      <NewHero/>
      <Categories/>
      <Featured/>
      <BestDeals/>
      <Footer/>
      {/* <ProductList/> */}
    </>
  )
}

export default App
