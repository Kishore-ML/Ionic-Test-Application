import React, { useEffect } from 'react';
import { IonApp, IonContent, IonRouterOutlet, setupIonicReact } from '@ionic/react';

// import { Deeplinks } from '@ionic-native/deeplinks/ngx';
// import { Platform } from '@ionic/angular';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { Storage } from '@ionic/storage';
import AppUrlListener from './pages/AppUrListener';


setupIonicReact();

const App: React.FC = () => {
  const [expanded,setExpanded] = useState(false);
  const store = new Storage();

  useEffect(() => {
    setLocals();
  }, []);

  async function setLocals(){
    await store.create();
    await store.set('key', 'Content');
    localStorage.setItem('browser','Browser local storage');
  }

  function toggleNavBar(){
    expanded?setExpanded(false):setExpanded(true);
  }

  return(
    <IonApp>
        <IonContent>
          <Header toggleNavBar={toggleNavBar}/>
          <Router>
            <AppUrlListener />
            <Route path='/' exact component={ProjectsPage} />
            <Route path='/project' render={(props) => <ProjectPage {...props} expanded={expanded} />}  />
          </Router>
        </IonContent>
  </IonApp>
  )
  
}
  
export default App;
