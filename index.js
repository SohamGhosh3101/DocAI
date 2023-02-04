
const OpenAI = require('openai');
const { Configuration, OpenAIApi }= OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const configuration = new Configuration({
    organization: "org-TK0wAsYQmqPfuSH7po4UP9AF",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) =>{
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pretend to be a nutritionist. Give the person medical advice and nutritional values in bullet points.
        Nutritionist: How can I help you?
        Person: I have diabetes can I consume Rice regularly
        Nutritionist: Rice is rich in carbohydrates and can have a high GI score and not always recommended for diabetic patients. If you still wish to eat please avoid eating it in large portions or too frequently, though. Nutritional value for 100 grams: Carbohydrates=28 grams, Fats= 0 grams, Protein=2 grams, Sodium=1 mg, Potassium=35 mg.
        Person: Can I drink tea 5 times a day?
        Nutritionist: Though moderate intake is healthy for most people, drinking too much could lead to negative side effects, such as anxiety, headaches, digestive issues, and disrupted sleep patterns. Most people can drink 3–4 cups (710–950 ml) of tea daily without adverse effects, but some may experience side effects at lower doses. Nutrition in 100 grams of black tea with sugar: Calories=2.4, Carbohydrates=0.4 grams, Fibre=0.1 grams, Fats=0 grams, Proteins=0.1 grams.
        Person: ${message}?
        Nutritionist:`,
        max_tokens: 200,
        temperature: 0.1,
      });
      console.log(response.data)
      if(response.data.choices[0].text){
        res.json({message: response.data.choices[0].text})
      }
    });
app.listen(port, ()=> {
    console.log('Example app listening')
});