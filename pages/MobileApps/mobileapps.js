import * as React from "react";
import MobileApps from "../../components/MobileApps";

export default function MobileApps(){
    return (
    <>
        <div className={styles.container}>
            <MobileApps />
            {children}
        </div>
    </>
    );
}