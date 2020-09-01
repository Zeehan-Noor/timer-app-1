import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css';
import Button from '@material-ui/core/Button';


const TimerButton = ({ buttonAction, buttonValue})=>(

    <div className='button-container' onClick={() => buttonAction()}>

        <Button className={`${buttonValue.toLowerCase()}-timer`} variant="contained" color="primary">
        {buttonValue}
      </Button>
    
    
    </div>
    
    
    )

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired
}

export default TimerButton;
