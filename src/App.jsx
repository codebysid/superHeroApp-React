import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from '../src/components/Search'
import Home from '../src/components/Home'

function App() {
  const [search, setSearch] = useState("")
  const [searchData,setSearchData]=useState([])

  const searchHero=async(e)=>{
    e.preventDefault()

    const options = {
      method: 'GET',
      headers: {
        //enter your api headers here
      }
    };
    let tmp=search.replace(" ","%20")

    const data=await fetch(`https://superhero-search.p.rapidapi.com/api/?hero=${tmp}`, options)
    const res=await data.json()

    if(res){
      setSearchData([res])
      setSearch("")
    }
  }
  
  return (
    <div className="App">
      <form onSubmit={searchHero}>
        <input 
        type="text"
        value={search}
        onChange={e=>setSearch(e.target.value)}
        required
        />
        <button 
        type="submit">
          Search
        </button>
      </form>

      <Search 
      searchData={searchData}
      setSearchData={setSearchData}
      />
      <Home/>
    </div>
  )
}

export default App
