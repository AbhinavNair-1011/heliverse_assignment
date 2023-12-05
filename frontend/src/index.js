import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store/usersStore';
import Team from './components/Team';


const router = createBrowserRouter([

  {
    path: "/", element: <App />,
    children: [
      { path: "/", element:<Main /> },
     
      {path:"/team",element:<Team/>}
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <React.StrictMode>
       <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
   </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

