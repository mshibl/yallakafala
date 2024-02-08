"use client";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface Props {
  placeholder: string;
  submitText: string;
}

const MailchimpForm: React.FC<Props> = ({ placeholder, submitText }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    // event.preventDefault();
    // Perform additional logic or submit the form data to your server
  };

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://yallakafala.us8.list-manage.com/subscribe/post?u=24bb16c53dccaf6efb1b67784&amp;id=35198fff85&amp;f_id=00e20ce0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          onSubmit={handleSubmit}
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <TextField
                sx={{
                  mb: 3.5,
                  width: "230px",
                  bgcolor: "#FFFFFF",
                  borderRadius: "4px",
                  borderColor: "#AFB6C0",
                  name: "b_24bb16c53dccaf6efb1b67784_35198fff85",
                  placeholder: {
                    color: "#74808D",
                  },
                }}
                size="small"
                id="outlined-basic"
                placeholder={placeholder}
                variant="outlined"
                type="email"
                name="EMAIL"
                className="required email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {/* <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div> */}
            <div aria-hidden="true" style={{ display: "none" }}>
              <input
                type="text"
                name="b_24bb16c53dccaf6efb1b67784_35198fff85"
                defaultValue=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <Button
                  onClick={handleSubmit}
                  color="secondary"
                  disableElevation
                  variant="contained"
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                >
                  {submitText}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script> */}
      {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
        (function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0]='EMAIL';
          ftypes[0]='email';
          fnames[1]='FNAME';
          ftypes[1]='text';
          fnames[2]='LNAME';
          ftypes[2]='text';
          fnames[3]='ADDRESS';
          ftypes[3]='address';
          fnames[4]='PHONE';
          ftypes[4]='phone';
          fnames[5]='BIRTHDAY';
          ftypes[5]='birthday';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `,
        }}
      ></script> */}
    </div>
  );
};

export default MailchimpForm;
