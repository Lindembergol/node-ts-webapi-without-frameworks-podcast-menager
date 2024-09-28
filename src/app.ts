import * as http from "http"
import {getFilterEpisodes, getListEpisodes} from "./controllers/podscasts-controller"
import {Routes} from "./routes/routes"
import {HttpMethode} from "./utils/http-methods"

/* CRIA UM SERVIDOR DO NODE ----------------------------
http.IncomingMessage -> menssagens que estão chegando
http.ServerResponse -> Tipo de resposta do servidor
*/
export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //QueryString - texto para consulta
    //http://localhost:3333/api/episode?p=Flow
    const baseUrl = req.url?.split('?')[0]

    if(req.method === HttpMethode.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res)
    }

    if (req.method === HttpMethode.GET && baseUrl === Routes.EPISODES) {
        await getFilterEpisodes(req, res)
    }
}