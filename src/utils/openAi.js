import OpenAI from 'openai';
import { openAi_key } from './constant';

const client = new OpenAI({
  apiKey: openAi_key,
  dangerouslyAllowBrowser: true 
  //process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default client;