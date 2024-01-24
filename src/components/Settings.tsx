import { IonGrid, IonRow, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel } from "@ionic/react";
import React from "react";

const Settings:React.FC = () =>{
    return(
        <IonGrid>
        <IonRow>
            <IonToolbar style={{padding:'0 1rem'}}>
                <IonTitle>
                    Settings 
                </IonTitle> 
            </IonToolbar>
        </IonRow>
        <IonRow>
            <IonGrid className="ion-padding">
                <IonLabel>Settings Page</IonLabel>
            </IonGrid>
        </IonRow>  
     </IonGrid>
    )
}

export default Settings;