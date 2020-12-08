import React, { useEffect } from 'react'
import testData from './assets/test-data.json'
// import axios from 'axios'
//components
import Search from './components/Search'
import InfoBar from './components/InfoBar'
import MainInterface from './components/MainInterface'
import LineCanvas from './components/LineCanvas'
import MoleField from './components/MoleField'

//assets
import moleIdle from './assets/mole-idle.gif'
import useGlobalState from './hooks/useGlobalState'
export const StateContext = React.createContext()

function App() {

  console.log(testData)
  const [state, dispatch] = useGlobalState()

  useEffect(() => {
    dispatch({
      type: "set_current_report",
      report: testData
    })
  }, [dispatch])


  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <InfoBar />
      <MainInterface />
      <MoleField />
      <LineCanvas />
    </StateContext.Provider>
  )
}

export default App
