import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Send text to practice group.</h1>

    <p className="lead">This is a application in beta mode.</p>
    <p>
      Usecase , to send a txet use <code>AWS SDK</code>. Deploy the application
      on AWS cluster (docker, fargate, ECS )
    </p>
  </div>
);

export default Hero;
