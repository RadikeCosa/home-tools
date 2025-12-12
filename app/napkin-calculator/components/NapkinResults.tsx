import React from "react";

export type NapkinResult = {
  totalNapkins: number;
  costPerNapkin: number;
  napkinsPerRow: number;
  napkinsPerCol: number;
  utilization: number;
  orientation: string;
};

interface NapkinResultsProps {
  result: NapkinResult;
}

const NapkinResults: React.FC<NapkinResultsProps> = ({ result }) => (
  <div
    className="mt-8 rounded-xl p-6 border-2"
    style={{
      background: "var(--color-muted)",
      borderColor: "var(--color-primary)",
    }}
  >
    <h2
      className="text-2xl font-bold mb-4 text-center"
      style={{ color: "var(--color-primary)", fontFamily: "var(--font-title)" }}
    >
      Results
    </h2>
    <div className="space-y-4">
      <div
        className="rounded-lg p-4 shadow-sm"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="text-sm mb-1" style={{ color: "var(--color-fg)" }}>
          Total napkins
        </div>
        <div
          className="text-3xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          {result.totalNapkins}
        </div>
        <div
          className="text-xs mt-1"
          style={{ color: "var(--color-secondary)" }}
        >
          ({result.napkinsPerRow} × {result.napkinsPerCol})
        </div>
        {result.orientation === "rotated" && (
          <div
            className="text-xs mt-2 font-medium"
            style={{ color: "var(--color-warning)" }}
          >
            ⟳ Best result by rotating napkin 90°
          </div>
        )}
      </div>
      <div
        className="rounded-lg p-4 shadow-sm"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="text-sm mb-1" style={{ color: "var(--color-fg)" }}>
          Cost per napkin
        </div>
        <div
          className="text-3xl font-bold"
          style={{ color: "var(--color-accent)" }}
        >
          ${result.costPerNapkin.toFixed(2)}
        </div>
      </div>
      <div
        className="rounded-lg p-4 shadow-sm"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="text-sm mb-1" style={{ color: "var(--color-fg)" }}>
          Fabric utilization
        </div>
        <div
          className="text-2xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          {result.utilization.toFixed(1)}%
        </div>
        <div
          className="w-full rounded-full h-2 mt-2"
          style={{ background: "var(--color-muted)" }}
        >
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: `${result.utilization}%`,
              background: "var(--color-primary)",
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default NapkinResults;
