"use client";

import { useAtBottom } from "@/src/lib/hooks/use-at-bottom";
import { Box } from "@mui/material";
import * as React from "react";
import { useInView } from "react-intersection-observer";

// import { useAtBottom } from '@/lib/hooks/use-at-bottom'

interface ChatScrollAnchorProps {
  trackVisibility?: boolean;
}

export function ChatScrollAnchor({ trackVisibility }: ChatScrollAnchorProps) {
  const isAtBottom = useAtBottom();
  const { ref, entry, inView } = useInView({
    trackVisibility,
    delay: 100,
    rootMargin: "0px 0px -150px 0px",
  });

  React.useEffect(() => {
    if (isAtBottom && trackVisibility && !inView) {
      entry?.target.scrollIntoView({
        block: "start",
      });
    }
  }, [inView, entry, isAtBottom, trackVisibility]);

  return (
    <Box
      ref={ref}
      sx={{ height: "10px", width: "100%" }}
      // className="h-px w-full"
    />
  );
}
