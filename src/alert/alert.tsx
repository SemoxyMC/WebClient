import React from "react";
import {Alert as AlertType} from "./alertctx";
import styles from "./alert.module.css"
import {Spacing} from "../components/form/box";

interface IAlertProps {
    alert: AlertType,
    close(): void
}

const Alert: React.FC<IAlertProps> = ({alert, close}) => {
    return <div className={styles.alert}>
        <img src={`assets/${alert.type}_alert.svg`} alt={`${alert.type} Alert`} className={styles.type} />
        <div className={styles.text}>
            <h3>{alert.message}</h3>
            <span>{alert.description}</span>
        </div>
        <Spacing />
        <img src={"assets/alert_close.svg"} alt={"Close Alert"} className={styles.close} onClick={close} />
    </div>
}

export default Alert