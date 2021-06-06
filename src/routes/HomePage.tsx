import { Redirect } from "@reach/router";
import Cookies from "js-cookie";
import Drawer from "../components/Drawer";
import HeroLanding from "../components/HeroLanding";

export default function HomePage() {
  if (Cookies.get("accessEmail")) {
    return (
      <div>
        <Drawer />
        <HeroLanding />
      </div>
    );
  } else {
    return <Redirect to="/login" noThrow />;
  }
}
