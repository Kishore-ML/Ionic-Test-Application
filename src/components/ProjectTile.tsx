import React from "react";
import { IonButton, IonButtons, IonCard, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import project from '../../public/project.png';
import { ellipsisVertical } from "ionicons/icons";
import { useHistory } from "react-router";
import './style.css';

const ProjectTile:React.FC<{projectName:string}> = ({projectName}) =>{
    const history = useHistory();
    return(
        <IonCard onClick={() => history.push('/explorer')}>
            <img src={project}></img>
            <IonToolbar>
                <IonTitle style={{fontSize:'1rem'}}>{projectName}</IonTitle>
                <IonButtons slot='end'>
                    <IonButton color="medium" fill="clear" style={{marginLeft:'2rem',marginBottom:'0.8rem'}}>
                        <IonIcon icon={ellipsisVertical} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonCard>
    )
}

export default ProjectTile;