import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRouterLink,
  IonRow,
  IonImg,
  IonHeader,
  IonFooter,
  IonToolbar,
} from "@ionic/react";
import styles from "./Home.module.scss";
import { dataQuestionMath } from "../constant";
import { getRandomInt } from "../data/utils";
import { useState } from "react";

const Math = () => {
  const randomItem = getRandomInt(dataQuestionMath);
  console.log("randomItem", randomItem);

  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <IonPage className={styles.homePage}>
      <IonHeader>
        <IonToolbar className="ion-no-margin ion-no-padding">
          <h1 className={styles.padding}>
            Trả lời câu hỏi dưới đây: {randomItem.title}
          </h1>
        </IonToolbar>
      </IonHeader>
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
          <IonGrid>
            <IonRow className="ion-text-center ion-justify-content-center">
              <IonImg src={randomItem.image_url} />
              <IonCol
                size="11"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  paddingTop: "20px",
                }}
              >
                {randomItem.answers.map((item) => {
                  return (
                    <button
                      className={`${styles.ButtonAnswer} `}
                      onClick={() => {
                        setIsCorrect(item.is_correct);
                      }}
                    >
                      {item.content}
                    </button>
                  );
                })}
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
      <IonFooter>
        <IonGrid className="ion-no-margin ion-no-padding">
          <IonRow size="12">
            <IonCol size="11" className={styles.flexEnd}>
              <IonRouterLink
                size="12"
                routerLink="/category"
                className={styles.submit}
              >
                <IonButton
                  disabled={!isCorrect}
                  className={`${styles.getStartedButton} custom-button`}
                >
                  Kiểm tra
                </IonButton>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Math;
