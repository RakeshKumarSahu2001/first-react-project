import React from 'react';
import Card from './Card';
import Data from './Data';


const Cvalue = (value) => {
    return (<Card
        key={value.id}
        name={value.name}
        srcimage={value.srcimage}
        titel={value.titel}
        link={value.link} />);
}


function App() {
    return (<>
        {
            Data.map(Cvalue)
        }
    </>)
}
export default App;