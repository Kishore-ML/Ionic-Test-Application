import { IonGrid, IonRow, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel } from "@ionic/react";
import { gridSharp, listSharp } from "ionicons/icons";
import React from "react";

const PropertySet:React.FC = () =>{
    return(
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
    )
}

export default PropertySet;