const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const bcryptSalt = parseInt(process.env.BCRYPT_SALT);
const jwtKey = process.env.JWT_PRIVATE_KEY;

const register = async (req, res) => {
  const { userName, email, password } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const existingUser = await User.findOne({ userName });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, bcryptSalt);
    console.log(hashedPassword);

    const user = User({
      userName,
      email,
      password: hashedPassword,
      image: image ? `http://localhost:4500/images/profile/${image}` : null,
    });

    await user.save();

    res.status(201).json({
      user,
      message: "user registerd successfully",
      success: true,
      error: false,
    });
    // res.status(201).json({
    //   message: "User saved successfully",
    // });
  } catch (error) {
    console.log("Error Registaring User >>>>>>>", error);
    res.status(500).json({ message: "Internal Server Error" });
    // res.status(400).json({
    //   data: {},
    //   message: error.message,
    //   success: false,
    //   error: true,
    // });
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const existingUser = await User.findOne({ userName });

    if (!existingUser) {
      return res.status(404).json({ message: "User Not Exist" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }

    const accessToken = jwt.sign({ id: existingUser._id }, jwtKey, {
      expiresIn: "1d",
    });

    const { password: _, ...remaingDetail } = existingUser._doc;

    res.status(200).json({
      data: { ...remaingDetail, accessToken },
      message: "Login Successful",
      Success: true,
    });
  } catch (error) {
    console.log("Error in Login >>>>>>>", error);
    res.status(500).json({ message: error });
  }
};

// const User = require("../models/user.model");
// const CryptoJs = require("crypto-js");

// const register = async (req, res) => {
//   const { email, userName, password } = req.body;
//   const createUser = new User({
//     email,
//     userName,
//     password: CryptoJs.AES.encrypt(password, process.env.PASS_SEC).toString(),
//   });
//   try {
//     const newUser = await createUser.save();
//     // console.log(newUser);
//     res.status(201).json({
//       newUser,
//       message: "User saved successfully",
//       success: true,
//       error: false,
//     });
//   } catch (error) {
//     console.log("error ===>", error);
//     res.status(400).json({
//       data: {},
//       message: error.message,
//       success: false,
//       error: true,
//     });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { userName, password } = req.body;
//     const user = await User.findOne({ userName });

//     if (!user) {
//       return res.status(401).json({
//         message: "User not found",
//         success: false,
//         error: true,
//       });
//     }

//     const hashedPassword = CryptoJs.AES.decrypt(
//       user.password,
//       process.env.PASS_SEC
//     );
//     const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

//     if (originalPassword !== password) {
//       return res.status(401).json({
//         message: "Invalid password",
//         success: false,
//         error: true,
//       });
//     }

//     const accessToken = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     const { password: _, ...otherDetails } = user._doc;

//     return res.status(200).json({
//       data: { ...otherDetails, accessToken },
//       message: "User logged in successfully",
//       success: true,
//       error: false,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       data: {},
//       message: error.message,
//       success: false,
//       error: true,
//     });
//   }
// };

module.exports = {
  register,
  login,
};
