import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonText } from '@ionic/react';
import './Login.scss';

const Login: React.FC = () => {
    return (

      <IonPage>    
        <IonContent class="ion-padding" id="background">

        <div className = "text1">
            <strong> Hello! </strong>
        </div>

        <div className = "text2">
            <p> Any tips regarding the application..... </p>
        </div>

            <IonInput 
                className="requestUsr"
                placeholder="  Username">
            </IonInput>

            <IonInput 
                className="requestPsw"
                placeholder="  Password">
            </IonInput>
  
            <IonButton className="ion-text-center ion-margin" 
                       id="loginbutton" 
                       shape="round" >Login</IonButton>
        
            <IonButton className="ion-text-center ion-margin" 
                        id="forgotPsw" 
                        routerLink="/Forget" 
                        fill="clear" > Forgot Password? </IonButton>

            <IonButton className="ion-text-center ion-margin" 
                        id="signUp" 
                        routerLink="/Registry" 
                        fill="clear" > New here? Sign Up!</IonButton>
            </IonContent>       
        </IonPage>

    );
  };
  
  export default Login;