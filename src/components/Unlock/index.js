import {useState} from 'react'
import {BgContainer, ImageEl, Status, ButtonEl} from './styledComponents'

const Unlock = () => {
  const [currentState, changeState] = useState(false)

  const changeCurrentState = () => {
    changeState(prevState => !prevState)
  }

  return (
    <>
      {currentState ? (
        <BgContainer>
          <ImageEl
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Status>Your Device is Unlocked</Status>
          <ButtonEl onClick={changeCurrentState}>Lock</ButtonEl>
        </BgContainer>
      ) : (
        <BgContainer>
          <ImageEl
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Status>Your Device is Locked</Status>
          <ButtonEl onClick={changeCurrentState}>Unlock</ButtonEl>
        </BgContainer>
      )}
    </>
  )
}

export default Unlock
