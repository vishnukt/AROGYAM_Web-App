import React, { Component } from "react"
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'; 
import {db} from "./firebase";
import ReactLeafletSearch from "react-leaflet-search";
import './css/map.css'
import patientIcon from './markers/patient2.png'
import locationIcon from './markers/loc_mark.png'
import Basemap from './Basemaps';
import GeojsonLayer from './GeojsonLayer';
import Month from './month_menu'


L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


var myIcon =L.icon({
    //iconUrl:'http://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconUrl: patientIcon,
    //popupAnchor: [0, -41],
    //iconSize: [42, 42],
    iconSize: [50, 50],
    //iconAnchor: [50, 50],
    popupAnchor: [2, -40],
    shadowSize: [42, 42]
  });

  const mySearchIcon = L.icon({
    //iconUrl: "http://leafletjs.com/examples/custom-icons/leaf-green.png",
    iconUrl:locationIcon ,
    iconRetinaUrl: "marker-icon-2x.png",
    shadowUrl: "marker-shadow.png",
    iconSize: [48, 48],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [48, 48]
});


class map extends Component {
  state={
    location : null,
    center: [11.833778, 75.968628],
    lat: 11.833262,
    lng: 75.969977,
    zoom: 10,
    basemap: 'osm',
    count : 0,
    geojsonvisible: false,
    month : 'all'
  };

  onBMChange = (bm) => {
    this.setState({
      basemap: bm
    });
  }

  onMonChange = (mon) => {
    console.log("month",mon)
    db.collection('patient')
    .get()
    .then( snapshot => {
      const location = {
        lobb :[],
        m:2, }
      snapshot.forEach(doc=>{
        const data = doc.data()
        if (mon!=="all")
        {
          if (data.flag==="true" && data.month===mon)
        {
          //console.log("true",data.lat)
          if(data.lat!=null)
          {
            console.log("mon,name",data.name)
            location.lobb.push(data)
          }
        }
        }
        else
        {
          if (data.flag==="true")
        {
          if(data.lat!=null)
            {
              console.log("all,name",data.name)
              location.lobb.push(data)
            }
        }
        }
        
      })
      this.setState({location:location})
      //console.log(snapshot)
      //console.log(location)
    })
  }

  onGeojsonToggle = (e) => {
    this.setState({
      geojsonvisible: e.currentTarget.checked
    });
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
          if (data.flag==="true")
          {
            if(data.lat!=null)
            {
              console.log("first name",data.name)
              location.lobb.push(data)
            }
          }
        })
        this.setState({location:location})
        //console.log(snapshot)
        //console.log(location)
      })
      .catch(error => console.log(error));
  }
  
    render(){
        var center = [this.state.lat, this.state.lng];
    var z = this.state.zoom;

    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
    }
      return(
        <div>
          <Month month={this.state.month} onChange={this.onMonChange}/>
          <Map className='mapstyle' zoom={z} center={center}>
          <ReactLeafletSearch 
          className="custom-style"
          inputPlaceholder="Search Locations"
          showPopup={true}
          closeResultsOnClick={true}
          //provider="BingMap"
          provider="OpenStreetMap" 
          providerOptions={{region: "wayanad" }}
          markerIcon={mySearchIcon}
          position="topleft"
          zoom={15} 
          showMarker={true} />

      <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapsDict[this.state.basemap]}
        />
         <Basemap basemap={this.state.basemap} onChange={this.onBMChange} />
         
<div className="geojson-toggle">
  <label htmlFor="layertoggle">Toggle Geojson </label>
  <input type="checkbox"
    name="layertoggle" id="layertoggle"
    value={this.state.geojsonvisible} onChange={this.onGeojsonToggle} />
</div>

{this.state.geojsonvisible && 
  <GeojsonLayer url="geojson.json" />
}
             {this.state.location && this.state.location.lobb.map(({ lat, long, age, name, score}, index) => (
             <Marker position={[lat, long]} icon={myIcon} key={index}>
               <Popup>
                 Name : {name} , Age : {age}, Score : {score}
                </Popup>
              </Marker>
              ))}
           </Map>
           </div>         
      )
    }
  }

  export default map;