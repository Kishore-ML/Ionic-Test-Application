import React from "react";
import { IonButton, IonButtons,  IonGrid, IonIcon, IonLabel, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import {  gridSharp, listSharp } from "ionicons/icons";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router";

const ProjectPage:React.FC<{expanded:boolean}> = ({expanded}) => {
    const history = useHistory();
    return(    
        <div className="project-page">
             <NavBar expanded={expanded} />    
             <IonGrid>
                <IonRow>
                    <IonToolbar style={{padding:'0 1rem'}}>
                        <IonTitle>
                            Explorer
                        </IonTitle>
                        <IonButtons slot='end'>
                            <IonButton>
                                <IonIcon icon={gridSharp} size="primary"/>
                            </IonButton>
                            <IonButton>
                                <IonIcon icon={listSharp} size="primary"/>
                            </IonButton>
                            <IonButton>3D</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonRow>
                <IonRow>
                    <IonGrid className="ion-padding">
                        <IonLabel>Explorer Content</IonLabel>
                    </IonGrid>
                </IonRow>  
             </IonGrid>       
        </div> 
       
    )
}

export default ProjectPage;