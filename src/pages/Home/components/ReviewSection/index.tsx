import React from "react";
import Container from "./Container";
import ReviewTemplate from "./ReviewTemplate";

export default function index() {
  return (
    <Container>
      <h1 className="font-bold text-3xl underline underline-offset-8">
        Reviews
      </h1>
      <div className="flex w-full justify-around">
        <ReviewTemplate />
        <ReviewTemplate />
        <ReviewTemplate />
      </div>
    </Container>
  );
}
