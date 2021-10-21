import { IonPage, IonContent} from "@ionic/react";
import React, {useEffect} from "react";
import "./Loading.scss";
import {Redirect} from "react-router-dom";

const Loading: React.FC = () => {

    useEffect(() => {
                const timer = setTimeout(() => {
                window.location.href = "/Login"; 
                console.log('This will run after 1 second!')
                }, 4000);
                
                return () => clearTimeout(timer);
    },[]);

    return (
        <IonPage> 
            <IonContent id="backgroundLoading">
            </IonContent>
        </IonPage>
    );
};

export default Loading;