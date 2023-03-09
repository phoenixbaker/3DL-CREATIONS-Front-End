import React from "react";
import Container from "./Container";
import DropDownTemplate from "./DropDownTemplate";

export default function index() {
  return (
    <Container>
      <h1 className="font-bold text-2xl underline underline-offset-8 ">FAQ</h1>
      <div className="w-full shadow-lg">
        <DropDownTemplate shown question="Question 1">
          Answer
        </DropDownTemplate>
        <DropDownTemplate question="Question 2">Answer</DropDownTemplate>
        <DropDownTemplate question="Question 3">Answer</DropDownTemplate>
        <DropDownTemplate question="Question 4">Answer</DropDownTemplate>
      </div>
    </Container>
  );
}
