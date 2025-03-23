import './App.css';
import './fonts/orbeticons/orbeticonspack.css';

import SideBarLeft from './core/SideBarLeft/SideBarLeft';
import SideBarRight from './core/SideBarRight/SideBarRight';
import TopBar from './core/TopBar/TopBar';
import { UserProvider } from './domains/auth/UserContext';
import { ProjectProvider } from './domains/project/ProjectContext';
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
