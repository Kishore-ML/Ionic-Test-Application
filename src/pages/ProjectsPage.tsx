import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect } from "react";
import Toolbar from "../components/ToolBar";
import CreateProjectModal from "../components/CreateProjectModal";
import ProjectsGrid from "../components/ProjectsGrid";
import { Plugins } from '@capacitor/core';
import { useHistory } from "react-router";



const ProjectsPage:React.FC = () =>{
    const {App} = Plugins;
    const history = useHistory();
    
    const projects = [{projectId:'pid-1',projectName:'Project Name'},
                      {projectId:'pid-2',projectName:'Project Name'},
                      {projectId:'pid-3',projectName:'Project Name'},
                      {projectId:'pid-4',projectName:'Project Name'},
                      {projectId:'pid-5',projectName:'Project Name'},
                      {projectId:'pid-6',projectName:'Project Name'},
                      {projectId:'pid-7',projectName:'Project Name'},
                      {projectId:'pid-8',projectName:'Project Name'},
                  ]
    return(
            <IonContent>
                <Toolbar />
                <ProjectsGrid projects={projects}/>
                <CreateProjectModal />
            </IonContent>  
    )
}

export default ProjectsPage;




