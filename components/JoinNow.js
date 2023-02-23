import BottomPage from "./BottomHalf";
import { Card, Container, Avatar } from "@nextui-org/react";
import { useContext } from "react";
import classes from "./JoinNow.module.css";
import DataContext from "../store/data-store.js";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import React, { useState } from "react";

function JoinNow(props) {
  function Dropdown() {
    document.getElementsByClassName("formDropdownSection").style.visibility =
      "visible";
  }
  const dataCtx = useContext(DataContext);
  let noOfItems = dataCtx.getNoItems();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Card bordered shadow={false} hoverable css={{ mw: "100%" }}>
        <div className={classes.mainHeader}>
          <header className={classes.iconDiv}>
            <Link href="http://localhost:3001/">
              <Avatar
                squared
                src="/avatars/logo.svg"
                alt="Starbuck"
                css={{ size: "$50" }}
              />
            </Link>
          </header>
        </div>
      </Card>
      <div className={classes.joinnowTitle}>
        <div className={classes.joinnowTitleInner}>
          <div className={classes.joinnowHeader}>
            <h1 className={classes.joinnowHeader}> Create an account</h1>
            <h2 className={classes.joinnowHeader}>Starbucks® Rewards</h2>
            <p className={classes.joinnowHeader}>
              Join Starbucks Rewards to earn Stars for free food and drinks, any
              way you pay. Get access to mobile ordering, a birthday Reward, and
              <span className={classes.joinnowHeader}> more</span>
              <a href="/Rewards" className={classes.joinnowHeader}>
                more
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <Container>
        <div className={classes.mainDiv}>
          <div className={classes.joinnowForm}>
            <div className={classes.joinnowFormOutline}>
              <div className={classes.joinnowFormBorder}>
                <form method="post" className={classes.joinnowFormInner}>
                  <p className={classes.joinnowLine}>
                    *indicates required field
                  </p>
                  <h2 className={classes.joinnowFormInner}>
                    Personal Information
                  </h2>
                  <fieldset className={classes.joinnowFormSectionOne}>
                    <div className={classes.formTextFieldOutline}>
                      <Box
                        sx={{
                          width: 435,
                          maxWidth: "100%",
                        }}
                      >
                        <TextField
                          id="standard-basic"
                          fullWidth
                          label="* First name"
                          normal
                          color="success"
                        />
                      </Box>
                    </div>
                    <div className={classes.formTextFieldOutline}>
                      <Box
                        sx={{
                          width: 435,
                          maxWidth: "100%",
                        }}
                      >
                        <TextField
                          id="standard-basic"
                          fullWidth
                          label="* Last name"
                          normal
                          color="success"
                        />
                      </Box>
                    </div>
                  </fieldset>
                  <h2 className={classes.joinnowFormInner}>Account Security</h2>
                  <fieldset className={classes.joinnowFormSectionOne}>
                    <div className={classes.formTextFieldOutline}>
                      <Box
                        sx={{
                          width: 435,
                          maxWidth: "100%",
                        }}
                      >
                        <TextField
                          id="standard-basic"
                          fullWidth
                          label="* Email Address"
                          normal
                          color="success"
                        />
                      </Box>
                    </div>
                    <div className={classes.formInputHintOne}>
                      <div className={classes.formInputHintInner}>
                        <p className={classes.formInputHintInner}>
                          This will be your username
                        </p>
                      </div>
                    </div>
                    <div className={classes.formTextFieldOutline}>
                      <FormControl
                        sx={{
                          width: 435,
                          maxWidth: "100%",
                        }}
                        variant="outlined"
                        color="success"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          * Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="*Password"
                        />
                      </FormControl>
                    </div>
                    <div className={classes.formInputHintTwo}>
                      <div className={classes.formInputHintInner}>
                        <p className={classes.formInputHintInner}>
                          Create a password 8 to 25 characters long that
                          includes at least 1 uppercase and 1 lowercase letter,
                          1 number and 1 special character like an exclamation
                          point or asterisk.
                        </p>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className={classes.joinnowFormSectionTwo}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                          width: 435,
                          maxWidth: "100%",
                        }}
                      >
                        <Typography
                          color="#006241"
                          fontSize="16px"
                          font-family="SoDoSans, Helvetica Neue, Helvetica, Arial, sans-serif"
                          fontWeight="700"
                          variant="h5"
                        >
                          Already have a Starbucks gift card?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="p"
                          fontSize="16px"
                          fontWeight="400"
                          className={classes.formDropdownInnerSection}
                        >
                          Add your gift card to earn Stars when you pay and
                          order ahead.
                          <Box
                            sx={{
                              width: 300,
                              maxWidth: "100%",
                            }}
                            className={classes.formtextfieldSectionSpacing}
                          >
                            <TextField
                              id="standard-basic"
                              fullWidth
                              label="Card number (16 digits)"
                              normal
                              color="success"
                            />
                          </Box>
                          <div className={classes.formInputHintThree}>
                            <div className={classes.formInputHintInner}>
                              <p className={classes.formInputHintInner}>
                                No spaces or dashes
                              </p>
                            </div>
                          </div>
                          <Box
                            sx={{
                              width: 300,
                              maxWidth: "100%",
                            }}
                            className={classes.formtextfieldSectionSpacing}
                          >
                            <TextField
                              id="standard-basic"
                              fullWidth
                              label="Security code"
                              normal
                              color="success"
                            />
                          </Box>
                          <div className={classes.formInputHintThree}>
                            <div className={classes.formInputHintInner}>
                              <p className={classes.formInputHintInner}>
                                Scratch to reveal 8-digit code
                              </p>
                            </div>
                          </div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </fieldset>
                  <fieldset className={classes.joinnowFormSectionThree}>
                    <h2 className={classes.joinnowHeaderTwo}>
                      Collect more Stars & Earn Rewards
                    </h2>
                    <span className={classes.joinnowLineTwo}>
                      Email is a great way to know about offers and what’s new
                      from Starbucks.
                    </span>
                    <label className={classes.joinnowCheckboxContainer}>
                      <input className={classes.joinnowCheckboxMargins} />
                      <div className={classes.joinnowCheckbox}>
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            textAlign: "left",
                            flexShrink: "0",
                            marginBottom: "60px",
                          }}
                          color="success"
                        />
                        <span className={classes.joinnowCheckboxFlexOne}>
                          <span className={classes.joinnowcheckboxFlexItemOne}>
                            Yes, I’d like email from Starbucks
                          </span>
                          <span
                            sx={{ textAlign: "left" }}
                            className={classes.joinnowcheckboxFlexItemTwo}
                          >
                            Know about initiatives, announcements and product
                            offers.
                          </span>
                        </span>
                      </div>
                    </label>
                    <div>
                      <h2 className={classes.joinnowHeaderThree}>
                        Terms of Use
                      </h2>
                      <div className={classes.joinnowCheckboxFlexTwo}>
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            textAlign: "left",
                            marginBottom: "60px",
                          }}
                          color="success"
                        />
                        <span className={classes.joinnowCheckboxLineTwo}>
                          I agree to the
                          <a className={classes.joinnowCheckboxLineTwo}>
                            Starbucks® Rewards Terms
                            <svg className={classes.joinnowCheckboxLineTwo}>
                              <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                            </svg>
                          </a>
                          and the
                          <a className={classes.joinnowCheckboxLineTwo}>
                            Starbucks® Card Terms
                            <svg className={classes.joinnowCheckboxLineTwo}>
                              <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                            </svg>
                          </a>
                          and have read the
                          <a className={classes.joinnowCheckboxLineTwo}>
                            Starbucks® Privacy Statement
                            <svg className={classes.joinnowCheckboxLineTwo}>
                              <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                            </svg>
                          </a>
                          .
                        </span>
                      </div>
                    </div>
                    <div className={classes.joinnowButtonSpacing}>
                      <div className={classes.joinnowOutline}>
                        <div className={classes.joinnowFlex}>
                          <div className={classes.joinnowButtonBorder}>
                            <button className={classes.joinnowButton}>
                              Create account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <BottomPage />
    </>
  );
}

export default JoinNow;

/*

    <span className={classes.joinnowCheckboxFlex}>
      <span className={classes.joinnowcheckboxFlexItemOne}>
        <span className={classes.joinnowFlexItemTick}>
          <SvgIcon className={classes.signinFlexItemIcon}>
            <path d="M4.29 12.104c-.277-.308-.75-.332-1.06-.054-.306.278-.33.752-.053 1.06l4.485 4.963c.29.322.795.33 1.096.017L20.414 6.003c.288-.298.28-.773-.02-1.06-.297-.288-.772-.28-1.06.02L8.237 16.47 4.29 12.105z"></path>
          </SvgIcon>
        </span>
      </span>
      <span className={classes.joinnowcheckboxFlexItemTwo}>
        Yes, I’d like email from Starbucks
        <span className={classes.joinnowCheckboxLine}>
          Know about initiatives, announcements and product
          offers.
        </span>
      </span>
    </span>


        <label className={classes.joinnowcheckboxFlexItemTwo}>
          Yes, I’d like email from Starbucks
          <Box
            sx={{ textAlign: "centre" }}
            className={classes.joinnowCheckboxLine}>
            Know about initiatives, announcements and product
            offers.
          </Box>
        </label>
*/
