import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Container } from "@nextui-org/react";
import { useContext } from "react";
import DataContext from "../store/data-store.js";
import Features from "../components/Features";

function BottomPage() {
  return (
    <>
      {" "}
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
export default BottomPage;
