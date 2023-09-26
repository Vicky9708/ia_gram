//Libraries
import { Routes, Route, Navigate } from "react-router-dom";
//Views
import { Upload } from "../views/Upload";
import { Feed } from "../views/Feed";
import { routes } from "./routes.routes";
export const RoutesPrivate = () => {
  return (
      <Routes>
        <Route path={routes.UPLOAD} element={<Upload/>} />
        <Route path={routes.FEED} element={<Feed/>} />
        <Route path="*" element={<Navigate to={routes.FEED} />} />
      </Routes>
  )
}