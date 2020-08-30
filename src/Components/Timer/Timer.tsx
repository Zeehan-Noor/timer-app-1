import React from 'react';
import './Timer.css';
import TimerButton from './../TimerButton/TimerButton'



type timerStateType = {
    minutes: number,
    seconds: number,
    isOn: boolean,
   
}



class Timer extends React.Component<{}, timerStateType> {
    myInterval: ReturnType<typeof setInterval>;
    constructor(props: any) {
        super(props);
        this.state = {
            minutes: 25,
            seconds: 0,
            isOn: false,
        };
        this.myInterval = props
        this.startTimer = this.startTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        
        /*the event handler method loses its implicitly bound context. When the event occurs and the handler is invoked, the this value falls back to default binding and is set to undefined , as class declarations and prototype methods run in strict mode.
When we bind the this of the event handler to the component instance in the constructor, we can pass it as a callback without worrying about it losing its context.
Arrow functions are exempt from this behavior because they use lexical this binding which automatically binds them to the scope they are defined in.        
        */
    }

    startTimer () {
        console.log('Starting timer.');
        if (this.state.isOn === true) {
            return;
        }
        
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                }));
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59,
                    }));
                }
            }
        }, 1000);
        this.setState({ isOn: true });
    }


    stopTimer = () => {
        console.log('Stoping timer.');
        clearInterval(this.myInterval);
        this.setState(
            { isOn: false }
        )
    }

    resetTimer() {
        console.log('Resetting timer.');
        this.stopTimer();
        this.setState({
            minutes: 25,
            seconds: 0,
        })

    }

    render = () => {
        const { seconds, minutes } = this.state;

        return (
            <div className="timer-container">
                <div className="time-display">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}

                </div>
                <div className="timer-button-container">
                    <TimerButton
                       
                        buttonAction={this.startTimer}
                        buttonValue={'Start'} />
                    <TimerButton
                        
                        buttonAction={this.stopTimer}
                        buttonValue={'Stop'} />
                    <TimerButton
                        
                        buttonAction={this.resetTimer}
                        buttonValue={'Reset'} />
                </div>
            </div>
        );
    };
}

export default Timer;