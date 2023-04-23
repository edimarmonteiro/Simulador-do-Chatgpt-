//const { OpenAIApi } = require("openai")
const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

module.exports = {
    async sendText (req,res){
        const OpenAIApi = openai.configuration()
        /*Toda ves que o user fizer uma pergunta estarei dando o novi inputPrompt, que esecuta o prompt*/
        const inputModel = new inputPrompt(req.body)

        try {
          /*** await = Vai espera a resposta* createCompletion = ira fazer a animação como se estiverse escrevendo*/
        const response = await OpenAIApi.createCompletion(
            //Nosso modelo de obojetoIra // Nos retorna nossar informações da IA API la do stactic textCompletion, subistituindo apenas o PROMPT
             openai.textCompletion(inputPrompt))

             return res.status(200).json({
                //Semore irei retorna essas duas informações
                sucess: true,
                //pegando o Conteudo da resposta. Pegano apenas o texto
                data: response.data.choices[0].text
             })
        
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                //Se vier vasia, se não vier vasia(mensagem do servidor)
                error: error.response ? error.response.data 
                : "Erro é no servidor. O dev está resolvendo"
            })
        }
    }
}