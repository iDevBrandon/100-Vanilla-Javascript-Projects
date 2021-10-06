/*
 // https://www.nasdaq.com/market-activity/stocks/msft/dividend-history
//li.dividend-history__summary-item:nth-child(2)>span.dividend-history__summary-item__value>span
export const getDividendYiled = async (symbol) => {
  return await axios.get(`https://www.nasdaq.com/market-activity/stocks/${symbol}/dividend-history`)
    .then(html => {
      const $ = cheerio.load(html.data)
      return $("li.dividend-history__summary-item:nth-child(2)").html()
    })
}
*/

// 1. CSS Selector
const cheerio = require("cheerio");
const express = require("express");
const cheerioTableparser = require("cheerio-tableparser");
const axios = require("axios");
const port = process.env.PORT || 3000;

const app = express();

scrapingResult = {
  type: "",
  cash_amount: "",
  date: "",
};

const getDividend = () => {
  return axios
    .get(`https://www.nasdaq.com/market-activity/stocks/msft/dividend-history`)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      const bodyList = $(".dividend-history__table tbody tr").map(function (
        i,
        element
      ) {
        scrapingResult["date"] = String(
          $(element).find("td:nth-of-type(0)").text()
        );
        scrapingResult["type"] = String(
          $(element).find("td:nth-of-type(1)").text()
        );
        scrapingResult["cash_amount"] = $(element)
          .find("td:nth-of-type(2)")
          .text();

        console.log(scrapingResult);
      });
    });
};

getDividend();

app.listen(port, () => console.log(`Server is running on PORT ${port}`));

// export const getDividend = async (symbol) => {
//   return await axios
//     .get(
//       `https://www.nasdaq.com/market-activity/stocks/${symbol}/dividend-history`
//     )
//     .then((html) => {
//       const $ = cheerio.load(html.data);
//       return $(
//         "tr.dividend-history__row dividend-history__row--headings:nth-child(2)"
//       ).html();
//     });
// };

// const dividendReport = async () => {
//   const dividend = await getDividend('mmsft');
//   console.log("Dividend for MSFT : " + dividend);
// };

// dividendReport();
