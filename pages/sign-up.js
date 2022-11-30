import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const validatePassword = (values) => {
  let error = "";
  const passwordRegex = /(?=.*[0-9])/;
  const latinLetters = /[a-zA-Z]/;

  if (!values) {
    error = "*Password is required";
  } else if (values.length < 8) {
    error = "*Password must be 8 characters long.";
  } else if (!passwordRegex.test(values)) {
    error = "*Invalid password. Must contain atleast one number.";
  } else if (!latinLetters.test(values)) {
    error = "*Password must contain only latin letters";
  }
  return error;
};

const validateConfirmPassword = (pass, value) => {
  let error = "";
  if (pass && value) {
    if (pass !== value) {
      error = "*Password not matched";
    }
  }
  return error;
};

const validateUsername = (values) => {
  let error = "";
  if (!values) {
    error = "*Username is required";
  } else if (values.length < 6) {
    error = "*Username must be 8 characters long.";
  } else if (values.length > 25) {
    error = "*Username must be up to 25 characters long.";
  }

  return error;
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});
const SignUp = () => {
  const router = useRouter();

  const signUp = async (data) => {
    const api = "http://localhost:8080/user/create";

    await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: data.username,
        Email: data.email,
        Password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert("Email is already in used");
        } else {
          localStorage.setItem("token", data.AccessToken);
          router.push("/login");
        }
      });
  };

  return (
    <div className="w-screen h-screen mx-auto flex items-center">
      <div className="w-1/2 h-screen flex justify-center items-center flex-col">
        <h1 className="text-5xl mb-12 text-orange font-bold">
          Welcome to Cocktailer !
        </h1>
        <Formik
          initialValues={{
            username: "",
            password: "",
            email: "",
            terms: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            signUp(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4 w-3/4 ">
              <label name="username">Username</label>
              <Field
                name="username"
                placeholder="e.g. Username"
                validate={validateUsername}
                className="p-4 w-full bg-white rounded-md"
              />
              {errors.username && touched.username ? (
                <div className="text-lightred">{errors.username}</div>
              ) : null}

              <label name="email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="e.g. example@gmail.com"
                className="p-4 rounded-md w-full bg-white"
              />
              {errors.email && touched.email ? (
                <div className="text-lightred">{errors.email}</div>
              ) : null}

              <label name="password">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="8-12 characters"
                validate={validatePassword}
                className="p-4 w-full bg-white rounded-md"
              />
              {errors.password && touched.password ? (
                <div className="text-lightred">{errors.password}</div>
              ) : null}

              {/* <label name="confirmPassword">Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              //   validate={(value) => validateConfirmPassword(values, value)}
              className="p-4 w-4/12 bg-white rounded-md"
            />
            {errors.password && touched.password ? (
              <div className="text-lightred">{errors.password}</div>
            ) : null} */}

              <span className="text-orange underline cursor-pointer">
                Forgot Password ?
              </span>
              <Link
                href="/login"
                className="text-orange underline cursor-pointer text-center"
              >
                Already have an account ?
              </Link>
              <label>
                <Field type="checkbox" name="terms" />I accept the terms and
                conditions.
              </label>

              <button
                type="submit"
                className="p-4 w-full bg-orange text-white text-xl rounded-md"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-1/2 h-screen bg-orange flex flex-col justify-center items-center">
        <Image
          src="/bar.avif"
          width={700}
          height={700}
          alt="Image"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default SignUp;
