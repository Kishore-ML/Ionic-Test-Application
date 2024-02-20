import { IonGrid, IonRow, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonLabel } from "@ionic/react";
import { gridSharp, listSharp } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Storage } from '@ionic/storage';

const PropertySet:React.FC = () =>{
    
    const [storageValue, setStorageValue] = useState('Default');

    useEffect(() => {
        const getStorageValue = async () => {
            const store = new Storage();
            store.create();
            const value = await store.get('key');
            setStorageValue(value);
          };
      getStorageValue();
    },[]);
    

    return(
        <IonGrid>
            <IonRow>
                <IonToolbar>
                    <IonTitle>
                    {storageValue}
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
                    <IonLabel>{window.location.href}</IonLabel>
                </IonGrid>
            </IonRow>  
        </IonGrid>
    )
}

export default PropertySet;