import {app, jwt } from "../models/config/config";

// app.register(jwt, {
//   secret: {
//     public: process.env.JWT_ISSUER_PUBKEY || ''
//   }
// })
app.register(jwt, {
  secret: 'supersecret'
})

export const posts = {
  get_all: async (req: any, res: any) => {
    try {
      const token = app.jwt.sign({ })
      res.send({
        jwt: token
      })
      // return request.user
    }catch(ex: any) {
      res.status(500).json({ error: ex.message });
    }
  }
}