const { Configuration, OpenAIApi } = require("openai");

module.exports = class openai {
    //Metodo estatico
    //Me retorna as configuração
    static configuration() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });

          return new OpenAIApi(configuration);
    }
          //Deichando dinamico  com o PROMPT
         //Me retorna modelo de obijeto    
          static textCompletion({ prompt }){
            return {
              model: "text-davinci-003",
              prompt: `${prompt}`,
              temperature: 0,
              max_tokens: 3500,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0,
            }
    }
        
}
