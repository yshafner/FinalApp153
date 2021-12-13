import MainApp from './App';
import { registerRootComponent } from 'expo';
import React from 'react';

class App extends React.Component {
    render() {
        return <MainApp/>
    }
}

registerRootComponent(App);