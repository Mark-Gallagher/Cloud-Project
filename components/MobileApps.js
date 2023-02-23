import classes from "./MobileApps.module.css";
import { useContext } from "react";
import DataContext from "../store/data-store.js";
import MainNavigation from "./MainNavigation";
import BottomPage from "./BottomHalf";

function MobileApps(props) {
  const dataCtx = useContext(DataContext);
    return (
      <>
        <MainNavigation />
        <div className={classes.mobileappsNavbar}>
          <div className={classes.mobileappsNavbarMargins}>
            <div className={classes.mobileappsNavbarFlex}>
              <span className={classes.mobileappsNavbarA}>
                <a href="/Rewards" className={classes.mobileappsNavbarA}>
                  Starbucks® Rewards
                </a>
              </span>
              <div className={classes.mobileappsButton}>
                <a href="/JoinNow" className={classes.mobileappsButton}> Join now</a>
              </div>
            </div>
          </div>
        </div>
        <main className={classes.mobileappsMainSection}>
          <div>
            <div className={classes.mobileappsContainerOne}>
              <div className={classes.containerOneMargins}>
                <div className={classes.containerOneInner}>
                  <h1 className={classes.containerOneInner}>
                    The Starbucks® app. So rewarding
                  </h1>
                  <span className={classes.containerOneInner}>
                    Get the best of Starbucks® Rewards right at your fingertips.
                    Use our mobile app to order ahead and pay at participating
                    locations or to track the Stars and Rewards you’ve
                    earned—whether you’ve paid with cash, credit card or
                    Starbucks Card. Find stores, redeem offers and so much more.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.mobileappsContainerTwo}>
                <div className={classes.containerTwoMargins}>
                  <div className={classes.containerFlexContainer}>
                    <div className={classes.containerflexItemOne}>
                      <div className={classes.flexitemOneSpacing}>
                        <div className={classes.flexitemOneImage}>
                          <img
                            className={classes.flexitemOneImage}
                            src="./images/starbucksiPhoneApp.webp"
                          />
                        </div>
                        <div className={classes.flexitemOneDescription}>
                          <div className={classes.descriptionOneInner}>
                            <h2 className={classes.descriptionOneInner}>
                              Starbucks® app for iPhone®
                            </h2>
                            <a className={classes.descriptionOneInner}>
                              Download at the App Store
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.containerflexItemTwo}>
                      <div className={classes.flexitemTwoSpacing}>
                        <div className={classes.flexitemTwoImage}>
                          <img
                            className={classes.flexitemTwoImage}
                            src="./images/starbucksAndroidApp.webp"
                          />
                        </div>
                        <div className={classes.flexitemTwoDescription}>
                          <div className={classes.descriptionTwoInner}>
                            <h2 className={classes.descriptionTwoInner}>
                              Starbucks® app for Android™
                            </h2>
                            <a className={classes.descriptionTwoInner}>
                              Download on Google Play
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <BottomPage />
      </>
    );
}
export default MobileApps;
