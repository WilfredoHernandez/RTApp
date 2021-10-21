import { IonPage, IonContent } from "@ionic/react";

const Loading: React.FC = () => {

    return (
        <IonPage> 
            <IonContent id="backgroundLoading">

            </IonContent>
        </IonPage>
    );
};

export default Loading;
$(document).ready(function() {
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})
	
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':--background})
		}, 4000)
	});
	