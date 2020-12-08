import React, { useState, useContext } from 'react'
import axios from 'axios'
import { StateContext } from '../App'

function Search() {

  const { state, dispatch } = useContext(StateContext)
  const [url, setURL] = useState("")

  async function submitURL() {
    console.log("you clicked the button")
    // console.log("please wait...")
    // const { data } = await axios.post('/api/analyze-url', { url })
    // dispatch({
    //   type: "set_current_report",
    //   report: data
    // })
  }

  return (
    <div id="search">
      <input
        type="url"
        value={url}
        onChange={e => { setURL(e.target.value) }}
        placeholder="enter a website"
      />
      <button onClick={submitURL}>ANALYZE</button>

    </div>
  )
}

export default Search
