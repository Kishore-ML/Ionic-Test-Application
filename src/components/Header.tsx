import React, { useEffect, useState } from "react";
import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react";
import { searchOutline, helpCircle, apps, personCircle, menu } from "ionicons/icons";
import connect from '../../public/ConnectLogo.svg';

const Header: React.FC<{toggleNavBar:() => void}> = ({toggleNavBar}) => {

  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 488) {
        setShowDiv(false);
      } else {
        setShowDiv(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
    return(
        <IonHeader color="primary">
          <IonToolbar>
            <IonButtons slot='start'>
                <IonButton onClick={toggleNavBar}>
                  <IonIcon  slot="icon-only" icon={menu} />
                </IonButton> 
            </IonButtons>
            {showDiv && 
            <IonTitle style={{alignItems:'center'}}>
              <img src={connect} className="header-img"></img>
            </IonTitle>} 
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