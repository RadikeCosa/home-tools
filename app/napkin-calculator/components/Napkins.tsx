"use client";
import { useState } from "react";
import NapkinForm from "./NapkinForm";
import NapkinResults, { NapkinResult } from "./NapkinResults";

export default function NapkinCalculator() {
  const [fabricPrice, setFabricPrice] = useState("");
  const [fabricWidth, setFabricWidth] = useState("");
  const [fabricLength, setFabricLength] = useState("");
  const [napkinWidth, setNapkinWidth] = useState("");
  const [napkinHeight, setNapkinHeight] = useState("");
  const [result, setResult] = useState<NapkinResult | null>(null);

  const calculate = () => {
    const price = parseFloat(fabricPrice);
    const width = parseFloat(fabricWidth);
    const length = parseFloat(fabricLength);
    const nWidth = parseFloat(napkinWidth);
    const nHeight = parseFloat(napkinHeight);

    if (
      !price ||
      !width ||
      !length ||
      !nWidth ||
      !nHeight ||
      price <= 0 ||
      width <= 0 ||
      length <= 0 ||
      nWidth <= 0 ||
      nHeight <= 0
    ) {
      alert("Please enter valid values greater than 0");
      return;
    }

    // Orientation 1: normal (width x height)
    const napkinsPerRow1 = Math.floor(width / nWidth);
    const napkinsPerCol1 = Math.floor(length / nHeight);
    const total1 = napkinsPerRow1 * napkinsPerCol1;

    // Orientation 2: rotated 90° (height x width)
    const napkinsPerRow2 = Math.floor(width / nHeight);
    const napkinsPerCol2 = Math.floor(length / nWidth);
    const total2 = napkinsPerRow2 * napkinsPerCol2;

    let totalNapkins, napkinsPerRow, napkinsPerCol, orientation;
    if (total1 >= total2) {
      totalNapkins = total1;
      napkinsPerRow = napkinsPerRow1;
      napkinsPerCol = napkinsPerCol1;
      orientation = "normal";
    } else {
      totalNapkins = total2;
      napkinsPerRow = napkinsPerRow2;
      napkinsPerCol = napkinsPerCol2;
      orientation = "rotated";
    }

    const costPerNapkin = totalNapkins > 0 ? price / totalNapkins : 0;
    const fabricArea = width * length;
    const usedArea = totalNapkins * (nWidth * nHeight);
    const utilization = (usedArea / fabricArea) * 100;

    setResult({
      totalNapkins,
      costPerNapkin,
      napkinsPerRow,
      napkinsPerCol,
      utilization,
      orientation,
    });
  };

  const clear = () => {
    setFabricPrice("");
    setFabricWidth("");
    setFabricLength("");
    setNapkinWidth("");
    setNapkinHeight("");
    setResult(null);
  };

  return (
    <div
      className="min-h-screen p-4 sm:p-8"
      style={{ background: "var(--color-muted)" }}
    >
      <div
        className="max-w-2xl mx-auto rounded-2xl shadow p-6 sm:p-8"
        style={{
          background: "var(--color-bg)",
          color: "var(--color-fg)",
          fontFamily: "var(--font-main)",
        }}
      >
        <h1
          className="text-3xl font-bold mb-2 text-center"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Napkin Calculator
        </h1>
        <p
          className="text-center mb-6"
          style={{ color: "var(--color-secondary)" }}
        >
          Calculate how many napkins you can get from your fabric
        </p>
        <NapkinForm
          fabricPrice={fabricPrice}
          setFabricPrice={setFabricPrice}
          fabricWidth={fabricWidth}
          setFabricWidth={setFabricWidth}
          fabricLength={fabricLength}
          setFabricLength={setFabricLength}
          napkinWidth={napkinWidth}
          setNapkinWidth={setNapkinWidth}
          napkinHeight={napkinHeight}
          setNapkinHeight={setNapkinHeight}
          onCalculate={calculate}
          onClear={clear}
        />
        {result && <NapkinResults result={result} />}
      </div>
    </div>
  );
}
