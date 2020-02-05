import hello from "../lib/helloworld";
import { expect, assert } from "chai";
import { isNull } from "util";
const should = require("should");

describe("Hello function", () => {
  //在所有測試開始前會執行的程式碼區塊。
  before(() => {
    console.log("before");
  });

  //在所有測試結束後會執行的程式碼區塊。
  after(() => {
    console.log("after");
  });

  //在每個 Test Case 開始前執行的程式碼區塊。
  beforeEach(() => {
    console.log("beforeEach");
  });

  //在每個 Test Case 結束後執行的程式碼區塊
  afterEach(() => {
    console.log("afterEach");
  });

  it("should return hello world", () => {
    //撰寫測試案例（Test Case）。
    const result = hello();
    // expect(result).to.equal("Hello World!");
    // result.should.equal("Hello World!1");
    assert(result === "Hello World!", "Test result not equal Hello World!");
  });
});
