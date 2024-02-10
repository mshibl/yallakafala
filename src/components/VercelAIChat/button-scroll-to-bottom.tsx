"use client";

import { useAtBottom } from "@/src/lib/hooks/use-at-bottom";
import { Box, Button } from "@mui/material";
import * as React from "react";
import { IconArrowDown } from "./ui/icons";

// import { cn } from '@/lib/utils'
// import { useAtBottom } from '@/lib/hooks/use-at-bottom'
// import { Button, type ButtonProps } from '@/components/ui/button'
// import { IconArrowDown } from '@/components/ui/icons'

export function ButtonScrollToBottom() {
  const isAtBottom = useAtBottom();

  return (
    <Button
      // variant="outline"
      // size="icon"
      // className={cn(
      //   'absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2',
      //   isAtBottom ? 'opacity-0' : 'opacity-100',
      //   className
      // )}
      onClick={() =>
        window.scrollTo({
          top: document.body.offsetHeight,
          behavior: "smooth",
        })
      }
      sx={{
        position: "absolute",
        right: "1rem",
        top: "0.5rem",
        zIndex: 10,
        bg: "background",
        transition: "opacity 0.3s",
        opacity: isAtBottom ? 0 : 1,
      }}
      // {...props}
    >
      <IconArrowDown />
      <Box
        component="span"
        sx={{
          ml: 1,
        }}
      >
        Scroll to bottom
      </Box>
      {/* <span className="sr-only">Scroll to bottom</span> */}
    </Button>
  );
}
