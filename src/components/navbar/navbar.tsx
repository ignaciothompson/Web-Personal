import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".navbar"); // Adjust the selector as needed
      if (window.scrollY > 100) {
        // Check if the scroll is more than 50 pixels
        element?.classList.add("scrolled");
      } else {
        element?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
      <div className="navbarContent">
        <div className="navbarTitle">
          <h1>Ignacio Thompson</h1>
        </div>
        <div className="goToTop">
          <button className="arrowTopBtn">
            <img
              src={"/icons/arrowBlack.svg"}
              alt="arrow"
              className="arrowTop"
              onClick={ScrollTop}
            />
          </button>
        </div>
        <div className="navbarButtons">
            {location.pathname !== '/contact' && (
                <Link to="/contact" className="contactLink">
                <button className="navbarButton primary">
                  <div className="buttonContent">
                    <img
                      src={"/icons/arrowWhite.svg"}
                      alt="arrow"
                      className="arrow"
                    />
                    Contacto
                    <img src={"/icons/point.svg"} alt="point" className="point" />
                  </div>
                </button>
              </Link>
            )}
          <button className="navbarButton">
            Menu <img src={"/icons/2dots.svg"} alt="dots" className="dots" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
