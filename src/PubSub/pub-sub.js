import {BarChart as ResearchIcon, EmojiObjects as TheoryIcon, Public as DiscoveryIcon} from "@material-ui/icons";
//import React from "react";

let pubSubList = {};
export let myState = {};


export let addToState = (property, data) => {
    nullCheck(property, myState);
    myState[property].push(data);
};

export let updateState = (property, data) => {
    nullCheck(property, myState);
    myState[property] = [...data];
};

export let stateBind = () => {
    return myState;
};

export let findID = (id) => {
    nullCheck("posts", myState);
    return myState.posts.findIndex((obj => obj.id === id));
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
/*{feed: 'Research Feed', post: 'Post Research', icon: <ResearchIcon/>},
{feed: 'Discovery Feed', post: 'Post Discovery', icon: <DiscoveryIcon/>},
{feed: 'Theory Feed', post: 'Post Theory', icon: <TheoryIcon/>}*/
const rows = [
    {
        title: 'Rockets',
        description: 'Outer space rockets and moon landings',
        topic: "Research",
        user: 'Space Cadet',
        up_vote: 24,
        down_vote: 4.0,
        id: 0
    },
    {
        title: 'Nuclear fusion',
        description: "Creating energy that is really power full",
        topic: "Discovery",
        user: "Jake",
        up_vote: 37,
        down_vote: 4,
        id: 1
    },
    {
        title: 'Hashing algorithms',
        description: 'Hashing everything to get O(1)',
        topic: "Theory",
        user: 'Bob',
        up_vote: 24,
        down_vote: 6.0,
        id: 2
    },
    {
        title: 'Sound waves',
        description: 'breaking glass, tables, brick, and wood using sound waves',
        topic: "Discovery",
        user: 'Goose',
        up_vote: 67,
        down_vote: 4,
        id: 3
    },
    {
        title: 'Gravity',
        description: 'Gravitation in the center of the earth',
        topic: "Theory",
        user: 'VoteMeUp',
        up_vote: 49,
        down_vote: 3,
        id: 4
    },
];

const sampleComments = [{
    header: "Comments",
    comments: [
        {
            avatar: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
            author: "Matt",
            metadata: "Today at 5:42PM",
            text: "How artistic!",
            actions: [{action: "Reply"}],
            group: [
                {
                    avatar: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
                    author: "Jenny Hess",
                    metadata: "Just now",
                    text: "This has been very useful for my research. Thanks as well!",
                    actions: [{action: "Reply"}],
                    group: []
                }
            ]
        },
        {
            avatar: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg",
            author: "Elliot Fu",
            metadata: "Yesterday at 12:30AM",
            text: "Nice research. Thanks!",
            actions: [{action: "Reply"}],
            group: []
        },
        {
            avatar: "https://react.semantic-ui.com/images/avatar/small/joe.jpg",
            author: "Joe Henderson",
            metadata: "5 days ago",
            text: "Dude, this is awesome. Thanks so much",
            actions: [{action: "Reply"}],
            group: []
        }
    ]
}];

myState.posts = rows;
myState.comments = sampleComments;