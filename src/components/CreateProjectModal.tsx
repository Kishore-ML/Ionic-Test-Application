import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef } from 'react';
import project from '../../public/project.png';
const CreateProjectModal:React.FC = () =>{

    const modal = useRef<HTMLIonModalElement>(null);

    return(
        <IonModal ref={modal} trigger="new-project">
          <IonHeader>
            <IonToolbar>
              <IonTitle>New Project</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem style={{marginBottom:'1rem'}}>
              <IonInput
                label="Name"
                labelPlacement="floating"
                color="primary"
                type="text"
                placeholder="Enter Name"
              />
            </IonItem>
            <IonLabel style={{marginLeft:'1rem'}}>Project thumbnail</IonLabel>
            <IonItem>
                <img src={project} style={{width:'2rem',height:'2rem',marginRight:'1rem'}}></img>
                <IonButton fill='clear'>Upload New</IonButton>
            </IonItem> 
            <IonItem>
                <select>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Australia</option>
                </select>
            </IonItem>
            <IonItem>
              <IonInput
                label="Project ownership"
                labelPlacement="floating"
                color="primary"
                type="text"
                placeholder=""
              />
            </IonItem>
            <IonItem>
              <IonInput
                label="Project License"
                labelPlacement="floating"
                color="primary"
                type="text"
                placeholder=""
              />
            </IonItem>
            <IonButton fill='clear'>
                More Options
            </IonButton>
          </IonContent>
          <IonToolbar style={{marginBottom:'2rem',paddingRight:'2rem'}}>
            <IonButtons slot="end">
            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                <IonButton strong={true} color='primary' fill='solid' onClick={() =>  modal.current?.dismiss()}>
                   Submit
                 </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonModal>
    )
}

export default CreateProjectModal;