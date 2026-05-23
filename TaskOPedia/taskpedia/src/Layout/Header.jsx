function Header() {
  const logo = "./../public/react.png";
  return (
    <div className="p-2">
      <img src={logo} style={{ width: 30 }} />
      <span className="text-success"> Welecome to the React</span>
    </div>
  );
}

export default Header;
