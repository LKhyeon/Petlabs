import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminDashboardPage from './Components/AdminDashboardPage';
import AdminUserListPage from './Components/AdminUserListPage';
import AdminPetListPage from './Components/AdminPetListPage';
import AdminItemListPage from './Components/AdminItemListPage';
import UserDashboardPage from './Components/UserDashboardPage';
import LogInPage from './Components/LogInPage';
import SignUpPage from './Components/SignUpPage';
import AdminUserPage from './Components/AdminUserPage';
import UserPetCarePage from './Components/UserPetCarePage';
import AdminPetPage from './Components/AdminPetPage'
import AdminItemPage from './Components/AdminItemPage';
import AdminNewItemPage from './Components/AdminNewItemPage';
import AdminNewPetPage from './Components/AdminNewPetPage';
import UserSettingsPage from './Components/UserSettingsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LogInPage} />
        <Route path="/SignUp" exact component={SignUpPage} />
        <Route path="/AdminDashboardPage" exact component={AdminDashboardPage} />
        <Route path="/AdminUserListPage" component={AdminUserListPage} />
        <Route path="/AdminPetListPage" component={AdminPetListPage} />
        <Route path="/AdminItemListPage" component={AdminItemListPage} />
        <Route path="/AdminUserPage" component={AdminUserPage} />
        <Route path="/AdminPetPage" component={AdminPetPage} />
        <Route path="/AdminItemPage" component={AdminItemPage} />
        <Route path="/AdminNewItemPage" component={AdminNewItemPage} />
        <Route path="/AdminNewPetPage" component={AdminNewPetPage} />

        <Route path="/UserDashboardPage" exact component={UserDashboardPage} />
        <Route path="/UserSettingsPage" exact component={UserSettingsPage} />
        <Route path="/UserPetCarePage" exact component={UserPetCarePage} />
      </Switch>
    </Router>
  );
}

export default App;
