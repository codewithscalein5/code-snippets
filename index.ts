import * as cheerio from "cheerio";

declare module "cheerio" {
  interface Cheerio<T> {
    logHtml(this: Cheerio<T>): void;
  }
}

const $ = cheerio.load(
  "<html><body>Hello, <b>from Scale in 5</b>!</body></html>"
);
$.prototype.logHtml = function () {
  console.log(this.html());
};

$("body").logHtml(); // logs "Hello, <b>from Scale in 5</b>!" to the console
