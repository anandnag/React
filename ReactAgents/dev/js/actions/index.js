export const selectHack = (hack) => {
    return {
        type: 'HACK_SELECTED',
        payload: hack
    }
};

export const selectEvent = (event) => {
    return {
        type: 'EVENT_SELECTED',
        payload: event
    }
};

