import React from 'react';
import {Route,Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HelloMapPage from './pages/HelloMapPage'
import DraggableMarkerMaPage from './pages/DraggableMarkerMapPage'
import DraggableMarkerMapWithAutoFilledAddressPage from './pages/DraggableMarkerMapWithAutoFilledAddressPage'
import DraggableMarkerMapWithAutoFilledFormPage from './pages/DraggableMarkerMapWithAutoFilledFormPage'
import Header from './pages/nav/Header'

const App =() =><div>
<Header/>
<Switch>
    <Route path='/autoposition' exact component={DraggableMarkerMapWithAutoFilledFormPage}/>
    <Route path='/autofilladdress' exact component={DraggableMarkerMapWithAutoFilledAddressPage}/>
    <Route path='/draggablemarker' exact component={DraggableMarkerMaPage}/>
    <Route path='/hellomap' exact component={HelloMapPage}/>
    <Route path='/' exact component={LandingPage}/>
</Switch>

</div>
export default App;
