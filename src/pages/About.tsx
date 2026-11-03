import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <section className="about-content">
          <h1>¡Hola y bienvenido!</h1>
          <p>Esta es la página About de la aplicación. Aquí encontrarás información sobre el proyecto.</p>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default About;
