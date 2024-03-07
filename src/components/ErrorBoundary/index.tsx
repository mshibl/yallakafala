"use client";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import React, { Component } from "react";

class ErrorBoundary extends Component<
  { children: React.ReactNode; fallback?: React.ReactNode; locale: string },
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Uncaught error:", error, errorInfo);

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <Box
            height="500px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <h2>
              {this.props.locale === "ar" ? "عذرا, حدث خطأ" : "An error has occurred"}
            </h2>
            <Link href="/">
              <Button variant="outlined">
                {this.props.locale === "ar"
                  ? "العودة الى الصفحة الرئيسية"
                  : "Return to home page"}
              </Button>
            </Link>
          </Box>
        )
      );
    }

    // Render the child component
    return this.props.children;
  }
}

export default ErrorBoundary;
