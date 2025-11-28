import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { email, forgetPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;

    forgetPassword(emailValue)
      .then(() => {
        toast.success("Check Your Email To Reset Password.");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-[50vh]">
      <title>SkillSwap | Forget Password</title>
      <div className="card-body ard bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-2xl">
        <form onSubmit={handleReset}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={email ? email : ""}
              placeholder="Enter Your Email"
              className="input w-full"
            />
            <button className="btn btn-primary ml-auto">Reset Password</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
