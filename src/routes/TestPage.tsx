import Cookies from "js-cookie";
import Drawer from "../components/Drawer";
import Test from "../components/Test";
import { Redirect } from "@reach/router";

export default function HomePage() {
  if (Cookies.get("accessEmail")) {
    return (
      <div>
        <Drawer />
        <Test />
      </div>
    );
  } else {
    return <Redirect to="/login" noThrow />;
  }
}
