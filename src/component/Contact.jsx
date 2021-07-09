import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  
  const InputEvent = (event) =>{
    const {name,value} = event.target;
    setData((preVal) =>{
      return {
        ...preVal,
        [name]: value,

      }
    })

  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here I wanna say that ${data.msg} `
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Mobile Number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  required

                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput3">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  required
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12 md-auto">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
