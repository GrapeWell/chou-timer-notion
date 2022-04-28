const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: "secret_wPZWDD3N8oGJyEPvZWvZRJnCVaJmBTYcau364IAiH9O"
})

exports.handler = async function (event, context) {
  let data = await notion.databases.query({database_id: '4d2270f42ea249ca821a5d67334f8b58'})
  data = data.results.map(i => i.properties);
  data = data.map(i => {
    return {
      id: i.Id.title[0].plain_text,
      seconds: i.Seconds.number,
      h: i.ColorH.number,
      s: i.ColorS.number,
      l: i.ColorL.number
    }
  })
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}