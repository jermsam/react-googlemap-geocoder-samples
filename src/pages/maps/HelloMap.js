

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Label} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) =>
<Label as='a' content={text} icon='home' pointing ='below' color='orange' circular/>;

AnyReactComponent.propTypes={
  text:PropTypes.string.isRequired
}

export default class HelloMap extends Component {
  state = {
    center: {
      lat: -0.6167245,
      lng: 30.33
    },
    zoom: 11,
 
  }

  

  render() {


    const {center,zoom}=this.state;
    return (
       // Important! Always set the container height explicitly
       <div style={{ height: '75vh', width: '100%' }}>
       <GoogleMapReact
      
         bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}}
         defaultCenter={center}
         defaultZoom={zoom}
         
       >
         <AnyReactComponent
         
           lat={-0.6167245}
           lng={30.337844}
           text='Warehouse'
         />
       </GoogleMapReact>
     </div>
    )
  }
}