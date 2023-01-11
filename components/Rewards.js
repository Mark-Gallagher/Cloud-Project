import React from "react";
import classes from "./Rewards.module.css";
import BottomPage from "./BottomHalf";
import { Button, Container } from "@nextui-org/react";
import MainNavigation from "./MainNavigation";
import { useContext } from "react";
import DataContext from "../store/data-store.js";
import Link from "next/link";

function Rewards(props) {
  const dataCtx = useContext(DataContext);
  let noOfItems = dataCtx.getNoItems();
  return (
    <>
      <Container>
        <div>
          <div className={classes.rewardsNavbar}>
            <div className={classes.rewardsNavbarP}>
              <h5> Starbucks® Rewards</h5>
            </div>
          </div>
        </div>
        <div >
          <div className={classes.rewardsMainSection}>
            <h4 className={classes.rewardsMainSectionTitle}>
              Free Coffee
              <br></br>
              Is A Tap Away
            </h4>
            <div>
              <span className={classes.rewardsMainSectionLineOne}>
                Join now to start earning Rewards.
              </span>
            </div>
            <div className={classes.rewardsJoinNow}>
              <Link href="https://www.starbucks.com/account/create">
                <Button auto ghost color="success" rounded bordered>
                  JoinNow
                </Button>
              </Link>
            </div>
            <div>
              <span className={classes.rewardsMainSectionLineTwo}>
                Or
                <a href="https://www.starbucks.com/rewards/mobile-apps/" className={classes.rewardsMainSectionLineTwo}>
                  join in the app
                </a>
               for the best experience
              </span>
            </div>
          </div>
        </div>
      </Container>

      <BottomPage />
    </>
  );
}
export default Rewards;
