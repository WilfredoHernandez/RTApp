import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonItem, IonText } from '@ionic/react';
import './Login.scss';

const Login: React.FC = () => {
    return (

        <IonPage>
            <IonContent class="ion-text-center" id="background">

                <div className="header">
                    <strong> Hello! </strong>
                </div>

                <div className="subHeader">
                    <p> Any tips regarding the application..... </p>
                </div>
                <div id="loginForm">
                    <IonInput className="loginInput"
                        placeholder="Username">
                    </IonInput>

                    <IonInput className="loginInput"
                        placeholder="Password">
                    </IonInput>
                </div>
                <div id="optionsContainer">
                    <IonButton id="loginButton" >Login</IonButton>

                    <IonButton id="forgotPsw"
                        routerLink="/Forget"
                        fill="clear" > Forgot Password? </IonButton>
                </div>
                <IonButton id="signUp"
                    routerLink="/Register"
                    fill="clear" ><p>New here? <span>Sign Up!</span></p></IonButton>

            </IonContent>
        </IonPage>

    );
};

export default Login;