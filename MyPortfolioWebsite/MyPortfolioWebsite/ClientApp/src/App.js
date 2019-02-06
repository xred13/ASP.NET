import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Aboutme } from './components/Aboutme';
import { Contacts } from './components/Contacts';
import { More } from './components/More';
import './css/app.css';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/Aboutme' component={Aboutme} />
        <Route path='/Contacts' component={Contacts} />
        <Route path='/More' component={More} />
      </Layout>
    );
  }
}
