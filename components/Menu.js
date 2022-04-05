import React from "react";
import Link from "next/link";
import classes from "./Menu.module.css";
import { useContext } from "react";
import DataContext from "../store/data-store.js";
import MainNavigation from "./MainNavigation";
import BottomPage from "./BottomHalf";

function Menu(props) {
  const dataCtx = useContext(DataContext);
  let noOfItems = dataCtx.getNoItems();
  return (
    <>
      <nav>
        <ul className={classes.menuNavbar}>
          <li>
            <Link href="/All Products">
              <a>All Products</a>
            </Link>
          </li>
          <li>
            <Link href="/Featured">
              <a>Featured</a>
            </Link>
          </li>
          <li>
            <Link href="/Previous Orders">
              <a>Previous Orders</a>
            </Link>
          </li>
          <li>
            <Link href="/Favourite Products">
              <a>Favourite Products</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <nav>
          <section>
            <ul className={classes.drinksList}>
              <li>
                <h4>Drinks</h4>
                <Link href="/Hot Coffees">
                  <a>Hot Coffees</a>
                </Link>
              </li>
              <li>
                <Link href="/Hot Tees">
                  <a>Hot Tees</a>
                </Link>
              </li>
              <li>
                <Link href="/Hot Drinks">
                  <a>Hot Drinks</a>
                </Link>
              </li>
              <li>
                <Link href="/Frappuccino Blended Beverages">
                  <a> Frappuccino Blended Beverages</a>
                </Link>
              </li>
              <li>
                <Link href="/Cold Coffees">
                  <a>Cold Coffees</a>
                </Link>
              </li>
              <li>
                <Link href="/Iced Teas">
                  <a>Iced Teas</a>
                </Link>
              </li>
              <li>
                <Link href="/Cold Drinks">
                  <a>Cold Drinks</a>
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <ul className={classes.drinksList}>
              <li>
                <h4>Food</h4>
                <Link href="/Hot Breakfast">
                  <a>Hot Breakfast</a>
                </Link>
              </li>
              <li>
                <Link href="/Bakery">
                  <a>Bakery</a>
                </Link>
              </li>
              <li>
                <Link href="/Lunch">
                  <a>Lunch</a>
                </Link>
              </li>
              <li>
                <Link href="/Snacks and Sweets">
                  <a>Snacks and Sweets</a>
                </Link>
              </li>
              <li>
                <Link href="/Oatmeal and Yoghurt">
                  <a>Oatmeal and Yoghurt</a>
                </Link>
              </li>
            </ul>
          </section>
        </nav>
        <div>
          <h2>Menu</h2>
          <section id="drinks">
            <h3>Drinks</h3>
            <hr aria-hidden="true"></hr>
            <div className={classes.drinksArrayList}>
              <div>
                <img src="./images/Hot-Coffees.webp"></img>
                Hot Coffees
              </div>
              <div>
                <img src="./images/Hot-Teas.webp"></img>
                Hot Teas
              </div>
              <div>
                <img src="./images/Hot-Drinks.webp"></img>
                Hot Drinks
              </div>
              <div>
                <img src="./images/Frappuccino.webp"></img>
                Frappuccino
              </div>
              <div>
                <img src="./images/Cold-Coffees.webp"></img>
                Cold Coffees
              </div>
              <div>
                <img src="./images/Iced-Teas.webp"></img>
                Iced Teas
              </div>
              <div>
                <img src="./images/Cold-Drinks.webp"></img>
                Cold Drinks
              </div>
            </div>
          </section>
          <section id="food">
            <h3>Food</h3>
            <div className={classes.foodsArrayList}>
              <div>
                <img src="./images/Hot-Breakfast.webp"></img>
                Hot Breakfast
              </div>
              <div>
                <img src="./images/Bakery.webp"></img>
                Bakery
              </div>
              <div>
                <img src="./images/Lunch.webp"></img>
                Lunch
              </div>
              <div>
                <img src="./images/Snacks-and-Sweets.webp"></img>
                Snacks & Sweets
              </div>
              <div>
                <img src="./images/Oatmeal-and-Yoghurt.webp"></img>
                Oatmeal & Yoghurt
              </div>
            </div>
          </section>
        </div>
      </div>
      <BottomPage />
    </>
  );
}

export default Menu;
