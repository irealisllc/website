import React from 'react';

const Services = () => {
  return (
    <div id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Smart Automation</h5>
                <p className="card-text">Automate your repetitive tasks and workflows with our intelligent automation solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Data Analytics</h5>
                <p className="card-text">Gain valuable insights from your data with our advanced data analytics services.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Custom Solutions</h5>
                <p className="card-text">We develop custom-tailored solutions to meet your specific business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
