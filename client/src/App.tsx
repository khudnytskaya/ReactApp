import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'; //makes redux store available to any nested components
import HeaderContainer from "./components/HeaderContainer";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import EditProfile from './pages/User/EditProfile';
import EditPhoto from './pages/User/EditPhoto';
import EditEmail from './pages/User/EditEmail';
import EditPassword from './pages/User/EditPassword';
import UserEditPage from './pages/User/UserEditPage';
import {store, persistor} from "./store";
import CreateLecture from "./pages/Lectures/Create/CreatePage";
import {PersistGate} from 'redux-persist/integration/react';
import FooterContainer from "./components/FooterContainer";
import Lecture from "./pages/Lecture/Lecture";



function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <HeaderContainer/>
                        <Switch>
                            <div className="mainContent">
                                <Route exact path="/" component={Home}/>
                                <Route path="/user" component={User}/>
                                <Route path="/signup" component={SignUp}/>
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/lecture/new" component={CreateLecture}/>
                                <Route path="/lecture/:id" component={Lecture}/>
                                <Route path="/edit-profile">
                                    <EditProfile />
                                </Route>
                                <Route path="/edit-photo">
                                    <EditPhoto />
                                </Route>
                                <Route path="/edit-email">
                                    <EditEmail />
                                </Route>
                                <Route path="/edit-password">
                                    <EditPassword />
                                </Route>
                                <Route path="/edit-page">
                                    <UserEditPage />
                                </Route>
                            </div>
                        </Switch>
                        <FooterContainer/>
                    </Router>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
