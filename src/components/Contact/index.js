import React, { useState } from "react";
import Icons from "../Icons";
import { FormGroup, ButtonToolbar, Button, Panel } from "rsuite";

const index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messagesent, setMessagesent] = useState(false);


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
              {messagesent && (
                <span className="text-success">
                  Message Sent Succesfully!! Will reach back to you as soon as
                  possible..
                </span>
              )}
              <FormGroup>
                <ButtonToolbar>
                  <Button color="orange" type="submit">
                    Send Message
                  </Button>
                </ButtonToolbar>
              </FormGroup>
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
