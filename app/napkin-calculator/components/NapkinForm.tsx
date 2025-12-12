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
}) => (
  <div className="space-y-4 mb-6">
    <div>
      <label
        className="block text-sm font-medium mb-2"
        style={{ color: "var(--color-fg)" }}
      >
        Fabric price ($)
      </label>
      <input
        type="number"
        value={fabricPrice}
        onChange={(e) => setFabricPrice(e.target.value)}
        placeholder="E.g. 5000"
        className="w-full px-4 py-2 border rounded-lg outline-none transition"
        style={{
          borderColor: "var(--color-muted)",
          color: "var(--color-fg)",
          background: "var(--color-bg)",
        }}
      />
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
