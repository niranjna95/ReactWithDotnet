function Footer() {
  const dt = new Date();
  return (
    <>
      <div className="text-center border-top mt-3 py-2 text-muted">
        <p>Copyright@ {dt.getFullYear()}</p>
      </div>
    </>
  );
}

export default Footer;
