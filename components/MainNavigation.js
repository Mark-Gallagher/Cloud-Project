import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Card, Avatar, Button } from "@nextui-org/react";
import { useContext } from "react";
import DataContext from "../store/data-store.js";
import Features from "../components/Features";

function MainNavigation(props) {
  const dataCtx = useContext(DataContext);
  let noOfItems = dataCtx.getNoItems();
  return (
    <>
      <Card bordered shadow={false} hoverable css={{ mw: "100%" }}>
        <div className={classes.mainDiv}>
          <Avatar
            squared
            src="/avatars/logo.svg"
            alt="Starbuck"
            css={{ size: "$16" }}
          />
          <div className={classes.linkDiv}>
            <Link href="/Menu">
              <a>
                <Button
                  onclick="Menu()"
                  auto
                  ghost
                  color="success"
                  rounded
                  bordered
                >
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
            <Link href="/Store">
              <Button auto ghost color="success" rounded bordered>
                <div>
                  <img src="/images/marker.svg" alt="marker"></img>
                  <div></div>
                </div>
                <div> Find a store</div>
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
              <Button auto ghost color="success" rounded bordered>
                JoinNow
              </Button>
            </Link>
          </div>
          <div className={classes.linkDiv}>
            <Avatar
              text={noOfItems}
              size="md"
              color="white"
              textColor="black"
            />
          </div>
          <div></div>
        </div>
      </Card>
    </>
  );
}

export default MainNavigation;
