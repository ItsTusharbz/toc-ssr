import React from "react";
import { hydrateRoot } from "react-dom/client";
import RecipeReviewCard from "./Card.jsx";

hydrateRoot(document.getElementById("root"), <RecipeReviewCard />);