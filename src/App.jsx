import './App.css'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import { useState, useEffect } from 'react'

function App() {

    const [location, setLocation] = useState({})
    const [searchId, setSearchId] = useState('')

    const [page, setPage] = useState(1)
    const elementsForPage = 9

    const lastIndex = elementsForPage * page
    const firstIndex = lastIndex - elementsForPage

    const elementsPagined = searchId.residents?.slice(firstIndex, lastIndex)

    useEffect(() => {

      const randomId = Math.floor((Math.random() * 126) + 1)

        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(resp => {
            setLocation(resp.data)
        })
        .catch(error => console.error(error))
    }, [])

    const submit = (e) => {

        e.preventDefault()

        axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
        .then(resp => {
            setSearchId(resp.data)
            console.log(resp.data)
        })
        .catch(error => console.error(error))
    }

  return (
    <>
    <section className='first-section'>
      <div className='div-logo'>
          <img src="/src/assets/logo.svg" alt="logo" />
      </div>
      <nav>
        <div className='nav-elements'>
          <form className='nav-form' onSubmit={(e) => submit(e)}>
                <input className='nav-input' 
                type="text" 
                cols={50}
                rows={1}
                placeholder="Buscar locación por Id"
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>
                <div className='menu-buttons'>

                  <button className='decrement-button' onClick={() => (setPage(page -1))}>Anterior</button>
                
                  <button className='increment-button' onClick={() => (setPage(page +1))}>Siguiente</button>

                </div>

                <div className='info-location'>
                  <Location
                    info={searchId}
                  />
                </div>
        </div>
        
            </nav>
                
            <main>
              <div className='main-elements'>
            <ul className='residents-list'>
                {
                  elementsPagined?.map(resident => (
                    <ResidentInfo 
                key={resident}
                url={resident}
                />
                ))
              }
            </ul>
              </div>
      </main>   
                <div className='menu-buttons'>
                  <button className='decrement-button' onClick={() => (setPage(page -1))}>Anterior</button>
                
                  <button className='increment-button' onClick={() => (setPage(page +1))}>Siguiente</button>
                </div>
    </section>
                
    </>
  )
}

export default App
