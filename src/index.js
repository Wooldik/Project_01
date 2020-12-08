import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import mainReducer from './redux/reducers/mainReducer';
import thunk from 'redux-thunk';
import Main from './components/Main/Main'
import Administration from './components/Administration/Administration'
import Teachers from './components/Teachers/Teachers';


const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(

	<BrowserRouter>
		<Provider store={store}>
			<App >
				<Switch>
					<Route exact path='/' component={Main} />
					<Route path='/administration' component={Administration} />
					<Route path='/administration' component={Teachers} />
				</Switch>
			</App>
		</Provider>
	</BrowserRouter>
	,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
