import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as fs from 'fs';
import * as path from 'path';


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    // context.log('HTTP trigger function processed a request.');
    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";


    // const dirr = async (path: string) => {
    //     const dir = await fs.promises.opendir(path);
    //     for await (const dirent of dir) {
    //         console.log(dirent.name);
    //     }
    // }
    // const test = await dirr('./')
    const p: string[] = []
    const dir = await fs.promises.opendir('../../../');
    for await (const dirent of dir) {
        context.log(dirent.name);
        p.push(dirent.name)
    }
    // context.log(dir)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: p
    };

};

export default httpTrigger;