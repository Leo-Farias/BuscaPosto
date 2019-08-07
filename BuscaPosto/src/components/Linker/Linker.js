import React, {Component} from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from '../Login/Login';
import Registration from '../Registration/Registration';

const MyNavigator = createSwitchNavigator({

	Login: Login,
	Registration: Registration,
},
{
	initialRouteName: 'Registration'
});

export default createAppContainer(MyNavigator);

