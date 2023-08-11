import React from "react";

const Prerequest = () => {
  return (
    <section className="main pre-main">
      <div className="">
        <h2 className="greeting">Pre-request Form</h2>
        <form action="#" className="pre-form">
          <div className="firstname">
            <input
              type="text"
              name="firsname"
              id="firstname"
              placeholder="First Name"
              required
            />
          </div>

          <div className="middlename">
            <input
              type="text"
              name="middlename"
              id="middlename"
              placeholder="Middle Name"
              required
            />
          </div>

          <div className="lastname">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="phone">
            <input type="tel" placeholder="Phone No" name="phone" required />
          </div>

          
          <div className="provider">
            <input
              type="text"
              placeholder="Provider Name"
              name="providerName"
              required
            />
          </div>
          <div className="office">
            <input
              type="text"
              placeholder="Office No"
              name="officeNO"
              required
            />
          </div>
          <div className="floor">
            <input type="text" placeholder="Floor No" name="floorNo" required />
          </div>
          <div className="department">
            <select name="department" id="dep" required>
              <option value="sdc">sdc</option>
              <option value="erp">erp</option>
            </select>
          </div>
          
          <div className="date">
            <input type="date" name='date' required />
          </div>

          <div className="qr-code">
            
          </div>
          <button className="pre-submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Prerequest;
