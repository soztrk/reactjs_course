import React, { Component } from "react";
import Transition from "react-transition-group/Transition"
import CSSTransition from "react-transition-group/CSSTransition"

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Box from "./components/Box/Box"

class App extends Component {

  state = {
    modalIsOpen:false,
    showBlock:false,
    showBox:false,
    showBox2:false
  }

  showModal = () => {
    this.setState({modalIsOpen:true})
  }

  closeModal = () => {
    this.setState({modalIsOpen:false})
  }

  render() {

    return (
      <div className="App">

        <h1>React Animations</h1>

        <div style={{margin:"20px"}}>
          <button className="Button" onClick={()=>this.setState(prevState=>({showBlock: !prevState.showBlock}))}>Toggle Block</button>
          <button className="Button" onClick={()=>this.setState(prevState=>({showBox: !prevState.showBox}))}>Toggle Box</button>
          <button className="Button" onClick={()=>this.setState(prevState=>({showBox2: !prevState.showBox2}))}>Toggle Box 2</button>
        </div>

        <Transition 
          in={this.state.showBlock} 
          timeout={1000} 
          mountOnEnter 
          unmountOnExit
          onEnter={()=>console.log("on Enter")}
          onEntering={()=>console.log("on Entering")}
          onEntered={()=>console.log("on Entered")}
          onExit={()=>console.log("on Exit")}
          onExiting={()=>console.log("on Exiting")}
          onExited={()=>console.log("on Exited")}
        >
          {
            state => 
            <div style={{
              backgroundColor:"red",
              width:100,
              height:100,
              margin:"20px auto",
              transition: "opacity 0.5s ease-out",
              opacity: state === "exiting" ? 0 : 1
            }}></div>
          }
        </Transition>


        <CSSTransition
        in={this.state.showBox} 
        timeout={{enter:400,exit:800}} 
        mountOnEnter 
        unmountOnExit
        classNames="fade-slide"
        >
          <Box color="green" />
        </CSSTransition>

        <CSSTransition
        in={this.state.showBox2} 
        timeout={{enter:400,exit:800}} 
        mountOnEnter 
        unmountOnExit
        classNames={{
          enter:"",
          enterActive:"box-show",
          exit:"",
          exitActive:"box-hide",
          appear:"",
          appearActive:"box-boot"

        }}
        >
          <Box color="blue" />
        </CSSTransition>
         

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modalIsOpen} />

        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
