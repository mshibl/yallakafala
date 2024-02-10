// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx

import { Box } from "@mui/material";
import { Message } from "ai";
import { IconOpenAI, IconUser } from "./ui/icons";
import { MemoizedReactMarkdown } from "./markdown";

// import { Message } from 'ai'
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { CodeBlock } from "./ui/codeblock";
import { ChatMessageActions } from "./chat-message-actions";

// import { cn } from '@/lib/utils'
// import { CodeBlock } from '@/components/ui/codeblock'
// import { MemoizedReactMarkdown } from '@/components/markdown'
// import { IconOpenAI, IconUser } from '@/components/ui/icons'
// import { ChatMessageActions } from '@/components/chat-message-actions'

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    // <div
    //   className={cn('group relative mb-4 flex items-start md:-ml-12')}
    //   {...props}
    // >
    <Box
      sx={{
        py: 6,
        display: "flex",
        alignItems: "center",
        mb: 4,
        ml: 0,
      }}
      {...props}
    >
      <Box
        // className={cn(
        //   "flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
        //   message.role === "user"
        //     ? "bg-background"
        //     : "bg-primary text-primary-foreground"
        // )}
        sx={{
          alignSelf: "flex-start",
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "2rem",
          height: "2rem",
          borderRadius: "0.375rem",
          border: "1px solid",
          boxShadow: "0 0 0 1px",
          bg: message.role === "user" ? "background" : "primary",
          color: message.role === "user" ? "text" : "text-foreground",
        }}
      >
        {message.role === "user" ? <IconUser /> : <IconOpenAI />}
      </Box>
      <Box
        // className="flex-1 px-1 ml-4 space-y-2 overflow-hidden"
        sx={{
          flex: "1 1 auto",
          px: 1,
          ml: 4,
          overflow: "hidden",
        }}
      >
        <MemoizedReactMarkdown
          // className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return (
                // return <p className="mb-2 last:mb-0">{children}</p>;
                <Box
                  // component="p"
                  sx={{
                    // backgroundColor: "yellow",
                    mb: 2,
                    "&:last-of-type": {
                      mb: 0,
                    },
                  }}
                >
                  {children}
                </Box>
              );
            },
            code({
              node,
              // inline,
              className,
              children,
              ...props
            }) {
              if (Array.isArray(children) && children.length) {
                if (children[0] == "▍") {
                  return (
                    <Box
                      component={"span"}
                      sx={{
                        mt: 1,
                        cursor: "default",
                        animation: "pulse 1.5s infinite",
                      }}
                    >
                      ▍
                    </Box>
                    // <span className="mt-1 cursor-default animate-pulse">▍</span>
                  );
                }

                children[0] = (children[0] as string).replace("`▍`", "▍");
              }

              const match = /language-(\w+)/.exec(className || "");

              // if (inline) {
              //   return (
              //     <code className={className} {...props}>
              //       {children}
              //     </code>
              //   );
              // }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ""}
                  value={String(children).replace(/\n$/, "")}
                  {...props}
                />
              );
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </Box>
      {/* </div> */}
    </Box>
  );
}
