import React from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableComponent from './components/TableComponent';
import AppBarComponent from './components/AppBarComponent';
import SearchComponent from './components/SearchComponent';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';

//import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header>
      <AppBarComponent/>
       </header>
      <SearchComponent/>
      <main>
      <TableComponent/>
      </main>
      <CreateComponent/>

      <EditComponent/>

      
    </div>
  );
}

export default App;