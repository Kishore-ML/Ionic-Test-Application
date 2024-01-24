import { IonGrid, IonRow, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel } from "@ionic/react";
import React from "react";

const Activity:React.FC = () =>{
    return(
        <IonGrid>
        <IonRow>
            <IonToolbar style={{padding:'0 1rem'}}>
                <IonTitle>
                    Activity 
                </IonTitle> 
            </IonToolbar>
        </IonRow>
        <IonRow>
            <IonGrid className="ion-padding">
                <IonLabel>Activity Content</IonLabel>
            </IonGrid>
        </IonRow>  
     </IonGrid>
    )
}

export default Activity;