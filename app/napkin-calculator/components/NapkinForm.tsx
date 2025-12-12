import React from "react";

interface NapkinFormProps {
  fabricPrice: string;
  setFabricPrice: (v: string) => void;
  fabricWidth: string;
  setFabricWidth: (v: string) => void;
  fabricLength: string;
  setFabricLength: (v: string) => void;
  napkinWidth: string;
  setNapkinWidth: (v: string) => void;
  napkinHeight: string;
  setNapkinHeight: (v: string) => void;
  onCalculate: () => void;
  onClear: () => void;
  error?: string;
}

const NapkinForm: React.FC<NapkinFormProps> = ({
  fabricPrice,
  setFabricPrice,
  fabricWidth,
  setFabricWidth,
  fabricLength,
  setFabricLength,
  napkinWidth,
  setNapkinWidth,
  napkinHeight,
  setNapkinHeight,
  onCalculate,
  onClear,
  error,
}) => (
  <div className="space-y-4 mb-6">
    {error && (
      <div
        className="rounded-lg p-4 border-2"
        style={{
          background: "var(--color-error)",
          borderColor: "var(--color-error)",
          color: "white",
        }}
        role="alert"
      >
        <strong>⚠️ Error: </strong>
        {error}
      </div>
    )}
    <div>
      <label
        className="block text-sm font-medium mb-2"
        style={{ color: "var(--color-fg)" }}
      >
        Fabric price ($ per meter of length)
      </label>
      <input
        type="number"
        value={fabricPrice}
        onChange={(e) => setFabricPrice(e.target.value)}
        placeholder="E.g. 5000"
        min="0"
        step="0.01"
        className="w-full px-4 py-2 border rounded-lg outline-none transition"
        style={{
          borderColor: "var(--color-muted)",
          color: "var(--color-fg)",
          background: "var(--color-bg)",
        }}
      />
      <p className="text-xs mt-1" style={{ color: "var(--color-secondary)" }}>
        Price per meter of fabric length (width is fixed)
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-fg)" }}
        >
          Fabric width (cm)
        </label>
        <input
          type="number"
          value={fabricWidth}
          onChange={(e) => setFabricWidth(e.target.value)}
          placeholder="E.g. 150"
          min="0"
          step="0.1"
          className="w-full px-4 py-2 border rounded-lg outline-none transition"
          style={{
            borderColor: "var(--color-muted)",
            color: "var(--color-fg)",
            background: "var(--color-bg)",
          }}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-fg)" }}
        >
          Fabric length (cm)
        </label>
        <input
          type="number"
          value={fabricLength}
          onChange={(e) => setFabricLength(e.target.value)}
          placeholder="E.g. 200"
          min="0"
          step="0.1"
          className="w-full px-4 py-2 border rounded-lg outline-none transition"
          style={{
            borderColor: "var(--color-muted)",
            color: "var(--color-fg)",
            background: "var(--color-bg)",
          }}
        />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-fg)" }}
        >
          Napkin width (cm)
        </label>
        <input
          type="number"
          value={napkinWidth}
          onChange={(e) => setNapkinWidth(e.target.value)}
          placeholder="E.g. 40"
          min="0"
          step="0.1"
          className="w-full px-4 py-2 border rounded-lg outline-none transition"
          style={{
            borderColor: "var(--color-muted)",
            color: "var(--color-fg)",
            background: "var(--color-bg)",
          }}
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--color-fg)" }}
        >
          Napkin height (cm)
        </label>
        <input
          type="number"
          value={napkinHeight}
          onChange={(e) => setNapkinHeight(e.target.value)}
          placeholder="E.g. 45"
          min="0"
          step="0.1"
          className="w-full px-4 py-2 border rounded-lg outline-none transition"
          style={{
            borderColor: "var(--color-muted)",
            color: "var(--color-fg)",
            background: "var(--color-bg)",
          }}
        />
      </div>
    </div>
    <div className="flex gap-3">
      <button
        onClick={onCalculate}
        className="flex-1 py-2 rounded-lg font-semibold transition shadow"
        style={{ background: "var(--color-primary)", color: "white" }}
      >
        Calculate
      </button>
      <button
        onClick={onClear}
        className="px-6 py-2 rounded-lg font-semibold transition"
        style={{ background: "var(--color-muted)", color: "var(--color-fg)" }}
      >
        Clear
      </button>
    </div>
  </div>
);

export default NapkinForm;
