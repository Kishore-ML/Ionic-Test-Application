import { IonAccordion, IonAccordionGroup, IonButton, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { arrowBack, cameraSharp, clipboard, colorFilter, cubeSharp, folderOpenSharp, folderSharp, newspaper, people, settings, timeOutline } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";

const NavBar:React.FC<{expanded:boolean}> = ({expanded}) =>{
    const history = useHistory();
    return(
        <div className={`navbar-container  ${expanded?'expanded':''}`}>
            <div className="navbar">
            <IonList>
                <IonItem color="primary"  onClick={() => history.push('/')}>
                    <IonIcon icon={arrowBack}></IonIcon>
                    <IonLabel style={{paddingLeft:'1rem'}}>All Projects</IonLabel>
                </IonItem>
                <IonAccordionGroup>
                    <IonAccordion>
                        <IonItem slot='header'  color="primary">
                            <IonIcon icon={folderSharp}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Data</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={folderOpenSharp}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Explorer</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={cameraSharp}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Views</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={cubeSharp}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Releases</IonLabel>
                        </IonItem>
                    </IonAccordion>
                </IonAccordionGroup>
                <IonItem color="primary">
                    <IonIcon icon={timeOutline}></IonIcon>
                    <IonLabel style={{paddingLeft:'1rem'}}>Activity</IonLabel>
                </IonItem>
                <IonItem color="primary">
                    <IonIcon icon={colorFilter}></IonIcon>
                    <IonLabel style={{paddingLeft:'1rem'}}>Topics</IonLabel>
                </IonItem>
                <IonItem color="primary">
                    <IonIcon icon={clipboard}></IonIcon>
                    <IonLabel style={{paddingLeft:'1rem'}}>Todo</IonLabel>
                </IonItem>
                <IonItem color="primary">
                    <IonIcon icon={people}></IonIcon>
                    <IonLabel style={{paddingLeft:'1rem'}}>Team</IonLabel>
                </IonItem>
                <IonItem color="primary">
                    <IonIcon icon={newspaper}></IonIcon>
                    <IonLabel style={{paddingLeft:'1rem'}}>Property Set Libraries</IonLabel>
                </IonItem>
                <IonAccordionGroup>
                    <IonAccordion>
                        <IonItem slot='header'  color="primary">
                            <IonIcon icon={settings}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Settings</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Project Details</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>BCF Topics</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Extensions</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Notifications</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Units</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Tags</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Permissions</IonLabel>
                        </IonItem>
                        <IonItem slot='content'  color="primary">
                            <IonIcon icon={arrowBack}></IonIcon>
                            <IonLabel style={{paddingLeft:'1rem'}}>Sync</IonLabel>
                        </IonItem>
                    </IonAccordion>
                </IonAccordionGroup>
            </IonList>
            </div>
        </div>
        
    )
}

export default NavBar;