
import { app, port, _optimise, _secure_headers } from "./src/models/config/config";
import PostRoute from "./src/views/base_router";

// routes
app.get("/", async (request, response) => {
  return {
    "message": "hello world"
  }
});
app.register(PostRoute);

const start = async () => {
    try {
        await Promise.all([
            await _secure_headers(),
            await _optimise()
        ])
        await app.listen({ port: port }, (err: any, addr: any) => {
            if(err) throw new Error(err)
        });
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()