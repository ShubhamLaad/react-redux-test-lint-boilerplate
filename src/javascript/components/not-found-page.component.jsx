import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <main className="pageNotFound">
    <div className="notFoundWrap">
      <div className="notFoundContent text-center">
        <span className="yellowBox ttFont">4</span>
        <span className="whiteBox ttFont">0</span>
        <span className="yellowBox ttFont">4</span>
        <h4 className="ttFont">This page just SCRATCHED!</h4>
        <p>
          The page you are looking for might have been removed, had its URL changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="btn"
        >Go Back!
        </Link>
      </div>
    </div>
  </main>
);

export default NotFoundPage;
