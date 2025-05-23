import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import MainLayout from "@/common/MainLayout/MainLayout";

export default function App() {
  return (
    <div className="moving-background">
      <BrowserRouter>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}
