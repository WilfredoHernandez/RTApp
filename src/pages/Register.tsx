//Required imports to build the structure of the view
import { IonContent, 
         IonPage,  
         IonInput, 
         IonButton,   
         IonCheckbox,
         IonImg
        } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Declaration of the variables that will be used
const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [passRepeat, setPassRepeat] = useState('')
    const [terms, setTerms] = useState(false)

    //Function to print the introduced data to the console
    function registerUser() {
        console.log(username, email, phoneNumber, password, passRepeat, terms)
    }
  
  //Main structure of the view
  return (
    <IonPage>
      <IonContent className = "ion-text-center" id = "background">
        <div id = "img-container">
          {/* Ionic component to set the image of an arrow as the back button */}
          <IonImg src = "../assets/flechaIr.png." id = "arrowBack"/>
        </div>
        <h1>Sign Up</h1>
          {/* Creating a form with all the required inputs */}
          <div id = "form">
            <IonInput
              id = "inputStyle"
              placeholder = "Username"
              onIonChange = {(e: any) => setUsername(e.target.value)}
            />
            <IonInput
              id = "inputStyle"
              placeholder = "Email"
              onIonChange = {(e: any) => setEmail(e.target.value)}
            />
            <IonInput
              id = "inputStyle"
              placeholder = "Phone Number"
              onIonChange = {(e: any) => setPhoneNumber(e.target.value)}
            />
            <IonInput
              id = "inputStyle"
              placeholder = "Password"
              onIonChange = {(e: any) => setPassword(e.target.value)}
            />
            <IonInput
              id = "inputStyle"
              placeholder = "Repeat Password"
              onIonChange = {(e: any) => setPassRepeat(e.target.value)}
            />
          </div>
        <div id = "myCheckbox">
          {/* Creating a checkbox using the Ionic component for the user to 
          check it if they comply with the terms & conditions */}
          <IonCheckbox id = "checkboxTerms" mode = "md" checked = {terms}
          onIonChange = {(e: any) => setTerms(e.target.value)}/>
          <p id = "termsText">I accept the Terms & Conditions</p>
        </div>
          {/* Creating a button using the Ionic component for the user to send their data when they press it */}
          <IonButton id = "signupBtn" onClick = {registerUser}>Sign Up</IonButton>
        <div id = "footer">
          {/* p element with a React Link component to redirect the user 
          to the login view in case that they already have an account */}
          <p>Already have an account?<Link to= "" id = "loginLink"> Sign In!</Link></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
