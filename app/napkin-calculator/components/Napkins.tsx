"use client";

import { useState } from "react";
import NapkinForm from "./NapkinForm";
import NapkinResults, { NapkinResult } from "./NapkinResults";
import { calculateNapkins } from "../utils/calculateNapkins";

export default function NapkinCalculator() {
  const [fabricPrice, setFabricPrice] = useState("");
  const [fabricWidth, setFabricWidth] = useState("");
  const [fabricLength, setFabricLength] = useState("");
  const [napkinWidth, setNapkinWidth] = useState("");
  const [napkinHeight, setNapkinHeight] = useState("");
  const [result, setResult] = useState<NapkinResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const wrapSetter = (setter: (v: string) => void) => (v: string) => {
    setError(null);
    setter(v);
  };

  const calculate = () => {
    setError(null);
    const price = parseFloat(fabricPrice);
    const width = parseFloat(fabricWidth);
    const length = parseFloat(fabricLength);
    const nWidth = parseFloat(napkinWidth);
    const nHeight = parseFloat(napkinHeight);
    const resultOrError = calculateNapkins({
      price,
      width,
      length,
      napkinWidth: nWidth,
      napkinHeight: nHeight,
    });
    if ("error" in resultOrError) {
      setResult(null);
      setError(resultOrError.error);
    } else {
      setResult(resultOrError);
      setError(null);
    }
  };

  const clear = () => {
    setFabricPrice("");
    setFabricWidth("");
    setFabricLength("");
    setNapkinWidth("");
    setNapkinHeight("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-muted p-4 sm:p-8">
      <div className="max-w-2xl mx-auto rounded-2xl shadow p-6 sm:p-8 bg-bg text-fg font-main">
        <h1 className="text-3xl font-bold mb-2 text-center font-title">
          Napkin Calculator
        </h1>
        <p className="text-center mb-6 text-secondary">
          Calculate how many napkins you can get from your fabric
        </p>
        <NapkinForm
          fabricPrice={fabricPrice}
          setFabricPrice={wrapSetter(setFabricPrice)}
          fabricWidth={fabricWidth}
          setFabricWidth={wrapSetter(setFabricWidth)}
          fabricLength={fabricLength}
          setFabricLength={wrapSetter(setFabricLength)}
          napkinWidth={napkinWidth}
          setNapkinWidth={wrapSetter(setNapkinWidth)}
          napkinHeight={napkinHeight}
          setNapkinHeight={wrapSetter(setNapkinHeight)}
          onCalculate={calculate}
          onClear={clear}
          error={error}
          error={error}
        />
        {result && <NapkinResults result={result} />}
      </div>
    </div>
  );
}
