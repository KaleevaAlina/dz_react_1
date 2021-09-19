import React from 'react';
import ReactDOM from 'react-dom';
let usern = 
   {users: [
    {id:"uniq1", name:"Paul"},
    {id:"uniq2", name:"Mary"},
    {id:"uniq3", name:"Viktor"},
    {id:"uniq4", name:"Suzanna"},
    {id:"uniq5", name:"Peter"},
    {id:"uniq6", name:"Vladislav"},
    {id:"uniq7", name:"Anna"}
]};
class UserList extends React.Component {
  render() {
    return <div>
			<span>It's user: </span>
	</div>;
  }
}
class User extends React.Component {
  render() {
    this.props = "Alina";
    return <div>
               <span><UserList />{this.props}</span>
            </div>;
  }
}
const userStyle = {
  color:'red', 
  fontSize: '25px',
  fontFamily:'Verdana'
  

};
const userClassName = 'usStyle';
let myObj = {"name":"Alina", "age":19};
ReactDOM.render(
  <div  className = {userClassName} style= {userStyle}>
    {myObj.name} {myObj.age}
   Пользователь: {usern.users.id}
    <User/>
  </div>,
  document.getElementById("root")
)


