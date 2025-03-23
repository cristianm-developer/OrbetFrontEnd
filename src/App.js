import './App.css';
import './fonts/orbeticons/orbeticonspack.css';

import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import TopBar from './components/TopBar/TopBar';
import { UserProvider } from './contexts/UserContext';
import { ProjectProvider } from './contexts/ProjectContext';
import { BrowserRouter } from 'react-router-dom';
import RouterView from './routes';

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <ProjectProvider>
        <div className="App">
          <SideBarLeft></SideBarLeft>
          <TopBar></TopBar>
          <main>
            <RouterView></RouterView>
          </main>
          <SideBarRight></SideBarRight>
        </div>
        </ProjectProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
