import {SideMenu} from "./Conteiners/SideMenu/sideMenu";
import {Header} from "./Conteiners/Header/header";
import {WorkSpace} from "./Conteiners/WorkSpace/workSpace";
import './App.scss';

const App = () => {
  return (
    <div className={'app'}>
        <div className={'menu'}>
            <SideMenu/>
        </div>
        <div className={'mainBlock'}>
            <Header/>
            <WorkSpace/>
        </div>
    </div>
  );
}

export default App;
