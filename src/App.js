import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs dialogsState={props.state.dialogsPage} /> } />

                    <Route path='/profile' render={()=> <Profile profileData={props.state.profilePage} addPost={props.addPost} /> } />

                    <Route path='/friends' render={()=> <Friends friensdata={props.state.friendsPage} /> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path='/settings' render= { () => <Settings/> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
