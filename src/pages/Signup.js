import { IonBackButton, IonButton, IonButtons, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import styles from './Signup.module.scss';

import { arrowBack, shapesOutline } from "ionicons/icons";
import { CustomField } from '../components/CustomField';
import { signupFields } from '../data/fields';
import { Action } from '../components/Action';
import { Wave } from '../components/Wave';

const Signup = () => {
	
	return (
		<IonPage className={ styles.signupPage }>
			<IonHeader>
				<IonToolbar>
					
                    <IonButtons slot="start">
                        <IonBackButton icon={ arrowBack } text="" className="custom-back" />
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton className="custom-button">
                            <IonIcon icon={ shapesOutline } />
                        </IonButton>
                    </IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
                <IonGrid className="ion-padding">
                    <IonRow>
                        <IonCol size="12" className={ styles.headingText }>
                            <IonCardTitle>Sign up</IonCardTitle>
                            <h5>Lets get to know each other</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow className="ion-margin-top ion-padding-top">
                        <IonCol size="12">

                            { signupFields.map(field => {

                                return <CustomField field={ field } />;
                            })}

                            <IonButton className="custom-button" expand="block">Create account</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
			</IonContent>

			<IonFooter>
				<IonGrid className="ion-no-margin ion-no-padding">

                    <Action message="Already got an account?" text="Login" link="/login" />
                    <Wave />
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Signup;