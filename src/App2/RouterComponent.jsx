import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./components/user/ListUserComponent";
import AddUserComponent from "./components/user/AddUserComponent";
import EditUserComponent from "./components/user/EditUserComponent";
import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
           
                        <Route path="/" exact component={ListUserComponent} />
                        <Route path="/users" component={ListUserComponent} />
                        <Route path="/add-user" component={AddUserComponent} />
                        <Route path="/edit-user" component={EditUserComponent} />
                    
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;