
/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Label} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) =>
<Label as='a' content={text} icon='home' pointing ='below' color='orange' circular/>;

AnyReactComponent.propTypes={
  text:PropTypes.string.isRequired
}

export default class DraggableMarkerMap extends Component {
  state = {
 
    center: {
      lat: -0.6167245,
      lng: 30.337157
    },
    zoom: 11,
    draggable: true,
    lat: -0.6167245,
    lng: 30.337844
  }

  onMarkerInteraction=(childKey, childProps, mouse) =>{
    // function is just a stub to test callbacks
    this.setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng
    });
   
    console.log('onMarkerInteraction called with', childKey, childProps, mouse);
  }
  onMarkerInteraction3=(childKey, childProps, mouse)=> {
    this.setState({draggable: true});
    // function is just a stub to test callbacks  
    console.log('onMarkerInteraction called with', childKey, childProps, mouse);
    
  }
    onChange = ({center, zoom}) => {
      this.setState({
        center,
        zoom,      
      });
    }

  render() {


    const {center,zoom,draggable,lat,lng}=this.state;
    return (
       // Important! Always set the container height explicitly
       <div style={{ height: '75vh', width: '100%' }}>
       <GoogleMapReact
       draggable={draggable}
       onChange={this.onChange}
         bootstrapURLKeys={{ key: 'YO GOOGLE MAP KEY'}}
         center={center}
         zoom={zoom}
         onChildMouseDown={this.onMarkerInteraction}
                   onChildMouseUp={this.onMarkerInteraction3}
                   onChildMouseMove={this.onMarkerInteraction}    
        onChildClick={() => console.log('child click')}
        onClick={() => console.log('mapClick')}
       >
         <AnyReactComponent
         
           lat={lat}
           lng={lng}
           text='Warehouse'
         />
       </GoogleMapReact>
     </div>
    )
  }
}