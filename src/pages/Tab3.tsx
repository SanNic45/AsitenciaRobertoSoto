import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

import { User } from './../models/user.model' ;
import UserItem from './../components/userItem'; 

const Tab3: React.FC = () => {

  const [users, setUser] = useState <User[]> ([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {users.map((user, idx) => <UserItem key = {idx} user={user}/>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;