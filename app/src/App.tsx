import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <h1 className="text-3xl font-bold underline">Home</h1>
  )
}

function Test() {
  return (
    <h1 className="text-3xl font-bold underline">Test</h1>
  )
}

function App() {
  return (
    <div className="App">
      <nav className="py-3 px-4">
        <div className="flex">
          <div className="basis-1/4">
            <img className="ml-5" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
          </div>
          <div className="basis-2/4">
            <div className="px-10 flex">
              <input 
                type="text"
                className="w-3/5 border border-gray-300 px-3 py-1 rounded-lg shadow-sm 
                  focus:outline-none focus:border-indigo-500 foucs:ring-1 focus:ring-indigo-500"
              />
              <button className="ml-auto bg-indigo-500 px-2 py-1 text-white border-gray-300 rounded-lg shadow-sm">Create post</button>
            </div>
          </div>
          <div className="basis-1/4 container w-20">

          </div>
        </div>
      </nav>
      
      {/*
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/test">Test</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
      </Routes>
      */}
    </div>
  );
}

export default App;
