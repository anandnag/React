import React from 'react';
import HackList from '../containers/hack-list';
import HackDetails from '../containers/hack-detail';
import EventList from '../containers/event-list';
require('../../scss/style.scss');


const App = () => (
    <div>
        <EventList />
        <h2>Hackathon Details</h2>
        <HackDetails />
    </div>
);

export default App;
