import ErrorText from "@components/ErrorText";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import UseAnimations from "react-useanimations";
import infinity from "react-useanimations/lib/infinity";

const Auth = ({ type, onSignUp, onLogIn, ...propsToFwd }) => {
  const [formType, setFormType] = useState(type ? type : "LogIn");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    onSubmit: async (values) => {
      setIsLoading(true);
      if (formType !== "LogIn") {
        onSignUp({ email: values.email, password: values.password })
          .unwrap()
          .then((payload) => setIsLoading(false))
          .catch((error) => {
            setErrorMessage(error);
            setIsLoading(false);
          });
      } else {
        onLogIn({ email: values.email, password: values.password })
          .unwrap()
          .then((payload) => setIsLoading(false))
          .catch((error) => {
            setErrorMessage(error);
            setIsLoading(false);
          });
      }
    },
  });

  const ToggleFormType = (type) => {
    setFormType(type);
    formik.resetForm();
    setErrorMessage(null);
  };

  const RenderLoginFooter = () => {
    return (
      <div className="mt-4 flex flex-col justify-center items-center">
        <Link className="text-blue-600" href="/forgot-password">
          Forgot Password ?
        </Link>
        <div>
          Not a User{" "}
          <button
            className="italic underline"
            onClick={() => ToggleFormType("signUp")}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  };
  const RenderSignUpFooter = () => {
    return (
      <div className="mt-4 flex flex-col justify-center items-center">
        <span>
          Already a User{" "}
          <button
            className="italic underline"
            onClick={() => ToggleFormType("LogIn")}
          >
            Log In Here
          </button>
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
          value={formik.values.email}
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
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-orange-600 font-light mt-0 mb-2">
            {formik.errors.password}
          </div>
        ) : null}
        <button
          type="submit"
          className="btn border-2 flex  justify-center gap-2 w-40"
        >
          {isLoading && <UseAnimations animation={infinity} size={25} />}
          {formType === "signUp" ? "Sign Up" : "Log in"}
        </button>
      </form>
      <ErrorText message={errorMessage} />
      {formType === "signUp" ? <RenderSignUpFooter /> : <RenderLoginFooter />}
    </div>
  );
};

export default Auth;
