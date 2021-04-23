
import { IonInput, IonLabel } from "@ionic/react";
import styles from "./CustomField.module.scss";

export const CustomField = ({field}) => (

    <div className={ styles.field }>
        <IonLabel className={ styles.fieldLabel }>{ field.label }</IonLabel>
        <IonInput className={ styles.customInput } { ...field.input } />
    </div>
);