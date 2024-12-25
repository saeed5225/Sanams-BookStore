import jwt from "jsonwebtoken";

export default function verifyUser(req, res, next) {
  try {
    const token = req.cookies?.access_token;
    if (!token) {
      return res.status(500).json({ ok: false, Error: "Not Authorized" });
    }

    const skey = process.env.SECRET_KEY;
    jwt.verify(token, skey, (error, user) => {
      if (error) {
        return res.status(500).json({ ok: false, Error: "Forbidden" });
      }
      req.user = user;

      next();
    });
  } catch (error) {
    res.status(500).json({ Error: "Unknown authorization Error" });
  }
}
