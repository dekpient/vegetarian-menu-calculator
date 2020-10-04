import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  return (
    <div className="flex-1 m-auto antialiased font-sans text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white text-2xl">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 0
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 1
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 2
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 3
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 4
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 5
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 6
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 7
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 8
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 9
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 10
          </div>
          <div className="py-2 rounded text-gray-400 bg-blue-900 hover:text-gray-900 hover:bg-blue-200">
            Day 11
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
