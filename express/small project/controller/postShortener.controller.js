import crypto from "crypto";


import { loadLinks, saveLinks } from "../models/shortener.model.js";

export const postShortener = async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res
        .status(400)
        .send("Short code already exists. Please choose another.");
    }
    links[finalShortCode] = url;

    await saveLinks(links);
    return res.redirect("/");
  } catch (error) {}
};

export const getShortenerPage = async (req, res) => {
  try {
    const links = await loadLinks();


    return res.render("index", {links, host:res.host});
  } catch (error) {
    console.log(error);
    return res.status(500).send("server errorss");
  }
};

export const redirectShortLinks = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    if (!links[shortCode]) return res.status(404).send("404 error occured ");
    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

export const reportPage = async (req, res) => {
  const students = [
    { name: "Aryan", grade: "A", favoriteSubject: "Math" },
    { name: "Ravi", grade: "B", favoriteSubject: "Science" },
    { name: "Priya", grade: "A+", favoriteSubject: "English" },
  ];
  return res.render("report", { students });
};
