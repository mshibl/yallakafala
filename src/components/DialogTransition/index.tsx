import { isUsingMobile } from "@/src/utils/mobile-utils";
import { Fade, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const DialogTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  // If on mobile, the dialog should slide up from the bottom
  const isMobile = isUsingMobile();

  if (isMobile) {
    return <Slide direction="up" ref={ref} {...props} />;
  }

  // If on desktop, the dialog should fade in from the center
  return <Fade ref={ref} {...props} />;
});

export default DialogTransition;
