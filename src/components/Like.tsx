import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Like = () => {
  const [isLike, setIsLike] = useState(false)

  const handleClickButton = () => {
    setIsLike(!isLike)
  }
  return (
    <>
      <button className="button-style">
        <FontAwesomeIcon
          className={isLike ? 'icon-like' : 'icon-default'}
          icon={faHeart}
          onClick={handleClickButton}
        />
      </button>
    </>
  )
}
