import logo from "../images/react.png";
function Header() {
  return (
    <>
      <div className="py-2 pl-1" style={{ borderBottom: "1px solid #777" }}>
        <img src={logo} style={{ height: "35px", verticalAlign: "top" }} />
        <span className="h2 pt-4 m-2,text-white-50">Contacto Pedia</span>
      </div>
    </>
  );
}

export default Header;
