import { Router } from "express";
import {
  postShortener,
  getShortenerPage,
  redirectShortLinks,
  reportPage,
} from "../controller/postShortener.controller.js";

const router = Router();

router.get("/", getShortenerPage);

router.get("/report", reportPage);

router.post("/", postShortener);

router.get("/:shortCode", redirectShortLinks);

// export default router             this is default export but not recomended in larger project

// named exports   recomended for alger project
export const shortenedRoutes = router;
