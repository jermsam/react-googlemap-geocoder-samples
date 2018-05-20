import React from 'react'
import {Grid, Header,Container,Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


export default function LandingPage(){
    return <div>
    <Container text textAlign='center'>
    <Divider section hidden/>
    <Header>Using Google map React</Header>
    <Divider hidden/>
    (Google Map React & React Geocode)
    <Divider hidden/>
    <Grid verticalAlign='middle'>
    <Grid.Column>
    <Divider hidden/>
    In this sample we intend to demonstrate a precise way of positioning an outlet 
    <Divider hidden/>
        <Header><Link to='/hellomap'>Hello React Map</Link></Header>
    <Divider hidden/>
    <Header><Link to='draggablemarker'>Draggable Marker React Map</Link></Header>
    <Divider hidden/>
    <Header><Link to='autofilladdress'>Draggable Marker React Map Auto fill Address</Link></Header>
    <Divider hidden/>
    <Header><Link to='autoposition'>Auto Marker Positioning From Form Inputs</Link></Header>
    <Divider hidden/>
    </Grid.Column>
    </Grid>
    
    </Container>
   
    </div>
}