import { app, _secure_headers, _optimise, port, database } from "./app/core";
import { BaseRoute } from "./app/modules";

app.register(BaseRoute);

const start = async () => {
    try {
        await Promise.all([
            await database.sync(),
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