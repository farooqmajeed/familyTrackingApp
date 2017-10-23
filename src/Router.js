import React from 'react';
import { View, ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/Auth/LoginForm';
import SignupForm from './Components/Auth/SignUp';
import Welcome from './Components/Dashboard/Welcome';
import Dashboard from './Components/Dashboard/dashboard';
import AddCircle from './Components/App/AddCircle';



const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                {/* <Scene key='welcome' component={Welcome} hideNavBar={true} initial />  */}
                <Scene key="login" component={LoginForm} hideNavBar={true} initial />
                <Scene key="signup" component={SignupForm} hideNavBar={true} />
                <Scene key="addCircle" component={AddCircle} hideNavBar />
            </Scene>
        </Router>
    );
};


export default RouterComponent;

