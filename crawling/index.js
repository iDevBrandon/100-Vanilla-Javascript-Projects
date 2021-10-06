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
const { default: axios } = require("axios");
const port = process.env.PORT || 3000;

const app = express();

const getDividend = () => {
  return axios
    .get(`https://www.nasdaq.com/market-activity/stocks/msft/dividend-history`)
    .then((response) => {
      const html = response.data;
      const dividends = [];

      const symbolHeading = ($ = cheerio.load(html));
      $("table")
        .find("tbody tr th:nth-child(2)")
        .each(() => {
          $("td")
            .find("table")
            .each(() => {
              console.log($(this).text());
            });
        });

      console.log(symbolHeading.text());
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
