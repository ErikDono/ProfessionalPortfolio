import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Home } from "./pages/Home"
import { Nav } from "./pages/Nav"
import './App.css';

const App = (prop) => (
  <Container className="p-3">
    <Nav />

    <Home name={prop.name} />
  </Container>
);

export default App;
