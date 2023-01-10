import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import PrivateRoutesIn from './utils/PrivateRoutesIn';
import PrivateRoutesOut from './utils/PrivateRoutesOut';

function App() {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Routes>
              <Route element={<PrivateRoutesIn />}>
                <Route exact path='/' element={<Dashboard />} />
                <Route path='/create' element={<CreateProject />} />
                <Route path='/project/:id' element={<ProjectDetails />} />
              </Route>
              <Route element={<PrivateRoutesOut />}>
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignOut />} />
              </Route>
            </Routes>
          </div>  
        </BrowserRouter> 
      );
}

export default App;

 