import { app } from "app/core";

async function get_all(request: any, response: any){
  try {
    const token = app.jwt.sign({ })
    response.send({
      jwt: token
    })
    // return request.user
  }catch(ex: any) {
    response.code(500).send({ error: ex.message });
  }
} 


export const baseController = {
  get_all
}