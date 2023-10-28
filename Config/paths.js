import path from "path";
import {fileURLToPath} from "url";

export let dir_path = path.dirname(fileURLToPath(import.meta.url))
export let paths = {
    general : {
        env : path.join(dir_path , '..' ,'.env'),
    }
}