import { UseChatHelpers } from "ai/react";
import { ExternalLink } from "./external-link";
import { Box, Button } from "@mui/material";
import { IconArrowRight } from "./ui/icons";

// import { Button } from '@/components/ui/button'
// import { ExternalLink } from '@/components/external-link'
// import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: "Explain technical concepts",
    message: `What is a "serverless function"?`,
  },
  {
    heading: "Summarize an article",
    message: "Summarize the following article for a 2nd grader: \n",
  },
  {
    heading: "Draft an email",
    message: `Draft an email to my boss about the following: \n`,
  },
];

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, "setInput">) {
  return (
    <Box
      // className="mx-auto max-w-2xl px-4"
      sx={{
        mx: "auto",
        maxWidth: "2xl",
        px: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "400px",
          // borderRadius: "lg",
          borderRadius: "8px",
          border: "1px solid",
          bg: "background",
          p: 8,
        }}
        // className="rounded-lg border bg-background p-8"
      >
        <h3
        // className="mb-2 text-lg font-semibold"
        >
          Welcome to Next.js AI Chatbot!
        </h3>
        <p
        // className="mb-2 leading-normal text-muted-foreground"
        >
          This is an open source AI chatbot app template built with{" "}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> and{" "}
          <ExternalLink href="https://vercel.com/storage/kv">
            Vercel KV
          </ExternalLink>
          .
        </p>
        <p
        // className="leading-normal text-muted-foreground"
        >
          You can start a conversation here or try the following examples:
        </p>
        {/* <Box
          // className="mt-4 flex flex-col items-start space-y-2"
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              // variant="link"
              // className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
              sx={{
                height: "auto",
                padding: 0,
                fontSize: "base",
              }}
            >
              <IconArrowRight
              // className="mr-2 text-muted-foreground"
              />
              {message.heading}
            </Button>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}
