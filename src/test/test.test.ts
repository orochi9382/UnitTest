import hello from "../lib/helloworld";
import max from "../lib/max";
import min from "../lib/min";
import average from "../lib/average";
import { expect, assert } from "chai";
import { isUndefined } from "util";
const should = require("should");

describe("Hello function", () => {
  it("should return hello world", () => {
    const result = hello();
    result.should.equal("Hello World!");
  });
});

//Max
describe("#max", () => {
  // 測試有沒有取得正確的最大值
  it("should return the maximum in array", done => {
    const maximum = max([1, 10, 100, 1000]);
    maximum.should.equal(1000);
    done();
  });

  // 測試有沒有回傳 undefined
  it("should return undefined when array is empty", done => {
    const maximum = max([]);
    (maximum === undefined).should.be.true;
    expect(isUndefined(maximum)).to.equal(true);
    done();
  });
});

//Min
describe("#min", () => {
  // 測試有沒有取得正確的最小值
  it("should return the minimum in array", done => {
    const minimum = min([1, 10, 100, 1000]);
    minimum.should.equal(1);
    done();
  });

  // 測試有沒有回傳 undefined
  it("should return undefined when array is empty", done => {
    const minimum = min([]);
    expect(isUndefined(minimum)).to.equal(true);
    done();
  });
});

//Average
describe("#average", () => {
  // 測試算出來的平均是不是 2.5
  it("should return the average of array", done => {
    const avg = average([1, 2, 3, 4]);
    avg.should.equal(2.5);
    done();
  });

  // 測試有沒有回傳 NaN
  it("should return NaN when array is empty", done => {
    const avg = average([]);
    expect(isNaN(avg)).to.equal(true);
    done();
  });
});
