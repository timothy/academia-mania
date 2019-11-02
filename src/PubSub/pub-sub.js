let pubSubList = {};
export let myState = {};

/**
 *
 * @param data the data you would like to publish
 * @param feed the feed your subscribers are subscribed to
 * @param {boolean} updateState should this publish be added to state?
 */
export let pub = (feed, data, updateState = true) => {
    pubSubList[feed].map(cb => cb(data));

    myState[feed] = updateState ? [...myState[feed], data] : myState[feed];
};

/**
 *
 * @param feed the feed you would like to subscribe to
 * @param cb the call back function
 */
export let sub = (feed, cb) => {
    pubSubList[feed] = [...pubSubList[feed], cb];
};


