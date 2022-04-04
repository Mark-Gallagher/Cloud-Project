import React from "react";
import Link from "next/link";
import classes from "../components/MainNavigation.module.css";
import { Avatar, Card, Button, Container } from "@nextui-org/react";
import { useContext } from "react";
import DataContext from "../store/data-store.js";

function Menu(props) {
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
      <div className={classes.menuNavbar}>
        <nav>
          <ul>
            <li>
              <Link href="/All Products"></Link>
              <a>All Products</a>
            </li>
            <li>
              <Link href="/Featured"></Link>
              <a>Featured</a>
            </li>
            <li>
              <Link href="/Previous Orders"></Link>
              <a>Previous Orders</a>
            </li>
            <li>
              <Link href="/Favourite Products"></Link>
              <a>Favourite Products</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <section>
          <h4>Drinks</h4>
          <ul className={classes.drinksList}>
            <li>
              <a href="/Hot Coffees">Hot Coffees</a>
            </li>
            <li>
              <a href="/Hot Tees">Hot Tees</a>
            </li>
            <li>
              <a href="/Hot Drinks">Hot Drinks</a>
            </li>
            <li>
              <a href="/Frappuccino Blended Beverages">
                Frappuccino Blended Beverages
              </a>
            </li>
            <li>
              <a href="/Cold Coffees">Cold Coffees</a>
            </li>
            <li>
              <a href="/Iced Teas">Iced Teas</a>
            </li>
            <li>
              <a href="/Cold Drinks">Cold Drinks</a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Food</h4>
          <ul>
            <li>
              <a href="/Hot Breakfast">Hot Breakfast</a>
            </li>
            <li>
              <a href="/Bakery">Bakery</a>
            </li>
            <li>
              <a href="/Lunch">Lunch</a>
            </li>
            <li>
              <a href="Snacks">Snacks</a>
            </li>
            <li>
              <a href="/Snacks and Sweets">Snacks and Sweets</a>
            </li>
            <li>
              <a href="Oatmeal and Yoghurt">Oatmeal and Yoghurt</a>
            </li>
          </ul>
        </section>
      </nav>
      <div>
        <h2>Menu</h2>
        <section id="drinks">
          <h3>Drinks</h3>
          <hr aria-hidden="true"></hr>
          <div>
            <div className={classes.drinksListArray}>
              <img src="./images/"></img>
            </div>
          </div>
        </section>
        <section id="food">
          <h3>Food</h3>
          <div>
            <div>
              <img src="./images/"></img>
            </div>
          </div>
        </section>
        <section id="at-home-coffee">
          <h3>At Home Coffee</h3>
          <div>
            <div>
              <img src="./images/"></img>
            </div>
          </div>
        </section>
        <section id="gift-cards">
          <h3>Gift Cards</h3>
          <div>
            <div>
              <img src="./images/"></img>
            </div>
          </div>
        </section>
        <section id="merchandise">
          <h3>Merchandise</h3>
          <div>
            <div>
              <img src="./images/"></img>
            </div>
          </div>
        </section>
      </div>

      <Container>
        <footer>
          <div className={classes.linkDivFlex}>
            <div>
              <ul>
                <h5>About Us</h5>
                <li>Our Company</li>
                <li>Our Coffee</li>
                <li>Stories and News</li>
                <li>Starbucks Available</li>
                <li>Investor Relations</li>
                <li>Customer Service</li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Careers</h5>
                <li>Culture and Values </li>
                <li>Inclusion,Diversity and Equity</li>
                <li>College Achievement Plan</li>
                <li>Alumni Community</li>
                <li>U.S. Careers</li>
                <li>International Careers</li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Social Impact</h5>
                <li>People</li>
                <li>Planet</li>
                <li>Environmental and </li>
                <li>Social Impact Reporting</li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>For Business Partners</h5>
                <li>Landlord Support Center</li>
                <li>Suppliers</li>
                <li>Corporate Gift Card Sales</li>
                <li>Office and Foodservice Coffee</li>
              </ul>
            </div>
            <div>
              <ul>
                <h5>Order and Pickup</h5>
                <li>Order on the app</li>
                <li>Order on the web</li>
                <li>Delivery</li>
                <li>Order and Pickup Options</li>
                <li>Explore and Find Coffee </li>
                <li>for Home</li>
              </ul>
            </div>
          </div>

          <div className={classes.divider}></div>

          <div>
            <div className={classes.footerContainer}>
              <ul className={classes.social}>
                <li>
                  <a href="https://spotify.com">
                    <img src="./images/social-spotify.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com">
                    <img src="./images/social-facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com">
                    <img src="./images/social-pinterest.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com">
                    <img src="./images/social-instagram.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com">
                    <img src="./images/social-youtube.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <img src="./images/social-twitter.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className={classes.rowContainer}>
              <ul className={classes.footerContainer}>
                <li>
                  <a href="https://starbucks.com/terms/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://starbucks.com/terms/starbucks-terms-of-use">
                    <span aria-hidden="true"> | </span>
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43">
                    <span aria-hidden="true"> | </span>
                    CA Supply Chain Act
                  </a>
                </li>
                <li>
                  <a href="">
                    <span aria-hidden="true"> | </span>
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
            <p className={classes.p}>
              © 2022 Starbucks Coffee Company. All rights reserved.
            </p>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default Menu;
