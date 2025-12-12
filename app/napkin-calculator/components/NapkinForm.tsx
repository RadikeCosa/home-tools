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
  error?: string | null;
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
  error,
}) => (
  <form
    className="space-y-4 mb-6"
    onSubmit={(e) => {
      e.preventDefault();
      onCalculate();
    }}
  >
    {error && (
      <div
        role="alert"
        aria-live="polite"
        className="rounded-lg border border-warning bg-bg text-warning p-3 text-sm"
      >
        {error}
      </div>
    )}
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
      <label className="block text-sm font-medium mb-2 text-fg">
        Fabric price ($)
      <label
        className="block text-sm font-medium mb-2"
        style={{ color: "var(--color-fg)" }}
      >
        Fabric price ($ per meter of length)
      </label>
      <input
        type="number"
        value={fabricPrice}
        min={0}
        step={0.01}
        inputMode="decimal"
        onChange={(e) => setFabricPrice(e.target.value)}
        placeholder="E.g. 5000"
        className="w-full px-4 py-2 border border-muted text-fg bg-bg rounded-lg outline-none transition"
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
        <label className="block text-sm font-medium mb-2 text-fg">
          Fabric width (cm)
        </label>
        <input
          type="number"
          value={fabricWidth}
          min={0}
          step={0.1}
          inputMode="decimal"
          onChange={(e) => setFabricWidth(e.target.value)}
          placeholder="E.g. 150"
          className="w-full px-4 py-2 border border-muted text-fg bg-bg rounded-lg outline-none transition"
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
        <label className="block text-sm font-medium mb-2 text-fg">
          Fabric length (cm)
        </label>
        <input
          type="number"
          value={fabricLength}
          min={0}
          step={0.1}
          inputMode="decimal"
          onChange={(e) => setFabricLength(e.target.value)}
          placeholder="E.g. 200"
          className="w-full px-4 py-2 border border-muted text-fg bg-bg rounded-lg outline-none transition"
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
        <label className="block text-sm font-medium mb-2 text-fg">
          Napkin width (cm)
        </label>
        <input
          type="number"
          value={napkinWidth}
          min={0}
          step={0.1}
          inputMode="decimal"
          onChange={(e) => setNapkinWidth(e.target.value)}
          placeholder="E.g. 40"
          className="w-full px-4 py-2 border border-muted text-fg bg-bg rounded-lg outline-none transition"
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
        <label className="block text-sm font-medium mb-2 text-fg">
          Napkin height (cm)
        </label>
        <input
          type="number"
          value={napkinHeight}
          min={0}
          step={0.1}
          inputMode="decimal"
          onChange={(e) => setNapkinHeight(e.target.value)}
          placeholder="E.g. 45"
          className="w-full px-4 py-2 border border-muted text-fg bg-bg rounded-lg outline-none transition"
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
        type="submit"
        className="flex-1 py-2 rounded-lg font-semibold transition shadow bg-primary text-white"
      >
        Calculate
      </button>
      <button
        type="button"
        onClick={onClear}
        className="px-6 py-2 rounded-lg font-semibold transition bg-muted text-fg"
      >
        Clear
      </button>
    </div>
  </form>
);

export default NapkinForm;
