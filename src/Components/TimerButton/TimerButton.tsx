import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css'


const TimerButton = ({ buttonAction, buttonValue})=>(

    <div className='button-container' onClick={() => buttonAction()}>

        <p className={`${buttonValue.toLowerCase()}-timer`}> {buttonValue}  </p>
    </div>
    
    
    )

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired
}

export default TimerButton;
