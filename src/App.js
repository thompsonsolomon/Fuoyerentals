import "./Components/Styles/App.scss";
import "./Components/Styles/Globals.scss";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {
  AddPropery,
  AddUser,
  AdminChats,
  AdminCustomerCare,
  AdminDashboard,
  AdminListing,
  AdminProperies,
  AdminUsers,
  PropertyDetails,
  Tenant,
} from "./Pages/Admin";
import { Admin } from "./Components/Utils/api";
import {
  Agent,
  Auth,
  Contact,
  Home,
  Listing,
  PropertyDetailsHome,
} from "./Pages/Main";
import {
  AgentRegistration,
  ForgottenPassword,
  Login,
  Register,
} from "./Pages/Main/Auth";
import { ProtectedRoute } from "./ROUTES";

function App() {
  
  const User1 = null;
  return (
    <Router>
      {/* <==================== ADMIN ROUTES =================> */}
      <ProtectedRoute user={Admin} path="/admin/dashboard">
        <AdminDashboard />
      </ProtectedRoute>
      <Route exact path="/admin/listing">
        <AdminListing />
      </Route>

      <Route exact path="/admin/chats">
        <AdminChats />
      </Route>
      <Route exact path="/admin/tenant">
        <Tenant />
      </Route>
      <Route exact path="/admin/properties">
        <AdminProperies />
      </Route>
      <Route exact path="/admin/users">
        <AdminUsers />
      </Route>
      <Route exact path="/admin/cusomercare">
        <AdminCustomerCare />
      </Route>
      <Route exact path="/admin/properties/:id">
        <PropertyDetails />
      </Route>
      <Route exact path="/admin/add/users">
        <AddUser />
      </Route>
      <Route exact path="/admin/add/property">
        <AddPropery />
      </Route>
      {/* <==================== HOME ROUTES =================> */}
      <Route path="/listings">
        <Listing />
      </Route>
      <Route path="/agents">
        <Agent />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/properties/:id">
        <PropertyDetailsHome />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      {/* <==================== AUTHS ROUTES =================> */}

      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgotpassword">
        <ForgottenPassword />
      </Route>
      <Route path="/requestAgent">
        <AgentRegistration />
      </Route>


      {/* <==================== REDIRECTS =================> */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="*">
        <Redirect to="/home" />
      </Route>

      {/* <Route path="/">
        <Redirect to="/admin/dashboard" />
      </Route> */}
    </Router>
  );
}
export default App;
