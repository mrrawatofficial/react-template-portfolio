import React, { useState } from "react";
import Icons from "../Icons";
import emailjs from "emailjs-com";
import { Panel } from "rsuite";

const index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, seterror] = useState("");
  const [issubmiting, setissubmiting] = useState(false);
  const [successmsg, setSuccessmsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      seterror("Common..! You must have a name 😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else if (email.length < 5) {
      seterror("Common..! Please enter complete email..!  😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else if (number.length < 10) {
      seterror("Common..! Please enter 10 digit Mobile Number!  😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else if (message == "") {
      seterror("Common..! Please, Write some Message..  😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else if (message.length < 10) {
      seterror("Common..! Please, Write more words..  😅 ");
      setTimeout(() => {
        seterror("");
      }, 3000);
    } else {
      setissubmiting(!issubmiting);
      
      setTimeout(() => {
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
        setissubmiting(false);
        setSuccessmsg(true);
      }, 2000);
      setTimeout(() => {
        setSuccessmsg(false);
      }, 6000);
    }
  };

  return (
    <section className="contact-sec" id="contact">
      <div className="container">
        <h3 className="title">Contact Me</h3>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={sendEmail}>
              <div className="form-group my-2">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <label>E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <label>Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={number}
                  name="number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <h5 className="text-danger text-center my-3">{error}</h5>
              {successmsg && (
                <h5 className="text-success my-3">
                  Message Sent Succesfully!! Will reach back to you as soon as
                  possible..
                </h5>
              )}

              <div className="row">
                <div className="col-md-12 d-grid">
                  <button className="btn btn-info" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="contact-right">
              <h2>Let's Connect</h2>
              <div className="img-box my-3">
                <Panel shaded bordered bodyFill>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnews.efinancialcareers.com%2Fbinaries%2Fcontent%2Fgallery%2Fefinancial-careers%2Farticles%2F2016%2F03%2FRich-young-man.jpg&f=1&nofb=1"
                    alt=""
                    className="img img-fluid"
                  />
                </Panel>
              </div>
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
