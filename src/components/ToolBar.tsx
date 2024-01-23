import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { gridSharp, listSharp } from "ionicons/icons";
import React from "react";

const Toolbar:React.FC = () => {
    return(
        <IonToolbar style={{padding:"0 2rem",marginTop:'2rem'}}>
            <IonTitle>
                Projects 
            </IonTitle>
            <IonButtons slot="primary">
                <IonButton>
                    <IonIcon icon={gridSharp} size="primary"/>
                </IonButton>
                <IonButton>
                    <IonIcon icon={listSharp} size="primary"/>
                </IonButton>
                <IonButton>3D</IonButton>
            </IonButtons>
            <IonButton slot="end" fill="solid" id='new-project'>New</IonButton>
        </IonToolbar>
    )
}
export default Toolbar;