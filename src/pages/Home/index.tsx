import * as React from "react";
// import { Box, Button, Typography, Container, useTheme } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
// import useTheme from "@mui/material/useTheme"

const HomePage: React.FC = () => {
  //   const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      style={{
        // width: "100%",
        // height: "100%",
        position: "relative",
        background: "white",
      }}
    >
      <div
        style={{
        //   width: 1728,
          height: 638,
          left: 0,
          top: 113,
          position: "absolute",
          background: "#87226C",
        }}
      />
      <img
        style={{
        //   width: 1151,
          height: 580,
          left: -137,
          top: 171,
          position: "absolute",
        }}
        src="https://via.placeholder.com/1151x580"
      />
      <div
        style={{
          width: 1728,
          height: 506,
          left: 0,
          top: 972,
          position: "absolute",
          background: "#2194BC",
        }}
      />
      <div
        style={{
          width: 1728,
          height: 506,
          left: 0,
          top: 2016,
          position: "absolute",
          background: "#E4F8FF",
        }}
      />
      <div
        style={{
          width: 1728,
          height: 97,
          left: 0,
          top: 0,
          position: "absolute",
          background: "white",
          borderBottom: "1px #D1D1D1 solid",
        }}
      />
      <div
        style={{
          left: 99,
          top: 28,
          position: "absolute",
          color: "black",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: "500",
          lineHeight: 19.78,
          wordWrap: "break-word",
        }}
      >
        Yalla Kafala
        <br />
        اكفل طفل في بيتك
        <br />
      </div>
      <img
        style={{
          width: 51,
          height: 39,
          left: 40,
          top: 28,
          position: "absolute",
        }}
        src="https://via.placeholder.com/51x39"
      />
      <div
        style={{
          width: 98,
          height: 36,
          left: 1503,
          top: 30,
          position: "absolute",
          background: "#87226C",
          borderRadius: 24,
        }}
      />
      <div
        style={{
          left: 1527,
          top: 38,
          position: "absolute",
          color: "white",
          fontSize: 14,
          fontFamily: "Almarai",
          fontWeight: "700",
          lineHeight: 19.78,
          wordWrap: "break-word",
        }}
      >
        اتبرع الان
      </div>
      <div style={{ left: 927, top: 43, position: "absolute" }}>
        <div
          style={{
            width: 87,
            height: 23,
            left: 0,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Almarai",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          مركز المعرفة
          <br />
          <br />
        </div>
        <div
          style={{
            left: 301,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Almarai",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          ما هى الكفالة
        </div>
        <div
          style={{
            left: 448,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Almarai",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          عن المؤسسه
        </div>
        <div
          style={{
            left: 147,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Almarai",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          قصص الكفالة
        </div>
      </div>
      <div style={{ left: 1632, top: 39, position: "absolute" }}>
        <div
          style={{
            width: 16,
            height: 16,
            left: 0,
            top: 1,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div style={{ width: 16, height: 16, background: "#1E3050" }}></div>
        </div>
        <div
          style={{
            left: 21,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Almarai",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          EN
        </div>
      </div>
      <div
        style={{
          width: 1728,
          height: 549,
          left: 0,
          top: 5722,
          position: "absolute",
          background: "#7C2C69",
        }}
      />
      <img
        style={{
          width: 87,
          height: 87,
          left: 299,
          top: 6114,
          position: "absolute",
        }}
        src="https://via.placeholder.com/87x87"
      />
      <div
        style={{
          width: 181,
          left: 102,
          top: 6114,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 12,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 18,
          wordWrap: "break-word",
        }}
      >
        {" "}
        يلا كفالة هو أحد المشاركين في برنامج GuideStar ذو المستوى الفضي، مما يدل
        على التزامه بالشفافية.
      </div>
      <div
        style={{
          left: 1100,
          top: 6183,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 18,
          wordWrap: "break-word",
        }}
      >
        © جميع الحقوق محفوظة ٢٠٢٣ ، تأسست يلا كفالة في عام ٢٠٢١ برقم إشهار (
        ٩٩٠){" "}
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 139,
          top: 6014,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 247,
            height: 22,
            left: 0,
            top: 0,
            position: "absolute",
            textAlign: "right",
            color: "white",
            fontSize: 18,
            fontFamily: "Almarai",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          تابعنا علي
        </div>
        <div
          style={{
            width: 16,
            height: 16,
            left: 0,
            top: 5,
            position: "absolute",
          }}
        />
        <div
          style={{
            width: 14,
            height: 16,
            left: 26,
            top: 5,
            position: "absolute",
          }}
        />
        <div
          style={{
            width: 18,
            height: 16,
            left: 50,
            top: 5,
            position: "absolute",
          }}
        />
        <div
          style={{
            width: 16,
            height: 16,
            left: 78,
            top: 6,
            position: "absolute",
          }}
        />
      </div>
      <div
        style={{
          width: 16,
          height: 15.94,
          left: 370.46,
          top: 6045,
          position: "absolute",
          background: "white",
        }}
      ></div>
      <div
        style={{
          width: 14.01,
          height: 14,
          left: 346.45,
          top: 6047,
          position: "absolute",
          background: "white",
        }}
      ></div>
      <div
        style={{
          width: 17.07,
          height: 12,
          left: 319.38,
          top: 6049,
          position: "absolute",
          background: "white",
        }}
      ></div>
      <div
        style={{
          width: 14.38,
          height: 13,
          left: 295,
          top: 6049,
          position: "absolute",
          background: "white",
        }}
      ></div>
      <div
        style={{
          width: 250,
          height: 24,
          left: 713,
          top: 5923,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        العنوان{" "}
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 5780,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 18,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        روابط سريعة
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 716,
          top: 5791,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 18,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        تواصل معنا
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 691,
          top: 5837,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        ارسل لنا عبر البريد الإلكتروني
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 691,
          top: 5865,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        info@yallakafala.org
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 139,
          top: 5791,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 18,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        اشترك بنشرتنا الإخبارية
        <br />
      </div>
      <div
        style={{
          width: 247,
          height: 23,
          left: 716,
          top: 5981,
          position: "absolute",
          textAlign: "right",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Almarai",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          العنوان على{" "}
        </span>
        <span
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Almarai",
            fontWeight: "400",
            textDecoration: "underline",
            wordWrap: "break-word",
          }}
        >
          خرائط جوجل
          <br />
        </span>
      </div>
      <div
        style={{
          width: 275,
          height: 22,
          left: 688,
          top: 5954,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        شارع اللاسلكي، المعادي الجديدة. القاهرة
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 5816,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        ما هى الكفالة؟
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 5848,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        خطوات الكفالة
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 5880,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        عن الجمعية
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 5912,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        اسئلة شائعة
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 5944,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        شركاء يلا كفالة
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 5976,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        تبرع نقدي{" "}
      </div>
      <div
        style={{
          width: 247,
          height: 22,
          left: 1368,
          top: 6008,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        حملاتنا
      </div>
      <div
        style={{
          width: 71,
          height: 22,
          left: 1544,
          top: 6040,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        كتيبنا
      </div>
      <div
        style={{
          width: 71,
          height: 22,
          left: 1544,
          top: 6072,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 16,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        تطوع معنا
      </div>
      <div
        style={{
          width: 234.76,
          height: 40,
          left: 151,
          top: 5824,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 234.76,
            height: 40,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
            borderRadius: 4,
            border: "1px #AFB6C0 solid",
          }}
        />
        <div
          style={{
            width: 214,
            height: 25.56,
            left: 10,
            top: 6.67,
            position: "absolute",
            textAlign: "right",
            color: "#74808D",
            fontSize: 14,
            fontFamily: "Almarai",
            fontWeight: "400",
            lineHeight: 19.78,
            wordWrap: "break-word",
          }}
        >
          الاسم
        </div>
      </div>
      <div
        style={{
          width: 234.76,
          height: 40,
          left: 151,
          top: 5874,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 234.76,
            height: 40,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
            borderRadius: 4,
            border: "1px #AFB6C0 solid",
          }}
        />
        <div
          style={{
            width: 214,
            height: 25.56,
            left: 10,
            top: 6.67,
            position: "absolute",
            textAlign: "right",
            color: "#74808D",
            fontSize: 14,
            fontFamily: "Almarai",
            fontWeight: "400",
            lineHeight: 19.78,
            wordWrap: "break-word",
          }}
        >
          البريد الإلكتروني
        </div>
      </div>
      <div
        style={{
          width: 98,
          height: 36,
          left: 288,
          top: 5925,
          position: "absolute",
          background: "#2194BC",
          borderRadius: 4,
        }}
      />
      <div
        style={{
          left: 317,
          top: 5933,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 14,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 19.78,
          wordWrap: "break-word",
        }}
      >
        اشتراك
      </div>
      <div
        style={{
          width: 16,
          height: 16,
          left: 947,
          top: 5840,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 16,
            height: 12,
            left: 0,
            top: 2,
            position: "absolute",
            background: "white",
          }}
        ></div>
      </div>
      <div
        style={{
          left: 803,
          top: 798,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        رسالتنا
      </div>
      <div
        style={{
          left: 794,
          top: 1625,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        شركاؤنا
      </div>
      <div
        style={{
          left: 704,
          top: 4121,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        شهادات نفتخر بها
      </div>
      <div
        style={{
          left: 749,
          top: 4645,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        اسئلة شائعة
      </div>
      <div
        style={{
          height: 536,
          left: 414,
          top: 4681,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 50,
          display: "inline-flex",
        }}
      >
        <div style={{ height: 4 }} />
        <div style={{ height: 482, position: "relative" }}>
          <div
            style={{
              width: 900,
              height: 362,
              left: 0,
              top: 120,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 900,
                height: 362,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#E9F7FF",
                borderRadius: 10,
              }}
            />
            <div
              style={{
                width: 46,
                height: 46,
                left: 37,
                top: 29,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  left: 46,
                  top: 0,
                  position: "absolute",
                  transform: "rotate(90deg)",
                  transformOrigin: "0 0",
                  background: "#2194BC",
                  borderRadius: 9999,
                }}
              />
              <div
                style={{
                  width: 7,
                  height: 14,
                  left: 30,
                  top: 23,
                  position: "absolute",
                  transform: "rotate(90deg)",
                  transformOrigin: "0 0",
                  border: "1.50px white solid",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              width: 900,
              height: 100,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 900,
                height: 100,
                left: 0,
                top: 0,
                position: "absolute",
                background: "white",
                borderRadius: 10,
                border: "1.50px #DCDCDC solid",
              }}
            />
            <div
              style={{
                width: 836.5,
                height: 46,
                left: 33,
                top: 27,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  left: 46,
                  top: 46,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    left: -46,
                    top: -0,
                    position: "absolute",
                    transform: "rotate(-90deg)",
                    transformOrigin: "0 0",
                    background: "#444444",
                    borderRadius: 9999,
                  }}
                />
                <div
                  style={{
                    width: 7,
                    height: 14,
                    left: -19.5,
                    top: -17.5,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    border: "1.50px white solid",
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: 690,
                  height: 20,
                  left: 146.5,
                  top: 15,
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    left: 0,
                    top: 0,
                    position: "absolute",
                    textAlign: "right",
                    color: "black",
                    fontSize: 18,
                    fontFamily: "Nunito",
                    fontWeight: "700",
                    lineHeight: 19.89,
                    wordWrap: "break-word",
                  }}
                >
                  هل يمكنني كفالة طفلة وأنا لدي ابنة بيولوجية ٧ سنوات، ولا أرغب
                  في إنجاب أطفال آخرين؟
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 900,
          height: 100,
          left: 414,
          top: 5237,
          position: "absolute",
          background: "white",
          borderRadius: 10,
          border: "1.50px #DCDCDC solid",
        }}
      />
      <div
        style={{
          width: 900,
          height: 100,
          left: 414,
          top: 5357,
          position: "absolute",
          background: "white",
          borderRadius: 10,
          border: "1.50px #DCDCDC solid",
        }}
      />
      <div
        style={{
          width: 900,
          height: 100,
          left: 414,
          top: 5477,
          position: "absolute",
          background: "white",
          borderRadius: 10,
          border: "1.50px #DCDCDC solid",
        }}
      />
      <div
        style={{
          width: 46,
          height: 46,
          left: 493,
          top: 5310,
          position: "absolute",
          transform: "rotate(-180deg)",
          transformOrigin: "0 0",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            left: -46,
            top: -0,
            position: "absolute",
            transform: "rotate(-90deg)",
            transformOrigin: "0 0",
            background: "#444444",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 7,
            height: 14,
            left: -19.5,
            top: -17.5,
            position: "absolute",
            transform: "rotate(-180deg)",
            transformOrigin: "0 0",
            border: "1.50px white solid",
          }}
        ></div>
      </div>
      <div
        style={{
          width: 46,
          height: 46,
          left: 493,
          top: 5430,
          position: "absolute",
          transform: "rotate(-180deg)",
          transformOrigin: "0 0",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            left: -46,
            top: -0,
            position: "absolute",
            transform: "rotate(-90deg)",
            transformOrigin: "0 0",
            background: "#444444",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 7,
            height: 14,
            left: -19.5,
            top: -17.5,
            position: "absolute",
            transform: "rotate(-180deg)",
            transformOrigin: "0 0",
            border: "1.50px white solid",
          }}
        ></div>
      </div>
      <div
        style={{
          width: 46,
          height: 46,
          left: 493,
          top: 5550,
          position: "absolute",
          transform: "rotate(-180deg)",
          transformOrigin: "0 0",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            left: -46,
            top: -0,
            position: "absolute",
            transform: "rotate(-90deg)",
            transformOrigin: "0 0",
            background: "#444444",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 7,
            height: 14,
            left: -19.5,
            top: -17.5,
            position: "absolute",
            transform: "rotate(-180deg)",
            transformOrigin: "0 0",
            border: "1.50px white solid",
          }}
        ></div>
      </div>
      <div
        style={{
          left: 1029.5,
          top: 5279,
          position: "absolute",
          textAlign: "right",
          color: "black",
          fontSize: 18,
          fontFamily: "Nunito",
          fontWeight: "700",
          lineHeight: 19.89,
          wordWrap: "break-word",
        }}
      >
        كم تستغرق مدة إجراءات الكفالة؟
      </div>
      <div
        style={{
          left: 932.5,
          top: 5399,
          position: "absolute",
          textAlign: "right",
          color: "black",
          fontSize: 18,
          fontFamily: "Nunito",
          fontWeight: "700",
          lineHeight: 19.89,
          wordWrap: "break-word",
        }}
      >
        هل هناك فرص للتطوع أو العمل في يلا كفالة؟
      </div>
      <div
        style={{
          left: 946.5,
          top: 5519,
          position: "absolute",
          textAlign: "right",
          color: "black",
          fontSize: 18,
          fontFamily: "Nunito",
          fontWeight: "700",
          lineHeight: 19.89,
          wordWrap: "break-word",
        }}
      >
        هل هناك أوقات معينة لزيارة فروع يلا كفالة؟
      </div>
      <div
        style={{
          left: 822,
          top: 5610,
          position: "absolute",
          textAlign: "right",
          color: "#87226C",
          fontSize: 18,
          fontFamily: "Nunito",
          fontWeight: "700",
          textDecoration: "underline",
          lineHeight: 19.89,
          wordWrap: "break-word",
        }}
      >
        اقرأ المزيد
      </div>
      <div
        style={{
          width: 161,
          left: 783,
          top: 2634,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        آخر الأخبار
      </div>
      <div
        style={{
          left: 737,
          top: 3386,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        قصص الكفالة
      </div>
      <div
        style={{
          left: 1196,
          top: 1074,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        مؤسسة يلا كفالة
      </div>
      <div
        style={{
          left: 371,
          top: 876,
          position: "absolute",
          color: "black",
          fontSize: 29,
          fontFamily: "Almarai",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        تطوير جودة الرعاية المقدمة للأيتام عبر الدعوة والتعليم وتطوير الموارد
        للأسر المتنامية.
        <br />
      </div>
      <div
        style={{
          width: 646,
          left: 857,
          top: 1142,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 29,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 44,
          wordWrap: "break-word",
        }}
      >
        يلا كفالة منظمة خيرية غير هادفة للربح تأسست عام ٢٠٢٠ بهدف خلق حياة أفضل
        للأيتام في مصر من خلال رفع مستوى الوعي حول الكفالة، وتيسير إجراءات
        الكفالة، وتوجيه الأسر الكفالة وإعدادها من خلال تزويدهم بالأدوات اللازمة
        لتربية أطفال أصحاء نفسيًا وسلوكيًا.
        <br />
      </div>
      <img
        style={{
          width: 453,
          height: 304,
          left: 185,
          top: 1052,
          position: "absolute",
          borderRadius: 14,
        }}
        src="https://via.placeholder.com/453x304"
      />
      <div
        style={{
          width: 104,
          height: 92,
          left: 359,
          top: 1143,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 98.62,
            height: 69,
            left: 3,
            top: 12,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 56,
              height: 49,
              left: 23.31,
              top: 10.5,
              position: "absolute",
              background: "white",
            }}
          />
          <div
            style={{
              width: 98.62,
              height: 69,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#EB3323",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: 160,
          height: 58.78,
          left: 1418,
          top: 527,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 160,
            height: 58.78,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
            borderRadius: 39.18,
          }}
        />
        <div
          style={{
            left: 39.18,
            top: 13.06,
            position: "absolute",
            color: "black",
            fontSize: 22.86,
            fontFamily: "Almarai",
            fontWeight: "700",
            lineHeight: 32.29,
            wordWrap: "break-word",
          }}
        >
          تبرع الان
        </div>
      </div>
      <div
        style={{
          width: 504,
          left: 1074,
          top: 314,
          position: "absolute",
          textAlign: "right",
          color: "white",
          fontSize: 50,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 100,
          wordWrap: "break-word",
        }}
      >
        الأيتام يحتاجون إليك الآن لبناء مستقبل أفضل
      </div>
      <div
        style={{
          width: 966,
          height: 112,
          left: 441,
          top: 1748,
          position: "absolute",
        }}
      >
        <img
          style={{
            width: 248,
            height: 50,
            left: 718,
            top: 31,
            position: "absolute",
          }}
          src="https://via.placeholder.com/248x50"
        />
        <img
          style={{
            width: 232,
            height: 92,
            left: 307,
            top: 0,
            position: "absolute",
          }}
          src="https://via.placeholder.com/232x92"
        />
        <img
          style={{
            width: 95,
            height: 112,
            left: 0,
            top: 0,
            position: "absolute",
          }}
          src="https://via.placeholder.com/95x112"
        />
      </div>
      <div
        style={{
          left: 803,
          top: 2121,
          position: "absolute",
          color: "black",
          fontSize: 40,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        إنجازاتنا
      </div>
      <div
        style={{
          width: 233,
          left: 336,
          top: 2309,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 34,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 56,
          wordWrap: "break-word",
        }}
      >
        جيوب وسفن شدّت فعل
      </div>
      <div
        style={{
          width: 233,
          left: 336,
          top: 2241,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 34,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        ٪٩٠
      </div>
      <div
        style={{
          width: 233,
          left: 748,
          top: 2309,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 34,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 56,
          wordWrap: "break-word",
        }}
      >
        جيوب وسفن شدّت فعل
      </div>
      <div
        style={{
          width: 233,
          left: 748,
          top: 2241,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 34,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        ٪٣٠
      </div>
      <div
        style={{
          width: 233,
          left: 1160,
          top: 2309,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 34,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 56,
          wordWrap: "break-word",
        }}
      >
        جيوب وسفن شدّت فعل
      </div>
      <div
        style={{
          width: 233,
          left: 1160,
          top: 2241,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 34,
          fontFamily: "Almarai",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        ٪٥٠
      </div>
      <div
        style={{
          width: 1728,
          height: 81,
          left: 0,
          top: 94,
          position: "absolute",
          background: "#2194BC",
        }}
      />
      <div
        style={{
          left: 891,
          top: 120,
          position: "absolute",
          textAlign: "right",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Almarai",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          آخر الأخبار:{" "}
        </span>
        <span
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Almarai",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          ورشة مجانية عن التعامل مع العند والغضب عند الأطفال الخميس ١٨ يناير من
          ٥ ل ٩ م
        </span>
        <span
          style={{
            color: "white",
            fontSize: 18,
            fontFamily: "Almarai",
            fontWeight: "700",
            textDecoration: "underline",
            wordWrap: "break-word",
          }}
        >
          {" "}
          سجل الان
        </span>
      </div>
      <div
        style={{
          width: 435.48,
          paddingLeft: 28.07,
          paddingRight: 28.07,
          paddingTop: 32.62,
          paddingBottom: 32.62,
          left: 155,
          top: 3506,
          position: "absolute",
          background: "white",
          borderRadius: 22.76,
          border: "1.14px #DCDCDC solid",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 7.59,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 379.34,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 22.76,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 379.34, height: 303.47, position: "relative" }}>
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <img
              style={{
                width: 464.5,
                height: 352.74,
                left: -42.51,
                top: -24.93,
                position: "absolute",
              }}
              src="https://via.placeholder.com/464x353"
            />
            <img
              style={{
                width: 393,
                height: 393,
                left: -10.07,
                top: -8.62,
                position: "absolute",
              }}
              src="https://via.placeholder.com/393x393"
            />
          </div>
          <div
            style={{
              height: 92.83,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16.69,
              display: "flex",
            }}
          >
            <div style={{ width: 379.34 }} />
            <div
              style={{
                width: 364.81,
                textAlign: "right",
                color: "#292930",
                fontSize: 18.97,
                fontFamily: "Almarai",
                fontWeight: "700",
                lineHeight: 20.96,
                wordWrap: "break-word",
              }}
            >
              {" "}
              قصة مروة و يحيي
              <br />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 435.48,
          paddingLeft: 28.07,
          paddingRight: 28.07,
          paddingTop: 32.62,
          paddingBottom: 32.62,
          left: 646,
          top: 3506,
          position: "absolute",
          background: "white",
          borderRadius: 22.76,
          border: "1.14px #DCDCDC solid",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 7.59,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 379.34,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 22.76,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 379.34, height: 303.47, position: "relative" }}>
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <img
              style={{
                width: 464.5,
                height: 352.74,
                left: -42.51,
                top: -24.93,
                position: "absolute",
              }}
              src="https://via.placeholder.com/464x353"
            />
            <img
              style={{
                width: 393,
                height: 393,
                left: -10.07,
                top: -8.62,
                position: "absolute",
              }}
              src="https://via.placeholder.com/393x393"
            />
            <img
              style={{
                width: 668,
                height: 407,
                left: -122.07,
                top: -12.62,
                position: "absolute",
              }}
              src="https://via.placeholder.com/668x407"
            />
          </div>
          <div
            style={{
              height: 71.83,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16.69,
              display: "flex",
            }}
          >
            <div style={{ width: 379.34 }} />
            <div
              style={{
                width: 364.81,
                textAlign: "right",
                color: "#292930",
                fontSize: 18.97,
                fontFamily: "Almarai",
                fontWeight: "700",
                lineHeight: 20.96,
                wordWrap: "break-word",
              }}
            >
              مقابلة مع رشا فهمي أم كافلة (حكاية حلا)
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 435.48,
          paddingLeft: 28.07,
          paddingRight: 28.07,
          paddingTop: 32.62,
          paddingBottom: 32.62,
          left: 1137,
          top: 3506,
          position: "absolute",
          background: "white",
          borderRadius: 22.76,
          border: "1.14px #DCDCDC solid",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 7.59,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: 379.34,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 22.76,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 379.34, height: 303.47, position: "relative" }}>
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <img
              style={{
                width: 464.5,
                height: 352.74,
                left: -42.51,
                top: -24.93,
                position: "absolute",
              }}
              src="https://via.placeholder.com/464x353"
            />
            <img
              style={{
                width: 393,
                height: 393,
                left: -10.07,
                top: -8.62,
                position: "absolute",
              }}
              src="https://via.placeholder.com/393x393"
            />
            <div
              style={{
                width: 816,
                height: 328.67,
                left: -218.07,
                top: -12.96,
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: 816,
                  height: 328.67,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#D9D9D9",
                }}
              />
              <img
                style={{
                  width: 824.92,
                  height: 427.44,
                  left: 0,
                  top: -24.11,
                  position: "absolute",
                }}
                src="https://via.placeholder.com/825x427"
              />
            </div>
          </div>
          <div
            style={{
              height: 71.83,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16.69,
              display: "flex",
            }}
          >
            <div style={{ width: 379.34 }} />
            <div
              style={{
                width: 364.81,
                textAlign: "right",
                color: "#292930",
                fontSize: 18.97,
                fontFamily: "Almarai",
                fontWeight: "700",
                lineHeight: 20.96,
                wordWrap: "break-word",
              }}
            >
              مقابلة مع أميرة أم كافلة
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 435,
          height: 452,
          paddingTop: 32.62,
          paddingLeft: 27.83,
          paddingRight: 27.83,
          left: 155,
          top: 2748,
          position: "absolute",
          background: "white",
          borderRadius: 22.76,
          border: "1.14px #DCDCDC solid",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 447.89,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 22.76,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 379.34, height: 303.47, position: "relative" }}>
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <img
              style={{
                width: 1647.17,
                height: 1252.47,
                left: -546.64,
                top: -428.68,
                position: "absolute",
                transform: "rotate(-9.19deg)",
                transformOrigin: "0 0",
              }}
              src="https://via.placeholder.com/1647x1252"
            />
          </div>
          <div
            style={{
              width: 364.81,
              textAlign: "right",
              color: "#292930",
              fontSize: 18.97,
              fontFamily: "Almarai",
              fontWeight: "400",
              lineHeight: 20.96,
              wordWrap: "break-word",
            }}
          >
            ٢٢ ديسمبر ٢٠٢٣
          </div>
          <div
            style={{
              width: 364.81,
              textAlign: "right",
              color: "#292930",
              fontSize: 18.97,
              fontFamily: "Nunito",
              fontWeight: "600",
              lineHeight: 20.96,
              wordWrap: "break-word",
            }}
          >
            إمضاء مذكرة تفاهم مع هيئة انقاذ الطفل{" "}
          </div>
          <div
            style={{
              height: 34.14,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16.69,
              display: "flex",
            }}
          >
            <div style={{ width: 379.34 }} />
          </div>
        </div>
      </div>
      <div
        style={{
          width: 435,
          height: 452,
          paddingTop: 32.62,
          paddingLeft: 27.83,
          paddingRight: 27.83,
          left: 646,
          top: 2748,
          position: "absolute",
          background: "white",
          borderRadius: 22.76,
          border: "1.14px #DCDCDC solid",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 447.89,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 22.76,
            display: "inline-flex",
          }}
        >
          <div style={{ width: 379.34, height: 303.47, position: "relative" }}>
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <div
              style={{
                width: 379.34,
                height: 303.47,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#B6B6B6",
                borderRadius: 22.76,
              }}
            />
            <img
              style={{
                width: 776.71,
                height: 590.59,
                left: -64.16,
                top: 22.37,
                position: "absolute",
                transform: "rotate(-9.19deg)",
                transformOrigin: "0 0",
              }}
              src="https://via.placeholder.com/777x591"
            />
          </div>
          <div
            style={{
              width: 364.81,
              textAlign: "right",
              color: "#292930",
              fontSize: 18.97,
              fontFamily: "Almarai",
              fontWeight: "400",
              lineHeight: 20.96,
              wordWrap: "break-word",
            }}
          >
            ٢٣ ديسمبر ٢٠٢٣
          </div>
          <div
            style={{
              width: 364.81,
              textAlign: "right",
              color: "#292930",
              fontSize: 18.97,
              fontFamily: "Nunito",
              fontWeight: "600",
              lineHeight: 20.96,
              wordWrap: "break-word",
            }}
          >
            تقديم التدريب الالزامي ل٢٥١ اسرة
          </div>
          <div
            style={{
              height: 34.14,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16.69,
              display: "flex",
            }}
          >
            <div style={{ width: 379.34 }} />
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: 15.17,
          paddingRight: 15.17,
          paddingTop: 6.07,
          paddingBottom: 6.07,
          left: 478,
          top: 3864.86,
          position: "absolute",
          borderRadius: 44.76,
          border: "0.76px #292930 solid",
          justifyContent: "center",
          alignItems: "center",
          gap: 7.59,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "#292930",
            fontSize: 13.66,
            fontFamily: "Nunito",
            fontWeight: "500",
            textTransform: "capitalize",
            lineHeight: 21.85,
            wordWrap: "break-word",
          }}
        >
          ام كافلة
        </div>
      </div>
      <div
        style={{
          width: 435,
          height: 452,
          left: 1137,
          top: 2748,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 435,
            height: 452,
            paddingLeft: 28.07,
            paddingRight: 28.07,
            paddingTop: 32.62,
            paddingBottom: 32.62,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
            borderRadius: 22.76,
            border: "1.14px #DCDCDC solid",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 7.59,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 379.34,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 22.76,
              display: "inline-flex",
            }}
          >
            <div
              style={{ width: 379.34, height: 303.47, position: "relative" }}
            >
              <div
                style={{
                  width: 379.34,
                  height: 303.47,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#B6B6B6",
                  borderRadius: 22.76,
                }}
              />
              <div
                style={{
                  width: 379.34,
                  height: 303.47,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#B6B6B6",
                  borderRadius: 22.76,
                }}
              />
              <img
                style={{
                  width: 776.71,
                  height: 590.59,
                  left: -64.16,
                  top: -66.63,
                  position: "absolute",
                  transform: "rotate(-9.19deg)",
                  transformOrigin: "0 0",
                }}
                src="https://via.placeholder.com/777x591"
              />
            </div>
            <div
              style={{
                width: 364.81,
                textAlign: "right",
                color: "#292930",
                fontSize: 18.97,
                fontFamily: "Almarai",
                fontWeight: "400",
                lineHeight: 20.96,
                wordWrap: "break-word",
              }}
            >
              ٣٠ ديسمبر ٢٠٢٣
            </div>
            <div
              style={{
                height: 34.14,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16.69,
                display: "flex",
              }}
            >
              <div style={{ width: 379.34 }} />
            </div>
          </div>
        </div>
        <div
          style={{
            width: 364.81,
            left: 28,
            top: 400,
            position: "absolute",
            textAlign: "right",
            color: "#292930",
            fontSize: 18.97,
            fontFamily: "Nunito",
            fontWeight: "600",
            lineHeight: 20.96,
            wordWrap: "break-word",
          }}
        >
          المشاركة في ١٩ لجنة محلية
        </div>
      </div>
      <div
        style={{
          paddingLeft: 15.17,
          paddingRight: 15.17,
          paddingTop: 6.07,
          paddingBottom: 6.07,
          left: 969,
          top: 3865,
          position: "absolute",
          borderRadius: 44.76,
          border: "0.76px #292930 solid",
          justifyContent: "center",
          alignItems: "center",
          gap: 7.59,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "#292930",
            fontSize: 13.66,
            fontFamily: "Nunito",
            fontWeight: "500",
            textTransform: "capitalize",
            lineHeight: 21.85,
            wordWrap: "break-word",
          }}
        >
          ام كافلة
        </div>
      </div>
      <div
        style={{
          paddingLeft: 15.17,
          paddingRight: 15.17,
          paddingTop: 6.07,
          paddingBottom: 6.07,
          left: 1460,
          top: 3865,
          position: "absolute",
          borderRadius: 44.76,
          border: "0.76px #292930 solid",
          justifyContent: "center",
          alignItems: "center",
          gap: 7.59,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "#292930",
            fontSize: 13.66,
            fontFamily: "Nunito",
            fontWeight: "500",
            textTransform: "capitalize",
            lineHeight: 21.85,
            wordWrap: "break-word",
          }}
        >
          ام كافلة
        </div>
      </div>
      <div
        style={{
          width: 765,
          height: 184,
          left: 518,
          top: 4935,
          position: "absolute",
          textAlign: "right",
          color: "black",
          fontSize: 18,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 32,
          wordWrap: "break-word",
        }}
      >
        التبني هو النقل الرسمي والدائم لحقوق الوالدين إلى أسرة بخلاف أسرة
        الطفل، وقيام تلك العائلة رسميًا بجميع واجبات الأبوة للطفل. في بعض
        الدول الإسلامية. بما في ذلك مصر، يستخدم مصطلح "الكفالة" في الشريعة
        الإسلامية لوصف علاقة مشابهة للتبني، بدون حقوق الميراث، أو تغيير الاسم
        الكامل للطفل. على الرغم من حث الإسلام وتشجيعه على الكفالة، إلا أن
        هناك تصورًا ثقافيًا مضللًا حول المعنى الحقيقي للكفالة وأهميتها وكيفية
        ممارستها. ونتيجة لذلك، يبقى أطفالنا الأبرياء تحت رعاية مؤسسية لدور
        الأيتام بدلاً من منحهم حياة أسرية دافئة ومنزلًا. أنشأنا هذه الصفحة
        لاستعادة المعنى الحقيقي للكفالة في الإسلام الذي علمه إيانا نبينا
        الحبيب.عَنْ سَهْلِ بْنِ سَعْدٍ رضي الله عنه قَالَ: قَالَ رَسُولَ
        اَللَّهِ صلى الله عليه وسلم: أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ
        هكَذَا، وَأَشَارَ بِالسَّبَّابَةِ وَالْوُسطَى وَفَرَّجَ بَيْنَهُمَا
        شَيْئاً"
      </div>
      <div
        style={{
          width: 46,
          height: 46,
          left: 169,
          top: 4336,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            left: 46,
            top: 0,
            position: "absolute",
            transform: "rotate(90deg)",
            transformOrigin: "0 0",
            background: "white",
            borderRadius: 9999,
            border: "2px #A5ADB6 solid",
          }}
        />
        <div
          style={{
            width: 7,
            height: 14,
            left: 19.5,
            top: 17.5,
            position: "absolute",
            background: "white",
            border: "2.50px #A5ADB6 solid",
          }}
        ></div>
      </div>
      <div
        style={{
          width: 46,
          height: 46,
          left: 1513,
          top: 4336,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            left: 46,
            top: 0,
            position: "absolute",
            transform: "rotate(90deg)",
            transformOrigin: "0 0",
            background: "white",
            borderRadius: 9999,
            border: "2px #A5ADB6 solid",
          }}
        />
        <div
          style={{
            width: 7,
            height: 14,
            left: 19.5,
            top: 17.5,
            position: "absolute",
            background: "white",
            border: "2.50px #A5ADB6 solid",
          }}
        ></div>
      </div>
      <div
        style={{
          width: 1078,
          height: 259,
          left: 325,
          top: 4230,
          position: "absolute",
          background: "white",
          borderRadius: 20,
          border: "1px #74808D solid",
        }}
      />
      <div
        style={{
          width: 650,
          left: 416,
          top: 4280,
          position: "absolute",
          textAlign: "right",
          color: "black",
          fontSize: 18,
          fontFamily: "Almarai",
          fontWeight: "400",
          lineHeight: 32,
          wordWrap: "break-word",
        }}
      >
        إذ عدم أراض حاملات. دار مرجع ومضى السبب ثم, العسكري اللازمة ثم جُل, لم
        خيار معقل أفريقيا دول. ذات انذار وهولندا، و, بـ بحث أراضي المسرح
        الرئيسية. ضرب لفشل أساسي محاولات عن, وقد الشمل اعتداء سليمان، بل. عرض
        أوروبا واعتلاء أم, و بتحدّي اقتصادية لان. تونس استعملت دار و, تعد
        اليميني وتتحمّل والنفيس قد, أسر ليركز النفط يتبقّ ٣٠. مع فصل زهاء
        ممثّلة, عل عدم مسرح جديدة, عن فرنسية الخاطفة ضرب.
      </div>
      <img
        style={{
          width: 232,
          height: 92,
          left: 1115,
          top: 4309,
          position: "absolute",
        }}
        src="https://via.placeholder.com/232x92"
      />
    </Container>
  );
};

export default HomePage;
