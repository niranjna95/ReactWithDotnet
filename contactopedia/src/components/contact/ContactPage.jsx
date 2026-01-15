import { useState } from "react";

function ContactPage() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Rohit Kumar",
      phone: "666-666-77770",
      email: "rohit@gmail.com",
      isFavorit: false,
    },
    {
      id: 2,
      name: "Ajit Kumar",
      phone: "888-888-7770",
      email: "ajit@gmail.com",
      isFavorit: true,
    },
    {
      id: 3,
      name: "Aman Pal",
      phone: "999-888-6660",
      email: "ajit@gmail.com",
      isFavorit: true,
    },
  ]);
  return (
    <>
      <div className="container" style={{ minHeight: "85vh" }}>
        <div className=" py-3">
          <div className="row py-2">
            <div className="col-4 offset-2">ADD Contact</div>
            <div className="col-4 offset-2">Remove Contact</div>
          </div>
          <div className="py-2">
            <div className="col-12">Form to add new Contact</div>
          </div>
          <div className="py-2">
            <div className="col-12">Favoirte Contact</div>
          </div>
          <div className="py-2">
            <div className="col-12">General Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
