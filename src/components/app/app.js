import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PersonalAccount from '../personal_account/personal_account';
import ManagingVizits from '../managing_vizits/managin_vizits';
import SideMenu from '../side_menu/side_menu';
import ErrorMessage from '../error_message/error_message';
import VizitsService from '../../services/vizits-service';
import Spinner from "../spinner/spinner";
import search from "../../icons/search.png";
import bell from "../../icons/bell.png";
import eye from "../../icons/eye.png";
import user from "../../icons/user.png";

import "./app.scss";
import "../button.scss";

const App = () => {
    
    const [vizits, setVizits] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const vizitsService = new VizitsService();
    useEffect(() => { 
        updateVizits()
    }, []);
    
    const updateVizits = async() => {
        setLoading(true);
        await vizitsService.getAllVizits()
        .then(onVizitsLoaded)
        .catch(onError);   
    }

    const onVizitsLoaded = (vizits) => {
        setLoading(false);
        setVizits(vizits);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }
    const onCancelItem = (id) => {
        fetch(`http://localhost:3002/vizits/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(updateVizits)
        //console.log("delete");
        //setVizits([...vizits].filter(item => item.id !== id));
        
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;



return (
    
    
    <div className="app">
        <header className="header">
            <div className="logo">Логотип</div>
            <div className="profile">
                <div className="profile__title">Мой профиль</div>
                <div className="profile__icons">
                    <img src={search} alt="search" />
                    <img src={bell} alt="bell" />
                    <img src={eye} alt="eye" />
                    <div className="profile__select">
                        <img src={user} alt="user" />
                        <div className="profile__select-icon"></div>
                    </div>
                </div>

            </div>
        </header>
        
            <div className="container">
            <SideMenu/>      
            <main>
            {errorMessage}
            {spinner}
            {!(error || loading || !vizits) ?
             <Router>
                <Routes>
                        <Route path="/" element={<PersonalAccount vizits={vizits} onCancelItem={onCancelItem}/>}/>
                        <Route path="/vizits-managing" element={<ManagingVizits vizits={vizits} onCancelItem={onCancelItem}/>}/>
                </Routes> 
            </Router> : null }
            </main>
            </div>    
    </div>
)

}



export default App;

