import { IParallaxLayer, ParallaxLayer } from "@react-spring/parallax";
import React, { ReactNode, Ref } from "react";

export default React.forwardRef(
  (
    { children, className }: { children: ReactNode; className?: string },
    ref?: Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={`from-primary-blue px-64 to-blue-300 w-full  h-[45rem] bg-gradient-to-br via-primary-blue flex justify-around ${className}`}
      >
        {children}
      </div>
    );
  }
);
