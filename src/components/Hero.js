import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Application is in Beta mode.</h1>

    <p className="lead">Please click login and then Authorized users .</p>
    {/* <p>
      Usecase , to send a text using <code>AWS SDK</code>. Deploy the
      application on AWS cluster (docker, fargate, ECS )
    </p> */}
  </div>
);

export default Hero;
