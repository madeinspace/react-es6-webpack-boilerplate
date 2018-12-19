import React from 'react';
import { hot } from 'react-hot-loader';
import Hello from './components/hello-world';
import './scss/main.scss';

const App = () => <Hello title="world" />;

export default hot(module)(App);
