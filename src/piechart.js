import * as React from "react";
import { Chart } from "react-google-charts";
import { db } from "./firebase";
 
class piechart extends React.Component {
    state={
        notsc :0,
        posi:0,
        nega:0
      };
    componentDidMount(){
        console.log("mountedg")
        db.collection('patient')
          .get()
          .then( snapshot => {
            snapshot.forEach(doc=>{
              const data = doc.data()
              if(data.flag==="Not Scanned")
              {
                this.setState({ notsc: this.state.notsc + 1 })
              }
              else if(data.flag==="true")
              {
                this.setState({ posi: this.state.posi + 1 })
              }
              else if(data.flag==="false")
              {
                this.setState({ nega: this.state.nega + 1 })
              }
            })
          })
          .catch(error => console.log(error));
      }
      
  render() {
    return (
        <Chart
        chartType="PieChart"
        width={'1200px'}
        height={'400px'}
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Not Consulted', this.state.notsc],
    ['Positive', this.state.posi],
    ['Negative', this.state.nega]
  ]}
  options={{
    title: 'User Statistics',
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
    );
  }
}

export default piechart;