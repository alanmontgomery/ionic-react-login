import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRouterLink,
  IonRow,
} from "@ionic/react";
import styles from "./Home.module.scss";
import { dataCategory } from "../constant";

const Category = () => {
  return (
    <IonPage className={styles.homePage}>
      {/* <IonHeader>
				<IonToolbar className="ion-no-margin ion-no-padding">
					<IonImg src="/assets/login2.jpeg" />
				</IonToolbar>
			</IonHeader> */}
      <IonContent fullscreen>
        <div
          className={styles.getStarted}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
            backgroundImage: "none",
          }}
        >
          <IonGrid className={styles.flexCenter}>
            {dataCategory.map((item) => {
              return (
                <IonRow
                  className={`ion-text-center ion-justify-content-center`}
                  key={item.id}
                >
                  <IonRouterLink routerLink={item.link} className="custom-link">
                    <IonCol size="11" className={styles.flexWrap}>
                      <img
                        alt={item.name}
                        src={item.image_url}
                        style={{
                          width: "200px",
                          height: '112px'
                        }}
                      />
                      <IonButton
                        className={`${styles.getStartedButton} custom-button`}
                      >
                        {item.name}
                      </IonButton>
                    </IonCol>
                  </IonRouterLink>
                </IonRow>
              );
            })}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Category;
