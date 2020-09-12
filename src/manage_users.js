import React, { Component } from 'react'
import './css/table.css'
import {db} from "./firebase";

class manage_users extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         location : null
      }
   }
   componentDidMount(){
    console.log("mountedg")
    db.collection('patient')
      .get()
      .then( snapshot => {
        const location = {
          lobb :[],
          m:2, }
        snapshot.forEach(doc=>{
          const data = doc.data()
          location.lobb.push(data)
        })
        this.setState({location:location})
        console.log("loc",this.state.location)
      })
      .catch(error => console.log(error));
  }
   renderTableHeader() {
     if(this.state.location)
     {
      let header = Object.keys(this.state.location.lobb[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
     }
 }
   renderTableData() {
    return this.state.location && this.state.location.lobb.map(({name,age,score,flag}, index) => {
       return (
          <tr key={index}>
            <td>{index}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{score}</td>
              <td>{flag}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>Users</h1>
          <table id='students'>
             <tbody>
             <tr>
               <th>Sl NO</th>
               <th>NAME</th>
               <th>AGE</th>
               <th>SCORE</th>
               <th>STATUS</th>
              </tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default manage_users;