import React from "react";
import Card from "./Card";
import Container from "./Container";

export default function index() {
  return (
    <Container>
      <h1 className="text-4xl underline underline-offset-8">Services</h1>
      <div className="flex justify-around w-full">
        <Card
          text="Products"
          src="/overview-personal.png"
          className="-rotate-3"
          to="/products"
        />
        <Card
          text="Business"
          src="/overview-business.png"
          className="-translate-y-3"
          to="/business"
        />
        <Card
          text="Create"
          src="/overview-create.jpg"
          className="rotate-3"
          to="/create"
        />
      </div>
    </Container>
  );
}
