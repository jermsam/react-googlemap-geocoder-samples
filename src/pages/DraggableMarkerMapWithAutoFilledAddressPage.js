import React from 'react';
import {Container,Header,Divider,Segment} from 'semantic-ui-react' 
import DraggableMarkerMapWithAutoFilledAddress from './maps/DraggableMarkerMapWithAutoFilledAddress'


const DraggableMarkerMapWithAutoFilledAddressPage =() =><div>

<Container textAlign ='center'>
    <Divider hidden/>
        <Header as='h1' color='olive'>Draggable Marker Google Map With AutoFilled Form</Header>
    <Divider section hidden/>   
        <Segment padded stacked><DraggableMarkerMapWithAutoFilledAddress/></Segment>
    <Divider hidden/>
</Container>

</div>

export default DraggableMarkerMapWithAutoFilledAddressPage;
