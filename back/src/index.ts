import server from "./server/server";
import { PORT } from "./config/envs";

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}` );
    
})