import React from "react";
import Container from "./Container";
import InformationTemplate from "./InformationTemplate";

export default function index() {
  return (
    <Container>
      <InformationTemplate header="Create" src="/Laser.png" to="/create">
        Add Information And Photo
        <li>good</li>
        <li>DIY</li>
        <li>great</li>
      </InformationTemplate>
      <InformationTemplate
        header="Business"
        src="/Laser.png"
        to="/business"
        flip
      >
        Add Information And Photo
        <li>good</li>
        <li>DIY</li>
        <li>great</li>
      </InformationTemplate>
      <InformationTemplate header="Personal" src="/Laser.png" to="/products">
        Add Information And Photo
        <li>good</li>
        <li>DIY</li>
        <li>great</li>
      </InformationTemplate>
    </Container>
  );
}
