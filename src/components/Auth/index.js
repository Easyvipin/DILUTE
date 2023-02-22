import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

const Auth = ({ type, onSignUp, onLogIn, ...propsToFwd }) => {
  const [formType, setFormType] = useState(type ? type : "LogIn");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be atleast of 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      if (formType !== "LogIn") {
        onSignUp({ email: values.email, password: values.password });
      } else {
        onLogIn({ email: values.email, password: values.password });
      }
    },
  });

  const renderLoginFooter = () => {
    return (
      <div className="mt-4 flex flex-col justify-center items-center">
        <Link href="/forgot-password">Forgot Password ?</Link>
        <div>
          Not a User{" "}
          <button onClick={() => setFormType("signUp")}>Sign Up</button>
        </div>
      </div>
    );
  };
  const renderSignUpFooter = () => {
    return (
      <div className="mt-4 flex flex-col justify-center items-center">
        <span>
          Already a User{" "}
          <button onClick={() => setFormType("LogIn")}>Log In Here</button>
        </span>
      </div>
    );
  };

  return (
    <div className="border-4 p-4">
      <form onSubmit={formik.handleSubmit}>
        <label className="text-2xl block" htmlFor="email">
          Email
        </label>
        <input
          className="border p-3 text-xl mt-2 mb-4 w-full"
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-orange-600 font-light mt-0 mb-2">
            {formik.errors.email}
          </div>
        ) : null}
        <label className="text-2xl block" htmlFor="email">
          Password
        </label>
        <input
          className="border p-3 text-xl mt-2 mb-4 w-full"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-orange-600 font-light mt-0 mb-2">
            {formik.errors.password}
          </div>
        ) : null}
        <button type="submit" className="btn border-2">
          {formType === "signUp" ? "Sign Up" : "Log in"}
        </button>
      </form>
      {formType === "signUp" ? renderSignUpFooter() : renderLoginFooter()}
    </div>
  );
};

export default Auth;
