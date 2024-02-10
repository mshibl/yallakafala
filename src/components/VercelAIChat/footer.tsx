import { Box } from "@mui/material";
import React from "react";
import { ExternalLink } from "./external-link";

// import { cn } from '@/lib/utils'
// import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <Box
      component="p"
      sx={{
        px: 2,
        textAlign: "center",
        fontSize: "0.75rem",
        lineHeight: "1.5",
        color: "text.muted",
      }}
      // className={cn(
      //   'px-2 text-center text-xs leading-normal text-muted-foreground',
      //   className
      // )}
      // {...props}
    >
      Open source AI chatbot built with{" "}
      <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{" "}
      <ExternalLink href="https://vercel.com/storage/kv">
        Vercel KV
      </ExternalLink>
      .
    </Box>
  );
}
