import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard,  IonCardHeader, 
  IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonInput,
  IonButton, IonIcon} from '@ionic/react';

import './Tab2.css';
import { call, cloudUploadOutline, documentOutline, mail, person } from 'ionicons/icons';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="secondary" className="ion-padding">
        <IonList>
          <IonItem>
            <IonInput label="Cédula" maxlength={10}></IonInput>
          </IonItem>
        </IonList>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Registro de Asistencia Estudiantil</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        <IonList>
          <IonItem>
          <IonIcon slot="start" icon={documentOutline} />
            <IonInput label="Cédula" maxlength={10}></IonInput>
          </IonItem>
          <IonItem>
          <IonIcon slot="start" icon={person} />
            <IonInput label="Nombre" maxlength={50}></IonInput>
          </IonItem>
          <IonItem>
          <IonIcon slot="start" icon={person} />
            <IonInput label="Apellido" maxlength={50}></IonInput>
          </IonItem>
          <IonItem>
          <IonIcon slot="start" icon={mail} />
            <IonInput label="Email" maxlength={100} type="email"></IonInput>
          </IonItem>
          <IonItem>
          <IonIcon slot="start" icon={call} />
            <IonInput label="Celular" maxlength={10} ></IonInput>
          </IonItem>

        </IonList>
        </IonCardContent>
      </IonCard>
      <IonButton color="light" expand="block" shape="round" >
        Registrar
        <IonIcon slot="start" icon={cloudUploadOutline}></IonIcon>
      </IonButton>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;