const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const config = require("config");
const mongoose = require("mongoose");
const { Customer } = require("../models/Customer");
const axios = require("axios");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID:
        "234630472514-b6k7f26sh7f3f4l791o82djrhqgqbp7f.apps.googleusercontent.com",
      clientSecret: "p52TP9_jkxcwyE0MRySDs8vV"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // const getnumber = await axios.get(
        //   "https://www.googleapis.com/admin/directory/v1/users/userKey"
        // );

        // console.log(getnumber);

        const saveduser = new Customer({
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          userName: profile.displayName,
          email: profile._json.email
        });

        const gotton = await saveduser.save();
        console.log(gotton);
     
      } catch (error) {}
    }
  )
);

