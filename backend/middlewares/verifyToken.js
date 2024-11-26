const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // console.log("authHeader :>> ", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization token is required" });
  }

  const token = authHeader.split(" ")[1];

  // if (!token) {
  //   return res.status(401).json({ message: "Token is missing or malformed" });
  // }

  try {
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {
      if (err) {
        res.status(401).json({
          message: "Invalid Token",
        });
      } else if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json("You are not authenticated");
      }
    });
  } catch (error) {
    console.log("Token verification error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401).json({
        message: "You are not authorized to perform this action",
      });
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  console.log("verifyTokenAndAdmin :>> ");
  verifyToken(req, res, () => {
    console.log("verifyTokenAndAdmin 2 :>> ", req?.user?.isAdmin);
    if (req?.user?.isAdmin) {
      next();
    } else {
      res.status(401).json({
        message: "You are not authorized to perform this action",
      });
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
