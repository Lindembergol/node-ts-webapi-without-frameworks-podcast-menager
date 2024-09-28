//File System (fs) - Ler e escreve em arquivos de sistemas
import fs from "fs"
//Path - Ler diretorios especificos
import path from "path"
import { PodcastModel } from "../models/podcast-model"

// Lendo o caminho do arquivo
const pathData = path.join(__dirname, "../repositories/podcasts.json")

// Lendo o que esta dentro do arquivo e retorna em formato de json
export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    //Ler o arquivo
    const language = "utf-8"
    const rawdata = fs.readFileSync(pathData, language)
    /*Cria um json na memoria
    JSON.parse() - ler o texto e converte em json
    */
    let jsonFile = JSON.parse(rawdata)

    // Condição caso a função venha com parametro
    if (podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
    }

    return jsonFile
}