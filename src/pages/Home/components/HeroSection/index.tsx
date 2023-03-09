import { Rating } from "@mui/material";
import { IParallaxLayer } from "@react-spring/parallax";
import React, { LegacyRef, MutableRefObject, useEffect } from "react";
import { Ref } from "react";
import Container from "./Container";
import Images from "./Images";
import Text from "./Text";

export default React.forwardRef<
  HTMLDivElement,
  { contentRef: MutableRefObject<HTMLDivElement> }
>(({ contentRef }, ref?: Ref<HTMLDivElement>) => {
  useEffect(() => {
    console.log(contentRef.current);
  }, [contentRef]);
  return (
    <Container ref={ref}>
      <Text contentRef={contentRef} />
      <Images />
    </Container>
  );
});
