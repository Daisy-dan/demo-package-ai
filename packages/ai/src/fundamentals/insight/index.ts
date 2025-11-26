import { ChatOllama } from '@langchain/ollama';

const llm = new ChatOllama({
  baseUrl: 'http://127.0.0.1:11434',
  model: 'llama3',
  //   model: 'qwen3:0.6b',
  temperature: 0,
});
console.log(llm);
export const invoke = async () => {
  const res = await llm.invoke('你好');
  console.log(1111, res);
  return res.content;
};
