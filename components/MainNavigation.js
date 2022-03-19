import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Card, Avatar, Button } from "@nextui-org/react";
import { useContext } from "react";
import DataContext from "../store/data-store.js";

function MainNavigation(props) {
  const dataCtx = useContext(DataContext);
  let noOfItems = dataCtx.getNoItems();

  return (
    <>
      <Card bordered shadow={false} hoverable css={{ mw: "100%" }}>
        <div className={classes.mainDiv}>
          <Avatar
            squared
            src="/avatars/Starbucks-Logo.png"
            css={{ size: "$20" }}
          />
          <div className={classes.linkDiv}>
            <Link href="/">
              <a>
                <Button shadow color="transparent" auto>
                  Home
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/Menu">
              <a>
                <Button shadow color="transparent" auto>
                  Menu
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/Rewards">
              <a>
                <Button shadow color="transparent" auto>
                  Rewards
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/Gift Cards">
              <a>
                <Button shadow color="transparent" auto>
                  Gift Cards
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDivStore}>
            <Link href="/Store">
              <a>
                <Button shadow color="transparent" auto>
                  <div>
                    <img
                      src="/images/location_icon.jpg"
                      alt=""
                      width="32px"
                      height="32px"
                    ></img>
                  </div>
                  <div> Find a Store</div>
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDivSignIn}>
            <Link href="/SignIn">
              <a>
                <Button shadow color="transparent" auto>
                  SignIn
                </Button>
              </a>
            </Link>
          </div>
          <div className={classes.linkDivJoinNow}>
            <Link href="/JoinNow">
              <a>
                <Button shadow color="black" auto>
                  JoinNow
                </Button>
              </a>
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
