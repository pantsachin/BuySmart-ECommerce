import "../../styles.css";
import landingpage from "../pictures/landing-page.svg";
import { Link } from "react-router-dom";

export default function BuySmartLandingPage() {
  return (
    <>
      <div className="landingPage-main-container">
        <div className="landingPage-text">
          {" "}
          <p>Running and Shopping were never so easy</p>
        </div>
        <div className="landingPage-image-container">
          <img className="landingPageImage" src={landingpage} />
        </div>
        <div className="secondary-button landing-button">
          {" "}
          <Link to="/product" style={{ color: "#02066f" }}>
            Let's Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}
