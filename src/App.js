import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import NotFound from './components/Home/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import Footer from './components/Shared/Footer/Footer';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Services from './components/Home/Services/Services';
import ManageServices from './components/Home/ManageServices/ManageServices';
import Feedbacks from './components/Home/Feedbacks/Feedbacks';
import AddService from './components/AddService/AddService';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/feedbacks">
              <Feedbacks></Feedbacks>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
