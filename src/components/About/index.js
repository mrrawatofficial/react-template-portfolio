import React from "react";
import { Panel } from "rsuite";
const index = () => {
  return (
    <section className="about-sec" id="about">
      <div className="container">
        <h3 className="title">About Me</h3>
        <div className="row">
          <div className="col-md-7">
            <div className="about-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                quam architecto corporis, aut magnam voluptas culpa, neque ut
                quasi facere, tempore atque fugit dolores optio? Enim
                praesentium nihil quos sint sed, facere animi nemo itaque
                voluptas asperiores consequatur impedit corrupti incidunt
                nesciunt veritatis autem assumenda.
              </p>
              <p>
                Facilis recusandae dolores corrupti natus sapiente laudantium
                vel iste quae odio, aspernatur porro libero blanditiis, dicta
                numquam cum, autem harum culpa ut.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-box my-3">
              <Panel shaded bordered bodyFill>
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnews.efinancialcareers.com%2Fbinaries%2Fcontent%2Fgallery%2Fefinancial-careers%2Farticles%2F2016%2F03%2FRich-young-man.jpg&f=1&nofb=1"
                  alt=""
                  className="img img-fluid"
                />
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
