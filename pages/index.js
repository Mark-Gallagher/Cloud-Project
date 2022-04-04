import Head from "next/head";
import BottomPage from "../components/BottomHalf";
import Features from "../components/Features";
import MainNavigation from "../components/MainNavigation";
import Menu from "../pages/Menu";

export default function HomePage() {
  return (
    <>
      <MainNavigation />
      <Features />

      <BottomPage/>
    </>
  );
}
