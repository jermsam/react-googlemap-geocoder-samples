import React from 'react';
import {Container,Header,Divider,Segment} from 'semantic-ui-react' 
import DraggableMarkerMap from './maps/DraggableMarkerMap'


const DraggableMarkerMapPage =() =><div>

<Container text textAlign ='center'>
    <Divider hidden/>
        <Header as='h1' color='olive'>Draggable Marker Google Map</Header>
    <Divider section hidden/>   
        <Segment padded stacked><DraggableMarkerMap/></Segment>
    <Divider hidden/>
</Container>

</div>

export default DraggableMarkerMapPage;
