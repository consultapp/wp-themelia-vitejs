import { useSelector } from "react-redux";
import { selectIsPageNotFound } from "../../store/entities/page/selectors";
import { selectIsPostNotFound } from "../../store/entities/post/selectors";
import { redirect, useLocation } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useMemo } from "react";

export default function MainArea({ children }) {
  console.log("mainArea");
  return (
    <main
      id="content"
      className="content grid-70 tablet-grid-66"
      role="main"
      tabIndex="-1"
    >
      {children}
    </main>
  );
}
