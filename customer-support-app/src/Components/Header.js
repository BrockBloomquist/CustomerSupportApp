import Navbar from "react-bootstrap/Navbar";
import Icon from "../assets/img/Icon_BLUE.png";

function Header() {
  return (
    <>
      <Navbar
        bg="dark"
        style={{
          borderBottom: "3px solid",
        }}
      >
        <Navbar.Brand>
          <img
            src={Icon}
            width="50px"
            height="50px"
            className="d-inline-block align-top"
            alt="supportLogo"
          />
        </Navbar.Brand>
        <h3
          className="text-white"
          style={{
            left: "0px",
            right: "0px",
          }}
        >
          Support Ticket Form
        </h3>
      </Navbar>
    </>
  );
}

export default Header;
