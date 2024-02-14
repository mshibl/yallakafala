import * as React from "react";
import { type UseChatHelpers } from "ai/react";
import { Box, Button } from "@mui/material";
import { ButtonScrollToBottom } from "./button-scroll-to-bottom";
import { IconRefresh, IconShare, IconStop } from "./ui/icons";
import { ChatShareDialog } from "./chat-share-dialog";
import { PromptForm } from "./prompt-form";
import { FooterText } from "./footer";
import { Refresh, Stop } from "@mui/icons-material";

// import { shareChat } from '@/app/actions'
// import { Button } from '@/components/ui/button'
// import { PromptForm } from '@/components/prompt-form'
// import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
// import { IconRefresh, IconShare, IconStop } from '@/components/ui/icons'
// import { FooterText } from '@/components/footer'
// import { ChatShareDialog } from '@/components/chat-share-dialog'

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "setInput"
  > {
  id?: string;
  title?: string;
}

export function ChatPanel({
  id,
  title,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: ChatPanelProps) {
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false);

  return (
    <Box
      // className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% animate-in duration-300 ease-in-out dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]"
      // sx={{}}
      sx={{
        position: "fixed",
        // width: "sm",
        // maxWidth: "md",
        width: "600px",
        insetX: 0,
        bottom: 0,
        // width: "full",
        bg: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)",
        // animation: "animate-in 300ms ease-in-out",
        // "@media (min-width: 1024px)": {
        //   paddingLeft: "250px",
        // },
        // "@media (min-width: 1280px)": {
        //   paddingLeft: "300px",
        // },
      }}
    >
      {/* <ButtonScrollToBottom /> */}
      <Box
        // className="mx-auto sm:max-w-2xl sm:px-4"
        sx={{
          mx: "auto",
          maxWidth: "2xl",
          px: 4,
        }}
      >
        <Box
          // className="flex items-center justify-center h-12"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // height: "3rem",
          }}
        >
          {isLoading ? (
            <Button
              // variant="outline"
              onClick={() => stop()}
              // className="bg-background"
            >
              <Stop />
              {/* <IconStop
              // className="mr-2"
              /> */}
              Stop generating
            </Button>
          ) : (
            messages?.length >= 2 && (
              <Box
                // className="flex space-x-2"
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button
                  // variant="outline"
                  onClick={() => reload()}
                >
                  {/* <IconRefresh
                  // className="mr-2"
                  /> */}
                  <Refresh />
                  Regenerate response
                </Button>
                {id && title ? (
                  <>
                    <Button
                      // variant="outline"
                      onClick={() => setShareDialogOpen(true)}
                    >
                      <IconShare
                      // className="mr-2"
                      />
                      Share
                    </Button>
                    {/* <ChatShareDialog
                      open={shareDialogOpen}
                      onOpenChange={setShareDialogOpen}
                      onCopy={() => setShareDialogOpen(false)}
                      shareChat={shareChat}
                      chat={{
                        id,
                        title,
                        messages,
                      }}
                    /> */}
                  </>
                ) : null}
              </Box>
            )
          )}
        </Box>
        <Box
          // className="px-4 py-2 space-y-4 border-t shadow-lg bg-background sm:rounded-t-xl sm:border md:py-4"
          sx={{
            // position: "fixed",
            // bottom: 0,
            // width: "full",
            px: 4,
            py: 2,
            borderTop: "1px solid",
            // boxShadow: "0 2px 4px 0",
            // bg: "background",
            backgroundColor: "white",
            // "@media (min-width: 640px)": {
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            border: "1px solid",
            // py: 4,
            // },
          }}
        >
          <PromptForm
            onSubmit={async (value) => {
              await append({
                id,
                content: value,
                role: "user",
              });
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
          {/* <FooterText className="hidden sm:block" /> */}
        </Box>
      </Box>
    </Box>
  );
}
