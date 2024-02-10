import { useEnterSubmit } from "@/src/lib/hooks/use-enter-submit";
import { Box, Button, Input, TextField, Tooltip } from "@mui/material";
import { UseChatHelpers } from "ai/react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { IconArrowElbow, IconPlus } from "./ui/icons";
// import { Textarea } from "./ui/textarea";
// import Textarea from 'react-textarea-autosize'
// import { UseChatHelpers } from 'ai/react'
// import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
// import { cn } from '@/lib/utils'
// import { Button, buttonVariants } from '@/components/ui/button'
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger
// } from '@/components/ui/tooltip'
// import { IconArrowElbow, IconPlus } from '@/components/ui/icons'
// import { useRouter } from 'next/navigation'

export interface PromptProps
  extends Pick<UseChatHelpers, "input" | "setInput"> {
  onSubmit: (value: string) => void;
  isLoading: boolean;
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading,
}: PromptProps) {
  // const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = () => {
    if (!input?.trim()) {
      return;
    }
    setInput("");
    onSubmit(input);
  };

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      // formRef.current?.requestSubmit();
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    // <form
    //   onSubmit={async (e) => {
    //     e.preventDefault();
    //     if (!input?.trim()) {
    //       return;
    //     }
    //     setInput("");
    //     await onSubmit(input);
    //   }}
    //   ref={formRef}
    // >
    <Box
      // className="relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border sm:px-12"
      sx={{
        position: "relative",
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        width: "100%",
        px: 8,
        overflow: "hidden",
        // maxHeight: "60",
        bg: "background",
        // borderRadius: "md",
        // borderRadius: "4px",
        borderRadius: "8px",
        // border: "1px solid",
        sm: {
          px: 12,
        },
      }}
    >
      {/* <Tooltip title="New Chat"> */}
      {/* <TooltipTrigger asChild> */}
      {/* <Button
          onClick={(e) => {
            e.preventDefault();
            router.refresh();
            router.push("/");
          }}
          sx={{
            position: "absolute",
            left: 0,
            top: 4,
            size: 8,
            borderRadius: "full",
            bg: "background",
            p: 0,
            sm: {
              left: 4,
            },
          }}
          // className={cn(
          //   buttonVariants({ size: "sm", variant: "outline" }),
          //   "absolute left-0 top-4 size-8 rounded-full bg-background p-0 sm:left-4"
          // )}
        >
          <IconPlus />
          <span className="sr-only">New Chat</span>
        </Button> */}
      {/* </TooltipTrigger> */}
      {/* <TooltipContent>New Chat</TooltipContent> */}
      {/* </Tooltip> */}
      <TextField
        // ref={inputRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        // rows={1}
        maxRows={5}
        multiline={true}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message."
        spellCheck={false}
        // className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
        sx={{
          borderBottom: "none",
          minHeight: "60px",
          width: "100%",
          resize: "none",
          bg: "transparent",
          px: 4,
          py: "1.3rem",
          "&:focus": {
            outline: "none",
          },
          // "@media (min-width: 640px)": {
          //   fontSize: "0.875rem",
          // },
        }}
      />
      <Box
      // className="absolute right-0 top-4 sm:right-4"
      >
        <Tooltip title="Send message">
          {/* <TooltipTrigger asChild> */}
          <Button
            // type="submit"
            // size="icon"
            variant="contained"
            disabled={isLoading || input === ""}
            onClick={handleSubmit}
            // onClick={async () => {
            //   if (!input?.trim()) {
            //     return;
            //   }
            //   setInput("");
            //   await onSubmit(input);
            // }}
          >
            {/* <IconArrowElbow /> */}
            {/* <span className="sr-only"> */}
            Submit
            {/* </span> */}
          </Button>
          {/* </TooltipTrigger> */}
          {/* <TooltipContent>Send message</TooltipContent> */}
        </Tooltip>
      </Box>
    </Box>
    // </form>
  );
}
