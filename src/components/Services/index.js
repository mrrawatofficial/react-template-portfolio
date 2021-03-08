import React, { useState } from "react";
import { Panel } from "rsuite";

const index = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Design",
      icon: "fas fa-desktop",
    },
    {
      id: 2,
      title: "Web Development",
      icon: "fas fa-desktop",
    },
    {
      id: 3,
      title: "Graphic Design",
      icon: "fas fa-desktop",
    },
    {
      id: 4,
      title: "Web Development",
      icon: "fas fa-desktop",
    },
    {
      id: 5,
      title: "Graphic Design",
      icon: "fas fa-desktop",
    },
  ]);

  return (
    <section className="services-sec" id="services">
      <div className="container">
        <h3 className="title">Services</h3>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 my-2" key={service.id}>
              <Panel shaded bordered bodyFill>
                <div className="service-box">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="service-title">
                    <h4>{service.title}</h4>
                  </div>
                </div>
              </Panel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
