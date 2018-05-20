import React from 'react';
import {Container,Header,Divider,Segment} from 'semantic-ui-react' 
import DraggableMarkerMapWithAutoFilledForm from './maps/DraggableMarkerMapWithAutoFilledForm'


const DraggableMarkerMapWithAutoFilledFormPage =() =><div>

<Container textAlign ='center'>
    <Divider hidden/>
        <Header as='h1' color='olive'>Draggable Marker Google Map With AutoFilled Form</Header>
    <Divider section hidden/>   
        <Segment padded stacked><DraggableMarkerMapWithAutoFilledForm/></Segment>
    <Divider hidden/>
</Container>

</div>

export default DraggableMarkerMapWithAutoFilledFormPage;
