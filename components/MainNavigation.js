import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Card, Avatar, Button, Image } from "@nextui-org/react";
import { useContext } from "react";
import DataContext from "../store/data-store.js";
import PlaceIcon from "@material-ui/icons/Place";
import Features from "../components/Features";

function MainNavigation(props) {
  const dataCtx = useContext(DataContext);
  let noOfItems = dataCtx.getNoItems();
  return (
    <>
      <Card bordered shadow={false} hoverable css={{ mw: "100%" }}>
        <div className={classes.mainDiv}>
          <div className={classes.iconDiv}>
            <Link href="http://localhost:3001/">
              <Avatar
                squared
                src="/avatars/logo.svg"
                alt="Starbuck"
                css={{ size: "$50" }}
              />
            </Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/Menu">
              <a>
                <Button auto ghost color="success" rounded bordered>
                  MENU
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/Rewards">
              <a>
                <Button auto ghost color="success" rounded bordered>
                  REWARDS
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/Gift Cards">
              <a>
                <Button auto ghost color="success" rounded bordered>
                  GIFT CARDS
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDivStore}>
            <Link href="https://www.starbucks.com/store-locator?map=53.272992,-6.449843,6z">
              <Button auto ghost color="success" rounded bordered>
                <PlaceIcon fontSize="large" />
                Find a store
              </Button>
            </Link>
          </div>
          <div className={classes.linkDivSignIn}>
            <Link href="/SignIn">
              <Button auto ghost color="success" rounded bordered>
                SignIn
              </Button>
            </Link>
          </div>
          <div className={classes.linkDivJoinNow}>
            <Link href="/JoinNow">
              <Button auto ghost color="warning" rounded bordered>
                JoinNow
              </Button>
            </Link>
          </div>
          <div className={classes.linkDiv}></div>
          <div></div>
        </div>
      </Card>
    </>
  );
}

export default MainNavigation;
