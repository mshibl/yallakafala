import { type Message } from "ai";
import { ChatMessage } from "./chat-message";
// import { Separator } from "./ui/separator";
import { Box, Divider } from "@mui/material";

// import { Separator } from '@/components/ui/separator'
// import { ChatMessage } from '@/components/chat-message'

export interface ChatList {
  messages: Message[];
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <Box
      // className="relative mx-auto max-w-2xl px-4"
      sx={{
        mx: "auto",
        maxWidth: "2xl",
        px: 4,
      }}
    >
      {messages.map((message, index) => (
        <Box key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <Divider />
            // <Separator className="my-4 md:my-8" />
          )}
        </Box>
      ))}
    </Box>
  );
}
