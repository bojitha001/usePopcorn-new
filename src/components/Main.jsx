import React from 'react'
import { useState } from 'react';
import ListBox from './Box';
import WatchedBox from './WatchedBox';



const Main = ({children}) => { 
  
  return (
    <main className="main">
       {children}
      </main>
  )
}

export default Main
