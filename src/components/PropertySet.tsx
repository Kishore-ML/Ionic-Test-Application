import { IonGrid, IonRow, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel } from "@ionic/react";
import React from "react";

const PropertySet:React.FC = () =>{
    return(
        <IonGrid>
        <IonRow>
            <IonToolbar style={{padding:'0 1rem'}}>
                <IonTitle>
                    Property Set Library
                </IonTitle> 
            </IonToolbar>
        </IonRow>
        <IonRow>
            <IonGrid className="ion-padding">
                <IonLabel>{window.location.href}</IonLabel>
            </IonGrid>
        </IonRow>  
     </IonGrid>
    )
}

export default PropertySet;