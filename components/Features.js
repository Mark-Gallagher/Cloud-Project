import React from "react";
import classes from "../styles/Featured.module.css";
import { Container, Image } from "@nextui-org/react";

function Features() {
  return (
    <Container>
      <div className={classes.mainDiv}>
        <div className={classes.greenContainer}>
          <div className={classes.greenContainerInner}>
            <div className={classes.greenContainerP}>
              <h3>Start fresh with Starbucks® Rewards</h3>
              <a
                className={classes.greenContainerL}
                href="https://www.starbucks.com/account/create?_branch_match_id=1139309552818834311&utm_source=Web&utm_campaign=Homepage&utm_medium=Marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy5JLEoqTc4u1kssKNDLyczL1jcyDjAKzDX1SypJAgCic1QXJgAAAA%3D%3D"
              >
                Join
              </a>{" "}
              <p> today to earn your way to free coffee and treats.* </p>
            </div>
          </div>
        </div>
        <div className={classes.drinkContainerOne}>
          <div className={classes.drinkContainerInnerOne}>
            <div className={classes.drinkContainerRightItemOne}>
              <img
                className={classes.drinkContainerImgOne}
                src="./images/Pistachio-Cream-Coffee.webp"
                alt="smooth coffee topped with pistachio cream cold foam."
              ></img>
            </div>
            <div className={classes.drinkContainerLeftItemOne}>
              <div className={classes.drinkContainerLeftInner}>
                <h2 className={classes.drinkContainerHeader}>
                  New year, Cool <br></br>new brew
                </h2>
                <br></br>
                <div className={classes.drinkContainerLineOne}>
                  Introducing Pistachio Cream Cold Brew — bold, smooth coffee
                  topped with pistachio cream cold foam.
                </div>
                <a
                  href="https://www.starbucks.com/menu/product/2123702/iced"
                  className={classes.drinkContainerbutton}
                >
                  Try it now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.drinkContainerTwo}>
          <div className={classes.drinkContainerInnerTwo}>
            <div className={classes.drinkContainerLeftItemTwo}>
              <img
                className={classes.drinkContainerImgtwo}
                src="./images/Pistachio-Frappuccino.jpg"
                alt=""
              ></img>
            </div>
            <div className={classes.drinkContainerRightItemTwo}>
              <div className={classes.drinkContainerRightInner}>
                <h2 className={classes.drinkContainerHeaderTwo}>
                  Pistachio your way
                </h2>
                <br></br>
                <div className={classes.drinkContainerLineTwo}>
                  Our creamy Pistachio Frappuccino® blended beverage satisfies
                  all your winter cravings.
                </div>
                <a
                  href="https://www.starbucks.com/menu/product/2123364/iced"
                  className={classes.drinkContainerbuttonTwo}
                >
                  Order now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Features;
