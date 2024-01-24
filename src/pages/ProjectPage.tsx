import React from "react";
import NavBar from "../components/NavBar";
import { Switch, useHistory } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Explorer from "../components/Explorer";
import Activity from "../components/Activity";
import ToDo from "../components/Todo";
import Topics from "../components/Topics";
import Settings from "../components/Settings";
import PropertySet from "../components/PropertySet";
import Team from "../components/Team";

const ProjectPage:React.FC<{expanded:boolean}> = ({expanded}) => {
    const history = useHistory();
    return(    
        <div className="project-page">
            <NavBar expanded={expanded} />   
            <Switch>
                <Route  path='/project' exact component={Explorer}/>
                <Route  path='/project/activity' exact component={Activity}/>
                <Route  path='/project/topics' exact component={Topics}/>
                <Route  path='/project/todo' exact component={ToDo}/>
                <Route  path='/project/team' exact component={Team}/>
                <Route  path='/project/property' exact component={PropertySet}/>
                <Route  path='/project/settings' exact component={Settings}/>
            </Switch>      
        </div> 
       
    )
}

export default ProjectPage;