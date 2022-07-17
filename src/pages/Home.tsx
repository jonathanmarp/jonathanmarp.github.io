// -- React
import { useState } from 'react';

// -- Ionic
import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonPage} from '@ionic/react';
import {
  languageOutline
} from 'ionicons/icons';

// -- Components
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';

// -- Styles
import '../styles/Home.css';

const Home: React.FC = () => {
  const [language, setLanguage] = useState<boolean>(true);

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* Buttons */}
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton color="dark">
            <IonIcon icon={languageOutline} />
          </IonFabButton>

          <IonFabList side="end">
            <IonFabButton 
              color={language ? "dark" : "light"}
              onClick={() => {
                setLanguage(true);
              }}>ENG</IonFabButton>
            <IonFabButton
              color={!language ? "dark" : "light"}
              onClick={() => {
                setLanguage(false);
              }}>IDN</IonFabButton>
          </IonFabList>
        </IonFab>

        {/* Jumbotron */}
        <Jumbotron language={language} />

        {/* About */}
        <About language={language} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
