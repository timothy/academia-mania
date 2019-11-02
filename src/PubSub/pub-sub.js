let pubSubList = {};

/**
 *
 * @param data the data you would like to publish
 * @param feed the feed your subscribers are subscribed to
 */
export let pub = (feed, data) => {
    pubSubList[feed].map(cb => cb(data));
};

/**
 *
 * @param feed the feed you would like to subscribe to
 * @param cb the call back function
 */
export let sub = (feed, cb) => {
    pubSubList[feed] = [...pubSubList[feed], cb];
};

export let myState = {};
