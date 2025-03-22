import './App.css';

import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <SideBarLeft></SideBarLeft>
      <TopBar></TopBar>
       <main></main>
      <SideBarRight></SideBarRight>
    </div>
  );
}

export default App;
