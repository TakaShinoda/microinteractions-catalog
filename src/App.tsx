import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
  const [isLike, setIsLike] = useState(false)

  const handleClickButton = () => {
    console.log('click')
    setIsLike(!isLike)
    console.log(isLike)
  }

  return (
    <div className="App">
      <button className="button-style">
        <FontAwesomeIcon
          className={isLike ? "icon-like" : "icon-default"}
          icon={faHeart}
          onClick={handleClickButton}
        />
      </button>
    </div>
  )
}

export default App
