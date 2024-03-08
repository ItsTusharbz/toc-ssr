import React from "react";
import { hydrateRoot } from "react-dom/client";
import BasicModal from "./BasicModal.jsx";

hydrateRoot(document.getElementById("root"), <BasicModal />);