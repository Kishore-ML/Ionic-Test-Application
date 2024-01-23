import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { searchOutline, helpCircle, apps, personCircle } from "ionicons/icons";
import React from "react";

const Header: React.FC = () =>{
    return(
        <IonHeader color="primary">
          <IonToolbar>
            <IonTitle>
              <b>Trimble</b> Connect
            </IonTitle>
            <IonButtons slot='end'>
              <IonButton >
                <IonIcon slot="icon-only" icon={searchOutline}></IonIcon>
              </IonButton>
              <IonButton >
                <IonIcon slot="icon-only" icon={helpCircle}></IonIcon>  
              </IonButton>
              <IonButton >
                <IonIcon slot="icon-only" icon={apps}></IonIcon>
              </IonButton>
              <IonButton >
                <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
    )
}

export default Header;