import React from "react";
import { Routes, Route} from 'react-router-dom'
import './css/App.css'
import NAVBAR from './componentes/NAVBAR';
import FOOTER from './componentes/FOOTER';
import BEVERAGES from './componentes/BEVERAGES';
import CONTACT from './componentes/CONTACT';
import DELIVERY from './componentes/DELIVERY';
import FOOD from './componentes/FOOD';
import HOME from './componentes/HOME';
import PROMOTION from './componentes/PROMOTION';






function App() {

  return (
    <>

<NAVBAR />
<Routes>

<Route index element={ <HOME /> }/> 
<Route path='/home' element={ <HOME /> }></Route>
<Route path='/food' element={ <FOOD /> }></Route>
<Route path='/promotion' element={ <PROMOTION /> }></Route>
<Route path='/beverages' element={ <BEVERAGES /> }></Route>
<Route path='/delivery' element={ <DELIVERY  /> }></Route>
<Route path='/contact' element={ <CONTACT  /> }></Route>

</Routes>
<FOOTER />


    </>
  )
}

export default App;
