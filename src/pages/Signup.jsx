import React from "react";
import styles from "./signup.module.css";
import SignupFooter from "./SignupFooter";
import SignupHeader from "./SignupHeader";

const Signup = () => {
  return (
    <div className={styles.container}>
      <SignupHeader />
      <SignupFooter />
    </div>
  );
};

export default Signup;
