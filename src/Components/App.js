import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Header, Footer, Body, Posts} from "./Layouts"

export default class extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header>
                    <Switch>
                        <Route path="/" exact component={Body} />
                        <Route path="/posts/:id" exact component={Posts} />
                        <Route path="/posts" exact component={Posts} />
                        <Route path="/1" exact component={Footer} />
                        <Route path="/" render={(props) => {
                            console.log(props.location);
                            return (<div>404 Path "{props.location.pathname}" not found</div>)
                        }} />
                    </Switch>
                </Header>
            </BrowserRouter>
        )
    }
}
