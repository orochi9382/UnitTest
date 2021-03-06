import hello from "../lib/helloworld";

const should = require("should");

describe("Hello function", () => {
  it("should return hello world", () => {
    const result = hello();
    result.should.equal("Hello World!");
  });
});

// npm install mocha -g
// npm install mocha --save-dev
// npm install should --save-dev
// npm install @types/chai @types/mocha --save-dev
// npm install mocha chai ts-node -g
// npm install mocha chai ts-node --save-dev

//npm run test 測試test1
//npm run test1 測試test1
//npm run test -- -g "Hello function" 指定方法名稱測試
