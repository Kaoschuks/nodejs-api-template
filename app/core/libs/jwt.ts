import { app, jwt } from "../config";

// app.register(jwt, {
//   secret: {
//     public: process.env.JWT_ISSUER_PUBKEY || ''
//   }
// })
app.register(jwt, {
  secret: "supersecret",
});

export const generateToken = (data: any) => {
  return app.jwt.sign(data);
};

export const verifyToken = (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const decoded: any = app.jwt.verify(token);
    req.id = decoded.id;
    next();
  } catch (err) {
    res.code(401).send({ error: "Authentication failed" });
  }
};
