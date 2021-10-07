import { IonButton, IonButtons, IonContent, IonImg, IonInput, IonPage} from '@ionic/react';
import './Forget.scss';

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

        <div className="textrequest">
            <p>Enter email address</p>
        </div>

            <IonInput 
                className="request"
                placeholder="">
            </IonInput>
  
            <IonButton className="ion-text-center ion-margin" 
                       id="requestbutton" >Request reset</IonButton>
        
            <IonButton className="ion-text-center ion-margin" 
                        id="backlogin" 
                        routerLink="/Home" 
                        fill="clear" ><p>Back to <span>login</span></p></IonButton>

            </IonContent>       
        </IonPage>

    );
  };
  
  export default Forget;