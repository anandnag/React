import {combineReducers} from 'redux';
import HackList from './reducer-hacklist';
import ActiveEvent from './reducer-active-event';
import Events from './reducer-event-list'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    hacks: HackList,
    activeEvent: ActiveEvent,
    events: Events
});

export default allReducers
