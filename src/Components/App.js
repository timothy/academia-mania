import React, {Component, Fragment} from 'react';
import {Header, Footer, Body} from "./Layouts"

export default class extends Component {
    render() {
        return <Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </Fragment>
    }
}
