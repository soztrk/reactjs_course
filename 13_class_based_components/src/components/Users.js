import { Component,useState,useEffect } from 'react';
import User from './User';

import classes from './Users.module.css';

/*

class Users extends Component{

  constructor(){
    super()
    this.state = {
      showUsers:true
    }
  }

  componentDidUpdate(){
    if(this.props.users.length === 0){
      //throw new Error("No users found")
    }
  }

  toggleUsersHandler(){
    this.setState((currentState)=>{
      return{showUsers:!currentState.showUsers}
    })
  }

  render(){

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
        <div className={classes.users}>
          <button onClick={this.toggleUsersHandler.bind(this)}>
            {this.state.showUsers ? 'Hide' : 'Show'} Users
          </button>
          {this.state.showUsers && usersList}
        </div>
    );
  }
}
*/

const Users = (props) => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };


  useEffect(()=>{
    console.log("use effect")
    if(props.users.length === 1){
      throw new Error("No users found")
    }
  },[props.users])

  const usersList = (
    <ul>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
