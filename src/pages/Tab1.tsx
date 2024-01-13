import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { lockClosed, logIn, person } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro de Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color ="primary" className='ion-padding'>

        <IonCard>
          <br/>
          <center>
          <img src={`${process.env.PUBLIC_URL}/images/desktop-wallpaper-goku-ultra-instinct-mastered-dragon-ball-super-dragon-ball-z-goku-ultra-instinct.jpg`} className="small-image" />

          </center>
          <br/>
          <IonCardContent>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonIcon aria-hidden="true" icon={person} size="large" />
                </IonCol>
                <IonCol size="auto">
                  <IonInput placeholder="Usuario Registrado" maxlength={20}></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonIcon aria-hidden="true" icon={lockClosed} size="large" />
                </IonCol>
                <IonCol size="auto">
                  <IonInput placeholder="Password" type="password" value=""></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonButton expand="block" color="secondary" shape="round">
              Ingresar
              <IonIcon slot="start" icon={logIn}/>
            </IonButton>
            <br/><br/><br/>
            <center>
              <h6> Por su seguridad no comparta su Usuario o clave</h6>
            </center>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;