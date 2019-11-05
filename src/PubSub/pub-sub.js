let pubSubList = {};
export let myState = {};


export let addToState = (property, data) => {
    nullCheck(property, myState);
    myState[property].push(data);
};

export let stateBind = () => {
    return myState;
};

export let findID = (id) =>{
    nullCheck("posts", myState);
    return myState.posts.findIndex((obj => obj.id == id));
};

/**
 *
 * @param {string} property
 * @returns {*[]}
 */
export let getState = (property) => {
    return [...myState[property]];
};

/**
 *
 * @param data the data you would like to publish
 * @param feed the feed your subscribers are subscribed to
 * @param {boolean} updateState should this publish be added to state?
 */
export let pub = (feed, data, updateState = true) => {
    nullCheck(feed);
    nullCheck(feed, myState);
    pubSubList[feed].map(cb => cb(data));

    myState[feed] = updateState ? [...myState[feed], data] : myState[feed];
};

/**
 *
 * @param feed the feed you would like to subscribe to
 * @param cb the call back function
 */
export let sub = (feed, cb) => {
    nullCheck(feed);
    pubSubList[feed] = [...pubSubList[feed], cb];
};

/**
 *
 * @param property
 * @param obj
 */
let nullCheck = (property, obj = pubSubList) => {
    obj = !obj ? {} : obj;
    obj[property] = !obj[property] ? [] : obj[property];
};

const rows = [
    {
        title: 'Rockets',
        description: 'Outer space rockets and moon landings',
        user: 'rocket man',
        up_vote: 24,
        down_vote: 4.0,
        id: 0
    },
    {title: 'Ice cream sandwich', description: "237", user: 9.0, up_vote: 37, down_vote: 4.3, id: 1},
    {title: 'Eclair', description: '262', user: 'bob', up_vote: 24, down_vote: 6.0, id: 2},
    {title: 'Cupcake', description: 'something good to eat', user: 'Goose', up_vote: 67, down_vote: 4.3, id: 3},
    {title: 'Gingerbread', description: 'Food that is alive', user: 'VoteMeUp', up_vote: 49, down_vote: 3.9, id: 4},
];
myState.posts = rows;
