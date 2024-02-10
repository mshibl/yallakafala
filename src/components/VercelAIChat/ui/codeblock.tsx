// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Markdown/CodeBlock.tsx

"use client";

import { useCopyToClipboard } from "@/src/lib/hooks/use-copy-to-clipboard";
import { Box, Button } from "@mui/material";
import { FC, memo } from "react";
import { IconCheck, IconCopy, IconDownload } from "./icons";

// import { FC, memo } from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
// import { IconCheck, IconCopy, IconDownload } from '@/components/ui/icons'
// import { Button } from '@/components/ui/button'

interface Props {
  language: string;
  value: string;
}

interface languageMap {
  [key: string]: string | undefined;
}

export const programmingLanguages: languageMap = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
  // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
};

export const generateRandomString = (length: number, lowercase = false) => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789"; // excluding similar looking characters like Z, 2, I, 1, O, 0
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return lowercase ? result.toLowerCase() : result;
};

const CodeBlock: FC<Props> = memo(({ language, value }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const downloadAsFile = () => {
    if (typeof window === "undefined") {
      return;
    }
    const fileExtension = programmingLanguages[language] || ".file";
    const suggestedFileName = `file-${generateRandomString(
      3,
      true
    )}${fileExtension}`;
    const fileName = window.prompt("Enter file name" || "", suggestedFileName);

    if (!fileName) {
      // User pressed cancel on prompt.
      return;
    }

    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(value);
  };

  return (
    <Box
      // className="relative w-full font-sans codeblock bg-zinc-950"
      sx={{
        position: "relative",
        width: "100%",
        fontFamily: "var(--font-mono)",
        bg: "zinc-950",
      }}
    >
      <Box
        // className="flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          px: 6,
          py: 2,
          pr: 4,
          bg: "zinc-800",
          color: "zinc-100",
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: "0.75rem",
            textTransform: "lowercase",
          }}
          // className="text-xs lowercase"
        >
          {language}
        </Box>
        <Box
          // className="flex items-center space-x-1"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <Button
            // variant="ghost"
            // className="hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
            onClick={downloadAsFile}
            // size="icon"
            sx={{
              "&:hover": {
                bg: "zinc-800",
              },
              "&:focus": {
                ring: "1",
                ringColor: "slate-700",
                ringOffset: "0",
              },
            }}
          >
            <IconDownload />
            <Box
              component="span"
              sx={{
                display: "none",
                "@media (hover: hover)": {
                  display: "block",
                },
              }}
            >
              Download
            </Box>
            {/* <span className="sr-only">Download</span> */}
          </Button>
          <Button
            // variant="ghost"
            // size="icon"
            // className="text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0"
            onClick={onCopy}
            sx={{
              "&:hover": {
                bg: "zinc-800",
              },
              "&:focus": {
                ring: "1",
                ringColor: "slate-700",
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
              Copy code
            </Box>
            {/* <span className="sr-only">Copy code</span> */}
          </Button>
        </Box>
      </Box>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        PreTag="div"
        showLineNumbers
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1.5rem 1rem",
        }}
        lineNumberStyle={{
          userSelect: "none",
        }}
        codeTagProps={{
          style: {
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)",
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </Box>
  );
});
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
