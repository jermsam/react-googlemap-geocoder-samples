
/* eslint-disable no-console */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Label,Grid,Header, Button} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";


const AnyReactComponent = ({ text }) =>
<Label as='a' content={text} icon='home' pointing ='below' color='orange' circular/>;

AnyReactComponent.propTypes={
  text:PropTypes.string.isRequired
}

const returnAddress =(lat,lng)=>{
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey('YO GOOGLE MAP KEY');
  // Enable or disable logs. Its optional.
Geocode.enableDebug();

// Get address from latidude & longitude.
return Geocode.fromLatLng(lat, lng).then(
  response =>response.results[0].formatted_address /* {
   // const address = response.results[0].formatted_address;

  //  console.log(address);
    return response.results[0]
  } ,
  error => {
    console.error(error);
    return []
  }
  */
);

}
/*
const returnLatLongFromAddress =(address)=>{
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo');
    // Enable or disable logs. Its optional.
  Geocode.enableDebug();
  
  // Get latidude & longitude from address.
Geocode.fromAddress(address).then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);
  
  }
 */ 

export default class DraggableMarkerMapWithAutoFilledAddress extends Component {
  state = {
 
    center: {
      lat: 0.3136791,
      lng: 32.5811944
    },
    zoom: 11,
    draggable: true,
    lat: 0.3136791,
    lng: 32.5811944,
   addressByMap:null,
   //   addressByHand:''
    
  }

  

  onMarkerInteraction=(childKey, childProps, mouse) =>{
    // function is just a stub to test callbacks
   // const addressByMap= returnAddress(mouse.lat,mouse.lng)
    this.setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng,
    });
   
  //  console.log('onMarkerInteraction called with',  mouse);
  }
  onMarkerInteraction3=()=> {
    // childKey, childProps, mouse
    this.setState({draggable: true});
    // function is just a stub to test callbacks  
    // console.log('onMarkerInteraction called with', childKey, childProps, mouse);

   // console.log('Finalposn: ', addressByMap);
 

  }
    onChange = ({center, zoom}) => {
      this.setState({
        center,
        zoom,      
      });
    }

    getIt =()=>{
      const {lat,lng,addressByMap} = this.state
     
      returnAddress(lat,lng).then(res=>this.setState({addressByMap:res}))
      console.log(addressByMap)
    }

  render() {


    const {center,zoom,draggable,lat,lng, addressByMap}=this.state;
    return ( // Important! Always set the container height explicitly
      <Grid columns={2} verticalAlign='middle'>
        <Grid.Column>
       
        <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
        draggable={draggable}
        onChange={this.onChange}
          bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}}
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
        </Grid.Column>
        <Grid.Column>
        <Header as='h1' color='teal'>PHYSICAL ADDRESS BY MAP: </Header>
        <Header> {addressByMap}</Header>
        <Button onClick={this.getIt}>Get IT</Button>
        </Grid.Column>
      </Grid>
    )
  }
}