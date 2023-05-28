import React, { useState } from "react";
import "./App.css";
import {
  Cake,
  Close,
  DoneOutlined,
  EditOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { IconButton, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const PinkSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#ffffff",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#f8c400",
  },
}));

const App = () => {
  const [hideDetails, setHideDetails] = useState(true);
  const [addDon, setAddDon] = useState(false);
  const [balance, setBalance] = useState("use");
  const [timeframe, setTimeFrame] = useState(1);
  const [tier, setTier] = useState(4);
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
        }}
        className="roi_cal_card"
      >
        <div className="d-flex align-items-center justify-content-between">
          <p className="title">ROI Calculator</p>
          <IconButton className="">
            <Close />
          </IconButton>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <p className="outline grey_80">
            <span>
              <Cake fontSize="small" htmlColor="#7e3900" />
            </span>
            Cake
          </p>
          <div className="d-flex align-items-center ml-12">
            {" "}
            <PinkSwitch /> <p className="outline grey_80">USD</p>
          </div>
        </div>
        <div className="cake_input">
          <input type="number" className="title2" />
          <p className="title2">CAKE</p>
        </div>
        <div className="d-flex align-items-start justify-content-between  mt-16">
          <div className="d-flex align-items-center ">
            <div
              className={"balance_box " + (balance === "use" && "selected")}
              onClick={() => setBalance("use")}
            >
              <p className="body1">USE BALANCE</p>
            </div>
            <div
              className={"balance_box " + (balance === 1000 && "selected")}
              onClick={() => setBalance(1000)}
            >
              <p className="body1">$1000</p>
            </div>
            <div
              className={"balance_box " + (balance === 100 && "selected")}
              onClick={() => setBalance(100)}
            >
              <p className="body1">$100</p>
            </div>
          </div>
          <p className="overline grey_a8">~$20.82</p>
        </div>
        <div className="mt-24">
          <p className="body1">Timeframe</p>
          <div className="row flex-wrap mt-16">
            <div className="col">
              <div
                className={"dayBox " + (timeframe === 1 && "selected")}
                onClick={() => setTimeFrame(1)}
              >
                <p className="body2">1 Day</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (timeframe === 7 && "selected")}
                onClick={() => setTimeFrame(7)}
              >
                <p className="body2">7 Days</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (timeframe === 30 && "selected")}
                onClick={() => setTimeFrame(30)}
              >
                <p className="body2">30 Days</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (timeframe === 365 && "selected")}
                onClick={() => setTimeFrame(365)}
              >
                <p className="body2">1 Year</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (timeframe === 1825 && "selected")}
                onClick={() => setTimeFrame(1825)}
              >
                <p className="body2">5 Years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-start justify-content-between mt-24">
          <p className="body1">Enable Accelerated APY</p>
          <PinkSwitch />
        </div>
        <div className="mt-16">
          <p className="outline grey_a8">Select Tier</p>
          <div className="row flex-wrap mt-16">
            <div className="col">
              <div
                className={"dayBox " + (tier === 1 && "selected")}
                onClick={() => setTier(1)}
              >
                <p className="body2">Tier 1</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (tier === 2 && "selected")}
                onClick={() => setTier(2)}
              >
                <p className="body2">Tier 2</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (tier === 3 && "selected")}
                onClick={() => setTier(3)}
              >
                <p className="body2">Tier 3</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (tier === 4 && "selected")}
                onClick={() => setTier(4)}
              >
                <p className="body2">Tier 4</p>
              </div>
            </div>
            <div className="col">
              <div
                className={"dayBox " + (tier === 5 && "selected")}
                onClick={() => setTier(5)}
              >
                <p className="body2">Tier 5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end mt-16">
          <p className="outline grey_a8">ROI at Current Rates</p>
        </div>
        <div className="mt-16 don_input">
          <IconButton onClick={() => setAddDon(!addDon)}>
            {addDon ? <DoneOutlined /> : <EditOutlined />}
          </IconButton>
          <input type="number" className="title2" disabled={!addDon} />
          <p className="title2">USD</p>
        </div>
        <div className="text-end">
          <p className="overline grey_a8">~3Cake + 10 DON</p>
        </div>
        <div className="row  mt-16">
          <div className="col">
            <button className="primary_cta">Apply</button>
          </div>
          <div className="col">
            <button className="secondary_cta">Cancel</button>
          </div>
        </div>
        <div className="details mt-16 ">
          <div className="text-center">
            <p className="outline">
              {hideDetails ? "Show Details" : "Hide Details"}{" "}
              <span
                className="ml-12 pointer"
                onClick={() => setHideDetails(!hideDetails)}
              >
                {hideDetails ? (
                  <KeyboardArrowUpOutlined />
                ) : (
                  <KeyboardArrowDownOutlined />
                )}
              </span>
            </p>
          </div>
          {!hideDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.1, ease: "easeInOut" },
              }}
              className="mt-16"
            >
              <div className="d-flex align-items-start justify-content-between">
                <p className="body2">APY</p>
                <p className="title2 color_yellow">63.34%</p>
              </div>
              <ul className="mt-16">
                <li className="grey_a8">Calculated based on current rates</li>
                <li className="grey_a8">
                  All figures are estimates provided for your convenience onlym
                  any by no means represent guaranted returns.
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default App;
