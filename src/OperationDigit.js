import React from 'react'
import {ACTIONS} from './App'
import './styles.css'

function OperationDigit({dispatch, operation}) {
  return (
    <div>

        <button className='button' onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERATION, payload:{operation}})}>
            {operation}
        </button>
      
    </div>
  )
}

export default OperationDigit
