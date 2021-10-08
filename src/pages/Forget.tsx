import { IonButton, IonButtons, IonContent, IonImg, IonInput, IonPage} from '@ionic/react';
import './Forget.scss';

const Forget: React.FC = () => {
    return (

      <IonPage>    
        <IonContent class="ion-text-center" id="background">

        <div className = "flechaIr">
            <IonButtons>
                <IonButton routerLink="/Login">
                    <IonImg src="..\..\assets\flechaIr.png"/>
                </IonButton>
            </IonButtons>
        </div>

        <div className = "header">
            <strong> Forgot your password? </strong>
        </div>

        <div className = "subHeader">
            <p> Please enter the email address you´d like your password reset information sent to: </p>
        </div>

        <div id ="requestContainer">
            <p id = "requestText">Enter email address</p>

            <IonInput id ="requestInput"></IonInput>
        </div>
            <IonButton className="ion-margin" 
                       id="requestButton" >Request reset</IonButton>

            <div id = "footer">
            <IonButton className="ion-margin" 
                        id="backLogin" 
                        routerLink="/Login" 
                        fill="clear" ><p>Back to <span>login</span></p></IonButton>
            </div>
            </IonContent>       
        </IonPage>

    );
  };
  
  export default Forget;