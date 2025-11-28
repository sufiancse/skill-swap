import React from "react";
import { Link } from "react-router";
import "animate.css";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-indigo-100 to-purple-100 text-center px-4">
      <title>404 Error</title>
      <h1 className="text-8xl font-extrabold text-indigo-600 animate__animated animate__bounceIn">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-600 animate__animated animate__fadeInUp">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow transition animate__animated animate__fadeInUp animate__delay-1s"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
