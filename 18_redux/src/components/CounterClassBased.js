import classes from './Counter.module.css';
import {Component} from "react"
import {connect} from "react-redux"

class CounterClassBased extends Component {
    
    incrementHanlder(){
        this.props.increment()
    }

    decrenentHandler(){
        this.props.decrement()
    }

    toggleCounterHandler(){

    }

    render(){
        return(
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHanlder.bind(this)}>Increment</button>
                    <button onClick={this.decrenentHandler.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter:state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch({type:"inc"}),
        decrement: () => dispatch({type:"dec"})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterClassBased)