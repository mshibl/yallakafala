"use client";

import { useCopyToClipboard } from "@/src/lib/hooks/use-copy-to-clipboard";
import { Box, Button } from "@mui/material";
import { type Message } from "ai";
import { IconCheck, IconCopy } from "./ui/icons";

// import { Button } from '@/components/ui/button'
// import { IconCheck, IconCopy } from '@/components/ui/icons'
// import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
// import { cn } from '@/lib/utils'

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  message: Message;
}

export function ChatMessageActions({
  message,
  // className,
  // ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  return (
    <Box
      // className={cn(
      //   'flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0',
      //   className
      // )}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        transition: "opacity 0.2s",
        opacity: 0,
        "&:hover": {
          opacity: 1,
        },
        position: "absolute",
        right: "-1.25rem",
        top: "-0.5rem",
      }}
      // component="div"
      // message={message}

      // {...props}
    >
      <Button
        // variant="ghost" size="icon"
        onClick={onCopy}
        sx={{
          "&:hover": {
            bg: "zinc-800",
          },
          "&:focus": {
            ring: "1",
            ringOffset: "0",
          },
        }}
      >
        {isCopied ? <IconCheck /> : <IconCopy />}
        <Box
          component="span"
          sx={{
            display: "none",
            "@media (hover: hover)": {
              display: "block",
            },
          }}
        >
          Copy message
        </Box>
        {/* <span className="sr-only">Copy message</span> */}
      </Button>
    </Box>
  );
}
