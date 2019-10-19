import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Header, Footer, Body} from "./Layouts"

export default class extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header>
                    <Switch>
                        <Route path="/" exact component={Body} />
                        <Route path="/1" exact component={Footer} />
                        <Route path="/" render={() => <div>404 Path not found</div>} />
                    </Switch>
                </Header>
            </BrowserRouter>
        )
    }
}
