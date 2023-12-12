import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar
        bg="light"
        style={{
          borderBottom: "3px solid",
        }}
      >
        <Navbar.Brand>
          <img
            src="../assets/img/Icon_Black.png"
            width="50px"
            height="50px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
