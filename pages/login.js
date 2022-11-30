import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  const login = async (data) => {
    const api = "http://localhost:8080/user/login";

    await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: data.email,
        Password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert("Wrong password");
        } else {
          localStorage.setItem("token", data.AccessToken);
          router.push("/cart");
        }
      });
  };

  return (
    <div className="w-screen h-screen mx-auto flex items-center">
      <div className="w-1/2 h-screen flex justify-center items-center flex-col">
        <h1 className="text-5xl mb-12 text-orange font-bold">
          Stay Connected , Just Login
        </h1>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          onSubmit={(values) => {
            login(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4 w-3/4">
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
                className="p-4 w-full bg-white rounded-md"
              />
              {errors.password && touched.password ? (
                <div className="text-lightred">{errors.password}</div>
              ) : null}

              <button
                type="submit"
                className="p-4 w-full bg-orange text-white text-xl rounded-md"
              >
                Login
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

export default Login;
