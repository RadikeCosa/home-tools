import { calculateNapkins } from "./calculateNapkins";
describe("calculateNapkins", () => {
  it("returns error for invalid input", () => {
    expect(
      calculateNapkins({
        price: 0,
        width: 100,
        length: 100,
        napkinWidth: 10,
        napkinHeight: 10,
      })
    ).toHaveProperty("error");
    expect(
      calculateNapkins({
        price: NaN,
        width: 100,
        length: 100,
        napkinWidth: 10,
        napkinHeight: 10,
      })
    ).toHaveProperty("error");
  });

  it("returns error if napkin does not fit", () => {
    expect(
      calculateNapkins({
        price: 100,
        width: 10,
        length: 10,
        napkinWidth: 20,
        napkinHeight: 20,
      })
    ).toHaveProperty("error");
  });

  it("calculates correct result for normal orientation", () => {
    const result = calculateNapkins({
      price: 100,
      width: 40,
      length: 40,
      napkinWidth: 10,
      napkinHeight: 10,
    });
    expect("error" in result).toBe(false);
    if ("error" in result) return;
    expect(result.totalNapkins).toBe(16);
    expect(result.orientation).toBe("normal");
    expect(result.napkinsPerRow).toBe(4);
    expect(result.napkinsPerCol).toBe(4);
    expect(result.costPerNapkin).toBeCloseTo(6.25);
    expect(result.utilization).toBeCloseTo(100);
  });

  it("calculates correct result for rotated orientation", () => {
    // En este caso, la orientación rotada da más servilletas (4 vs 3)
    const result = calculateNapkins({
      price: 100,
      width: 20,
      length: 30,
      napkinWidth: 12,
      napkinHeight: 8,
    });
    expect("error" in result).toBe(false);
    if ("error" in result) return;
    expect(result.orientation).toBe("rotated");
    expect(result.totalNapkins).toBe(4);
  });
});
