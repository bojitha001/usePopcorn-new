import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import StarRatings from './StarRatings'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StarRatings maxRating = {5} messages = {["Terrible" ,"Bad", "Okay", "Good", "Amazing"]}/>
    <StarRatings maxRating = {10} deafaultRating = {3}/>
    <StarRatings /> */}
  </React.StrictMode>,
)
