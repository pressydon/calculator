import React from 'react'
// import { useReducer } from 'react'
import {ACTIONS} from './App'
import './styles.css'

function DigitButton({dispatch,digit}) {
  return (
    <div>
        <button className='button' onClick={()=>dispatch({type:ACTIONS.ADD_DIGIT, payload:{digit}})}>
            {digit}
            </button>
      
    </div>
  )
}

export default DigitButton
