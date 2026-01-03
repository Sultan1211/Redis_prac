import { createClient } from "redis";

const client = createClient();

async function main(){
    await client.connect();
    const response = await client.rPop("user:1")
    await new Promise((resolve)=> setTimeout(resolve,1000));
    console.log(response);
}
main();