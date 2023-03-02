import React from "react";
import classes from "./Rewards.module.css";
import BottomPage from "./BottomHalf";
import Box from "@mui/material/Box";
import MainNavigation from "./MainNavigation";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import DataContext from "../store/data-store.js";
import Link from "next/link";

function Rewards(props) {
  const dataCtx = useContext(DataContext);
  let noOfItems = dataCtx.getNoItems();

  // const [showImage, setShowImage] = useState(1);

  // const toggleTab = (index) => {
  //   setShowImage(index);
  // };

  return (
    <>
      <div className={classes.rewardsNavbar}>
        <div className={classes.rewardsNavbarP}>
          <h5> Starbucks® Rewards</h5>
        </div>
      </div>
      <div>
        <div className={classes.rewardsMainSection}>
          <h4 className={classes.rewardsMainSectionTitle}>
            FREE COFFEE
            <br />
            IS A TAP AWAY
          </h4>
          <div>
            <span className={classes.rewardsMainSectionLineOne}>
              Join now to start earning Rewards.
            </span>
          </div>
          <div className={classes.rewardsJoinNow}>
            <Link href="/JoinNow">
              <button>JoinNow</button>
            </Link>
          </div>
          <div className={classes.rewardsMainSectionLineTwo}>
            <span className={classes.rewardsMainSectionLineTwo}>
              Or
              <a href="/MobileApps" className={classes.rewardsLineTwoLink}>
                join in the app
              </a>
              for the best experience
            </span>
          </div>
        </div>
        <div className={classes.rewardsMiddleSectionPadding}>
          <div className={classes.rewardsMiddleSectionContainer}>
            <div className={classes.rewardsMiddleSectionContainerOne}>
              <h2 className={classes.rewardsMiddleSectionTitle}>
                Getting started is easy
              </h2>
              <div className={classes.rewardsMiddleSectionLineOne}>
                Earn Stars and get rewarded in a few easy steps.
              </div>
            </div>
            <div className={classes.rewardsMiddleSection}>
              <div className={classes.rewardsMiddleSectionContainerTwo}>
                <div className={classes.rewardsFlexImageOne}>
                  <img
                    src="./images/rewardsImageOne.webp"
                    className={classes.rewardsFlexImageOne}
                  />
                </div>
                <div className={classes.rewardsFlexContentOne}>
                  <h3 className={classes.rewardsFlexContentOne}>
                    Create an Account
                  </h3>
                  <span className={classes.rewardsFlexContentOne}>
                    To get started,
                    <a href="/JoinNow">join now</a>
                    .You can also
                    <a href="/Rewards/MobileApps">join in the app</a>
                    to get access to the full range of Starbucks® Rewards
                    benefits.
                  </span>
                </div>
              </div>
              <div className={classes.rewardsMiddleSectionContainerThree}>
                <div className={classes.rewardsFlexImageTwo}>
                  <img
                    src="./images/rewardsImageTwo.webp"
                    className={classes.rewardsFlexImageTwo}
                  />
                </div>
                <div className={classes.rewardsFlexContentTwo}>
                  <h3 className={classes.rewardsFlexContentTwo}>
                    Order and pay how you’d like
                  </h3>
                  <span className={classes.rewardsFlexContentTwo}>
                    Use cash, credit/debit card or save some time and pay right
                    through the app. You’ll collect Stars all ways.
                    <a className={classes.rewardsFlexContentTwo}>Learn How</a>
                  </span>
                </div>
              </div>
              <div className={classes.rewardsMiddleSectionContainerFour}>
                <div className={classes.rewardsFlexImageThree}>
                  <img
                    src="./images/rewardsImageThree.webp"
                    className={classes.rewardsFlexImageThree}
                  />
                </div>
                <div className={classes.rewardsFlexContentThree}>
                  <h3 className={classes.rewardsFlexContentThree}>
                    Earn Stars, get Rewards
                  </h3>
                  <span className={classes.rewardsFlexContentThree}>
                    As you earn Stars, you can redeem them for Rewards—like free
                    food, drinks, and more.Start redeeming with as little as 25
                    Stars!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.rewardsMiddleSectionTwo}>
            <div className={classes.rewardsMiddleSectionTwoInner}>
              <div className={classes.rewardsMiddleSectionTwoContainerOne}>
                <h2 className={classes.rewardsMiddleSectionTwoContainerOne}>
                  Get your favorites for free
                </h2>
              </div>
              <div className={classes.rewardsMiddleSectionTwoContainerTwo}>
                <div className={classes.rewardsContainerTwoPadding}>
                  <a className={classes.rewardsMiddleSectionTwoContainerTwo}>
                    <span
                      className={classes.rewardsMiddleSectionTwoContainerTwo}
                    >
                      25
                      <span className={classes.rewardsContainerTwoSymbol}>
                        ★
                      </span>
                      <span className={classes.rewardsContainerTwoSymbol} />
                    </span>
                  </a>
                  <a className={classes.rewardsMiddleSectionTwoContainerTwo}>
                    <span
                      className={classes.rewardsMiddleSectionTwoContainerTwo}
                    >
                      100
                      <span className={classes.rewardsContainerTwoSymbol}>
                        ★
                      </span>
                      <span className={classes.rewardsContainerTwoSymbol} />
                    </span>
                  </a>
                  <a className={classes.rewardsMiddleSectionTwoContainerTwo}>
                    <span
                      className={classes.rewardsMiddleSectionTwoContainerTwo}
                    >
                      200
                      <span className={classes.rewardsContainerTwoSymbol}>
                        ★
                      </span>
                      <span className={classes.rewardsContainerTwoSymbol} />
                    </span>
                  </a>
                  <a className={classes.rewardsMiddleSectionTwoContainerTwo}>
                    <span
                      className={classes.rewardsMiddleSectionTwoContainerTwo}
                    >
                      300
                      <span className={classes.rewardsContainerTwoSymbol}>
                        ★
                      </span>
                    </span>
                  </a>
                  <a className={classes.rewardsMiddleSectionTwoContainerTwo}>
                    <span
                      className={classes.rewardsMiddleSectionTwoContainerTwo}
                    >
                      400
                      <span className={classes.rewardsContainerTwoSymbol}>
                        ★
                      </span>
                    </span>
                  </a>
                </div>
                <div className={classes.rewardsContainerThree}>
                  <div className={classes.rewardsContainerThreeInnerSection}>
                    <div className={classes.rewardsContainerThreeInner}>
                      <div className={classes.innerSectionOnePadding}>
                        <div className={classes.innerSectionOne}>
                          <div className={classes.innerSectionOneShadow} />
                          <img
                            src="./images/customizeDrink.webp"
                            className={classes.innerSectionOne}
                          />
                        </div>
                        <div className={classes.innerSectionTwo}>
                          <h3 className={classes.innerSectionTwo}>
                            Customize your Drink
                          </h3>
                          <span className={classes.innerSectionTwo}>
                            Make your drink just right with an extra espresso
                            shot, dairy substitute or a dash of your favorite
                            syrup.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rewardsMiddleSectionThree}>
        <div className={classes.rewardsMiddleSectionThreeContainerOne}>
          <h2 className={classes.rewardsMiddleSectionThreeContainerOne}>
            Endless Extras
          </h2>
          <span className={classes.rewardsMiddleSectionThreeLineOne}>
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </span>
        </div>
        <div className={classes.rewardsMiddleSectionThreeInner}>
          <div className={classes.rewardsMiddleSectionThreeContainerTwo}>
            <div className={classes.rewardsFlexTwoImageOne}>
              <img
                src="./images/1-fun-freebies.webp"
                className={classes.rewardsFlexTwoImageOne}
              />
            </div>
            <div className={classes.rewardsFlexTwoContentOne}>
              <h3 className={classes.rewardsFlexTwoContentOne}>Fun freebies</h3>
              <span className={classes.rewardsFlexTwoContentOne}>
                Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills.
              </span>
              <button className={classes.rewardsFlexTwoContentOne}>
                Learn more
                <span className={classes.contentOneHiddenCarousel} />
              </button>
            </div>
          </div>
          <div className={classes.rewardsMiddleSectionThreeContainerThree}>
            <div className={classes.rewardsFlexTwoImageTwo}>
              <img
                src="./images/2-order-and-pay-ahead.webp"
                className={classes.rewardsFlexTwoImageTwo}
              />
            </div>
            <div className={classes.rewardsFlexTwoContentTwo}>
              <h3 className={classes.rewardsFlexTwoContentTwo}>
                Order & pay ahead
              </h3>
              <span className={classes.rewardsFlexTwoContentTwo}>
                Enjoy the convenience of in-store, curbside or drive-thru pickup
                at select stores.
              </span>
              <a className={classes.rewardsFlexTwoContentTwo}>Learn more</a>
            </div>
          </div>
          <div className={classes.rewardsMiddleSectionThreeContainerFour}>
            <div className={classes.rewardsFlexTwoImageTwo}>
              <img
                src="./images/3-get-to-free-faster.webp"
                className={classes.rewardsFlexTwoImageThree}
              />
            </div>
            <div className={classes.rewardsFlexTwoContentThree}>
              <h3 className={classes.rewardsFlexTwoContentThree}>
                Get to free faster
              </h3>
              <span className={classes.rewardsFlexTwoContentThree}>
                Earn Stars even quicker with Bonus Star challenges, Double Star
                Days and exciting games.
              </span>
              <a className={classes.rewardsFlexTwoContentThree}>Learn more</a>
            </div>
          </div>
        </div>
        <div className={classes.rewardsMiddleSectionFour}>
          <div className={classes.rewardsMiddleSectionFourContainerOne}>
            <div className={classes.rewardsMiddleSectionFourDimensions}>
              <div className={classes.rewardsMiddleSectionFourInner}>
                <div className={classes.rewardsContainerFourSectionOne}>
                  <h2 className={classes.rewardsContainerFourSectionOne}>
                    Cash or card, you earn Stars
                  </h2>
                  <span className={classes.rewardsContainerFourSectionOne}>
                    No matter how you pay, you can earn Stars with your morning
                    coffee. Those Stars add up to (really delicious) Rewards.
                  </span>
                </div>
                <div className={classes.rewardsContainerFourSectionTwo}>
                  <div className={classes.rewardsgridItemOne}>
                    <h4 className={classes.rewardsgridItemOne}>
                      1★ per dollar
                    </h4>
                    <span>Pay as you go</span>
                  </div>
                  <div className={classes.rewardsgridItemTwo}>
                    <div className={classes.rewardsgridItemTwoInner}>
                      <div className={classes.rewardsFlexItemOne}>
                        <img
                          src="./images/Scan&Pay.png"
                          className={classes.rewardsFlexItemOne}
                        />
                      </div>
                      <div className={classes.rewardsFlexItemTwo}>
                        <h3
                          className={classes.rewardsFlexItemTwo}
                          tabIndex="-1"
                        >
                          Scan and pay separately
                        </h3>
                        <span>
                          Use cash or credit/debit card at the register.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.rewardsgridItemThree}>
                    <div className={classes.rewardsgridItemThreeInner}>
                      <div className={classes.rewardsFlexItemThree}>
                        <img
                          src="./images/SavePayment.webp"
                          className={classes.rewardsFlexItemThree}
                        />
                      </div>
                      <div className={classes.rewardsFlexItemFour}>
                        <h3
                          className={classes.rewardsFlexItemFour}
                          tabIndex="-1"
                        >
                          Save payment in the app
                        </h3>
                        <span className={classes.rewardsFlexItemFour}>
                          Check-out faster by saving a credit/debit card or
                          PayPal to your account. You’ll be able to order ahead
                          or scan and pay at the register in one step.
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                </div>
                <div className={classes.rewardsContainerFourSectionTwo}>
                  <div className={classes.rewardsgridItemFour}>
                    <h4 className={classes.rewardsgridItemFour}>
                      2★ per dollar
                    </h4>
                    <span>Pay as you go</span>
                  </div>
                  <div className={classes.rewardsgridItemFive}>
                    <div className={classes.rewardsgridItemFiveInner}>
                      <div className={classes.rewardsFlexItemFive}>
                        <img
                          src="./images/Preload.webp"
                          className={classes.rewardsFlexItemFive}
                        />
                      </div>
                      <div className={classes.rewardsFlexItemSix}>
                        <h3
                          className={classes.rewardsFlexItemSix}
                          tabIndex="-1"
                        >
                          Preload
                        </h3>
                        <span className={classes.rewardsFlexItemSix}>
                          To save time and earn Stars twice as fast, add money
                          to your digital Starbucks Card using any payment
                          option. Scan and pay in one step or order ahead in the
                          app.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.rewardsgridItemSix}>
                    <div className={classes.rewardsgridItemSixInner}>
                      <div className={classes.rewardsFlexItemSeven}>
                        <img
                          src="./images/RegisterYourGiftCard.webp"
                          className={classes.rewardsFlexItemSeven}
                        />
                      </div>
                      <div className={classes.rewardsFlexItemEight}>
                        <h3
                          className={classes.rewardsFlexItemEight}
                          tabIndex="-1"
                        >
                          Register your gift card
                        </h3>
                        <span>
                          Then use it to pay through the app. You can even
                          consolidate balances from multiple cards in one place.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rewardsBottomSectionOne}>
          <div className={classes.rewardsBottomSectionOneContainerOne}>
            <div className={classes.rewardsContainerOneDimensions}>
              <div className={classes.rewardsContainerOneInnerSpacing}>
                <div className={classes.rewardsContainerOneInner}>
                  <h2
                    className={classes.rewardsContainerOneInner}
                    tabIndex="-1"
                  >
                    Star Codes
                  </h2>
                  <form method="post" noValidate="">
                    <div className={classes.rewardsContainerOneInnerLineOne}>
                      * indicates required field
                    </div>
                    <div className={classes.rewardsformTextFieldOutline}>
                      <Box
                        sx={{
                          width: 500,
                          maxWidth: "100%",
                        }}
                      >
                        <TextField
                          id="standard-basic"
                          fullWidth
                          label="* Enter your Star Code"
                          normal
                          color="success"
                        />
                      </Box>
                    </div>
                    <div className={classes.rewardsButtonSpacing}>
                      <div className={classes.rewardsOutline}>
                        <div className={classes.rewardsFlex}>
                          <div className={classes.rewardsButtonBorder}>
                            <button className={classes.rewardsSubmitButton}>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rewardsBottomSectionTwo}>
          <div className={classes.rewardsBottomSectionTwoContainerOne}>
            <div className={classes.rewardscontainerOneDimensions}>
              <div className={classes.rewardscontainerOneInnerSpacing}>
                <div className={classes.rewardscontainerOneInner}>
                  <h2 className={classes.rewardscontainerOneInner}>
                    Questions?
                  </h2>
                  <span className={classes.rewardscontainerOneInner}>
                    We want to help in any way we can. You can ask your barista
                    anytime or we’ve answered the most commonly asked questions
                    <a
                      href="https://customerservice.starbucks.com/app/answers/list/p/552"
                      className={classes.rewardscontainerOneInner}
                    >
                      right over here
                      <svg className={classes.rewardscontainerOneInner}>
                        <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                      </svg>
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rewardsBottomSectionThree}>
          <div className={classes.rewardsBottomSectionThreeContainerOne}>
            <div className={classes.rewardsbottomSectionThreeDimensions}>
              <div className={classes.rewardsbottomSectionThreeInner}>
                <div className={classes.rewardsbottomSectionThreeInnerSpacing}>
                  <p className={classes.rewardsbottomSectionThreeInnerSpacing}>
                    At participating stores. Restrictions apply.
                  </p>
                  <div className={classes.rewardsbottomSectionThreeBlockOne}>
                    <h2 className={classes.rewardsbottomSectionThreeBlockOne}>
                      Earning Stars
                    </h2>
                    <p className={classes.rewardsbottomSectionThreeBlockOne}>
                      Stars cannot be earned on purchases of alcohol,Starbucks
                      Cards or Starbucks Card reloads.
                    </p>
                    <p className={classes.rewardsbottomSectionThreeBlockOne}>
                      Earn 1 Star per $1 spent when you scan your member barcode
                      in the app, then pay with cash, credit/debit cards or
                      mobile wallets at participating stores. You can also earn
                      1 Star per $1 spent when you link a payment method and pay
                      directly through the app.
                    </p>
                    <div className={classes.rewardsbottomSectionThreeLine}>
                      Earn 2 Stars per $1 spent when you load funds and pay with
                      your digital Starbucks Card in the app. You can also earn
                      2 Stars per $1 spent when you pay in-person at a
                      participating store with your registered physical
                      Starbucks Card or scan your member barcode in the app, and
                      then use any physical Starbucks Card (regardless of
                      whether it is registered) to complete the purchase.
                    </div>
                  </div>
                  <div className={classes.rewardsbottomSectionThreeBlockTwo}>
                    <h2 className={classes.rewardsbottomSectionThreeBlockTwo}>
                      Terms of Use
                    </h2>
                    <p className={classes.rewardsbottomSectionThreeBlockTwo}>
                      For full program details visit
                      <a
                        href="https://www.starbucks.com/rewards/terms/"
                        className={classes.rewardsbottomSectionThreeBlockTwo}
                      >
                        <span
                          className={classes.rewardsbottomSectionThreeBlockTwo}
                        >
                          starbucks.com/rewards/terms
                          <svg
                            className={
                              classes.rewardsbottomSectionThreeBlockTwo
                            }
                          >
                            <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                          </svg>
                        </span>
                      </a>
                    </p>
                    <p className={classes.rewardsbottomSectionThreeBlockTwo}>
                      * Earn 1 Star per $1 when digitally loading your Starbucks
                      Card with your Starbucks® Rewards Visa® Card: See your
                      Card Rewards Program Agreement for more details.
                    </p>
                    <p className={classes.rewardsbottomSectionThreeBlockTwo}>
                      Starbucks® Rewards benefits are available at participating
                      Starbucks stores. Not all stores have the ability to honor
                      Rewards at this time. Visit the
                      <a
                        href="https://www.starbucks.com/store-locator"
                        className={classes.rewardsbottomSectionThreeBlockTwo}
                      >
                        <span
                          className={classes.rewardsbottomSectionThreeBlockTwo}
                        >
                          Starbucks Store Locator
                          <svg
                            className={
                              classes.rewardsbottomSectionThreeBlockTwo
                            }
                          >
                            <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                          </svg>
                        </span>
                      </a>
                      and search for locations honoring “Redeem Rewards”
                    </p>
                    <div className={classes.rewardsbottomSectionThreeLine}>
                      Deposit and credit card products provided by JPMorgan
                      Chase Bank, N.A. Member FDIC
                    </div>
                  </div>
                  <div className={classes.rewardsbottomSectionThreeBlockThree}>
                    <h2 className={classes.rewardsbottomSectionThreeBlockThree}>
                      Benefits
                    </h2>
                    <p className={classes.rewardsbottomSectionThreeBlockThree}>
                      Free refills available during same in-store visit only. To
                      qualify for the Birthday Reward, you must have made at
                      least one Star-earning transaction.
                    </p>
                  </div>
                  <div className={classes.rewardsbottomSectionThreeBlockFour}>
                    <h2 className={classes.rewardsbottomSectionThreeBlockFour}>
                      Redeeming Rewards
                    </h2>
                    <p className={classes.rewardsbottomSectionThreeBlockFour}>
                      Rewards cannot be redeemed for alcoholic beverages or
                      multi-serve items. Not all stores honor tiered Rewards.
                      Select stores redeem 150 Stars for free food or drink
                      items only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomPage />
    </>
  );
}
export default Rewards;
