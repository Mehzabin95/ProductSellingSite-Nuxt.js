export default defineEventHandler(async (event) => {
  //
  // handle query params
  // const { name } = getQuery(event);

  //Handle post data
  // const { age } = await readBody(event);
  // return {
  //   message: `Hello, ${name}! You are ${age} years old`,
  // };

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=cur_live_yKCPMlLNIuyTfWUlqeS2ToJs5RnKbeoLRSAiRC9T"
  );

  return data;
});
