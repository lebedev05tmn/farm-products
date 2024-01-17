import imageLink from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src={imageLink} width={"398"} height={"44"} />
    </Link>
  );
}
