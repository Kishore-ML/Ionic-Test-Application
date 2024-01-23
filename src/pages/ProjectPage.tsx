import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { gridSharp, listSharp } from "ionicons/icons";
import React from "react";

const ProjectPage:React.FC = () => {
    return(     
       <IonToolbar>
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
    )
}

export default ProjectPage;