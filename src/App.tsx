import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { RootStore } from "./Store";
import {GetActivities} from './Actions/ActivityActions';

function App() {
  const dispatch = useDispatch();
  const dataStore = useSelector((state:RootStore)=> state.data)
  const handleSubmit = () => {
    dispatch(GetActivities());
  }
  return (
    <div className="App">
        <button onClick={handleSubmit}>Search</button>
        {dataStore.loading && <div className='App-logo'>Loading...</div>}
        {dataStore.loading===false && dataStore.activities && (
          <div>
              {dataStore.activities.map(activity=>{
                return <div key={activity.id}
                        style={{border: activity.completed ? '1px solid green' : '1px solid orange',borderRadius:'5px',padding:'3px',margin:'3px'
                        ,width:'60%',alignSelf:'center',justifyContent:'center',display:'block'
                        ,background:activity.completed ? 'none' : 'red'}}>
                    <p>{activity.title}</p>
                    <p>{activity.completed ? 'Completed' : 'Not Completed'}</p>
                    <p>{activity.dueDate}</p>
                </div>
              })}
          </div>
        )}
    </div>
  );
}

export default App;
