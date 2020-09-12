import React from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import "./css/GeojsonLayer.css"

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    console.log('contructor');
  }

  render() {
    console.log('render');

    console.info(this.state.data);
    return (
      <FeatureGroup>
        {this.state.data.map(f => {
          return <GeoJSON key={f.properties} data={f}>
             <Popup>
             CEN_2001 : {f.properties.CEN_2001} <br></br>
             SUB_DIST : {f.properties.SUB_DIST} <br></br>
             TYPE     : {f.properties.TYPE} <br></br>
             STATE    : {f.properties.STATE} <br></br>
             NAME     : {f.properties.NAME} <br></br>
             DISTRICT : {f.properties.DISTRICT}
             </Popup>
          </GeoJSON>
        })}
      </FeatureGroup>
    );
  }

  componentDidMount() {
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('will unmount');

  }

  fetchData(url) {
    let request = fetch(url);

    request
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data.features
        });
      }, (error) => {
        console.error(error);
      });
  }
}