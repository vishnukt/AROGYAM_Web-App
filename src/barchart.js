import * as React from "react";
import { Chart } from "react-google-charts";
import { db } from "./firebase";
 
class barchart extends React.Component {
    state={
        jan:0,
        feb:0,
        mar:0,
        apr:0,
        may:0,
        jun:0,
        jul:0,
        aug:0,
        sep:0,
        oct:0,
        nov:0,
        dec:0,
        njan:0,
        nfeb:0,
        nmar:0,
        napr:0,
        nmay:0,
        njun:0,
        njul:0,
        naug:0,
        nsep:0,
        noct:0,
        nnov:0,
        ndec:0
      };
    componentDidMount(){
        console.log("mountedg")
        db.collection('patient')
          .get()
          .then( snapshot => {
            snapshot.forEach(doc=>{
              const data = doc.data()
              console.log("flagf",data.flag)
              if(data.flag==="true")
              {
                if (data.month==='1')
              {
                this.setState({ jan: this.state.jan + 1 })
              }
              else if(data.month==='2')
              {
                this.setState({ feb: this.state.feb + 1 })
              }
              else if(data.month==='3')
              {
                this.setState({ mar: this.state.mar + 1 })
              }
              else if(data.month==='4')
              {
                this.setState({ apr: this.state.apr + 1 })
              }
              else if(data.month==='5')
              {
                this.setState({ may: this.state.may + 1 })
              }
              else if(data.month==='6')
              {
                this.setState({ jun: this.state.jun + 1 })
              }
              else if(data.month==='7')
              {
                this.setState({ jul: this.state.jul + 1 })
              }
              else if(data.month==='8')
              {
                this.setState({ aug: this.state.aug + 1 })
              }
              else if(data.month==='9')
              {
                this.setState({ sep: this.state.sep + 1 })
              }
              else if(data.month==='10')
              {
                this.setState({ oct: this.state.oct + 1 })
              }
              else if(data.month==='11')
              {
                this.setState({ nov: this.state.nov + 1 })
              }
              else if(data.month==='12')
              {
                this.setState({ dec: this.state.dec + 1 })
              }
              }
              else if(data.flag==="false")
              {
                if (data.month==='1')
              {
                this.setState({ njan: this.state.njan + 1 })
              }
              else if(data.month==='2')
              {
                this.setState({ nfeb: this.state.nfeb + 1 })
              }
              else if(data.month==='3')
              {
                this.setState({ nmar: this.state.nmar + 1 })
              }
              else if(data.month==='4')
              {
                this.setState({ napr: this.state.napr + 1 })
              }
              else if(data.month==='5')
              {
                this.setState({ nmay: this.state.nmay + 1 })
              }
              else if(data.month==='6')
              {
                this.setState({ njun: this.state.njun + 1 })
              }
              else if(data.month==='7')
              {
                this.setState({ njul: this.state.njul + 1 })
                //console.log("countjul",this.state.jul)
              }
              else if(data.month==='8')
              {
                this.setState({ naug: this.state.naug + 1 })
              }
              else if(data.month==='9')
              {
                this.setState({ nsep: this.state.nsep + 1 })
              }
              else if(data.month==='10')
              {
                this.setState({ noct: this.state.noct + 1 })
              }
              else if(data.month==='11')
              {
                this.setState({ nnov: this.state.nnov + 1 })
              }
              else if(data.month==='12')
              {
                this.setState({ ndec: this.state.ndec + 1 })
              }
              }
            })
            //console.log(snapshot)
            //console.log(location)
            //console.log(location[1].coordinates.latitude)
          })
          .catch(error => console.log(error));
      }
      
  render() {
      console.log("count njul",this.state.jul)
    return (
        <Chart className="bar"
        width={'1200px'}
        height={'400px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Month', 'Positive', 'Negative'],
          ['Jan', this.state.jan, this.state.njan],
          ['Feb', this.state.feb, this.state.nfeb],
          ['Mar', this.state.mar, this.state.nmar],
          ['Apr', this.state.apr, this.state.napr],
          ['May', this.state.may, this.state.nmay],
          ['Jun', this.state.jun, this.state.njun],
          ['Jul', this.state.jul, this.state.njul],
          ['Aug', this.state.aug, this.state.naug],
          ['Sept', this.state.sep, this.state.nsep],
          ['Oct', this.state.oct, this.state.noct],
          ['Nov', this.state.nov, this.state.nnov],
          ['Dec', this.state.dec, this.state.ndec],
        ]}
        options={{
          // Material design options
          chart: {
            title: 'Patient Count Bar Chart',
            subtitle: '2020',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />
    );
  }
}

export default barchart;