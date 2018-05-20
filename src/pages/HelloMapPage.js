import React from 'react';
import {Container,Header,Divider,Segment} from 'semantic-ui-react' 
import HelloMap from './maps/HelloMap'


const HelloMapPage =() =><div>

<Container text textAlign ='center'>
    <Divider hidden/>
        <Header as='h1' color='olive'>Hello World Google Map</Header>
    <Divider section hidden/>   
        <Segment padded stacked><HelloMap/></Segment>
    <Divider hidden/>
</Container>

</div>

export default HelloMapPage;
