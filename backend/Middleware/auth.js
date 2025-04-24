import jwt from "jsonwebtoken";

//method to verify the token
const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (token) {
    //splitting the token from bearer
    token = token.split(" ")[1];
    jwt.verify(token, process.env.SECRER_KEY, (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: "Invalid token" });
      } else {
        console.log(decoded);
        req.user = decoded;
      }
    });
    next();
  } else {
    return res.status(400).json({ message: "Token not found" });
  }
};

export default verifyToken;
