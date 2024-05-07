import server from "../server/server";
import { PORT } from "../config/envs";

export function serverInitialize (){
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}` ); 
    })  
}

