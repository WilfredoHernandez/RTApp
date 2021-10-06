import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonText } from '@ionic/react';
import './Forget.css';

const Forget: React.FC = () => {
    return (

      <IonPage>    
        <IonContent class="ion-padding" id="background">

        <div className = "flechaIr">
            <IonButtons>
                <IonButton routerLink="/Home">
                    <IonImg src="..\..\assets\flechaIr.png"/>
                </IonButton>
            </IonButtons>
        </div>

        <div className = "text1">
            <strong> Forgot your password? </strong>
        </div>

        <div className = "text2">
            <p> Please enter the email address you´d like your password reset information sent to: </p>
        </div>

        <div className="textrequest" color="light">
            <p>Enter email address</p>
        </div>

            <IonInput 
                className="request"
                placeholder="">
            </IonInput>
  
            <IonButton className="ion-text-center ion-margin" 
                       id="requestbutton" 
                       shape="round" >Request Reset</IonButton>
        
            <IonButton className="ion-text-center ion-margin" 
                        id="backlogin" 
                        routerLink="/Home" 
                        fill="clear" > Back to Login </IonButton>

            </IonContent>       
        </IonPage>

    );
  };
  
  export default Forget;