export type NapkinCalculationInput = {
  price: number;
  width: number;
  length: number;
  napkinWidth: number;
  napkinHeight: number;
};

export type NapkinCalculationResult = {
  totalNapkins: number;
  costPerNapkin: number;
  napkinsPerRow: number;
  napkinsPerCol: number;
  utilization: number;
  orientation: "normal" | "rotated";
};

export type NapkinCalculationError = {
  error: string;
};

export function calculateNapkins(
  input: NapkinCalculationInput
): NapkinCalculationResult | NapkinCalculationError {
  const { price, width, length, napkinWidth, napkinHeight } = input;
  const isValidPositive = (n: number) => Number.isFinite(n) && n > 0;
  if (
    !isValidPositive(price) ||
    !isValidPositive(width) ||
    !isValidPositive(length) ||
    !isValidPositive(napkinWidth) ||
    !isValidPositive(napkinHeight)
  ) {
    return { error: "Please enter valid values greater than 0" };
  }

  // Orientation 1: normal (width x height)
  const napkinsPerRow1 = Math.floor(width / napkinWidth);
  const napkinsPerCol1 = Math.floor(length / napkinHeight);
  const total1 = napkinsPerRow1 * napkinsPerCol1;

  // Orientation 2: rotated 90° (height x width)
  const napkinsPerRow2 = Math.floor(width / napkinHeight);
  const napkinsPerCol2 = Math.floor(length / napkinWidth);
  const total2 = napkinsPerRow2 * napkinsPerCol2;

  let totalNapkins,
    napkinsPerRow,
    napkinsPerCol,
    orientation: "normal" | "rotated";
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

  if (totalNapkins === 0) {
    return {
      error:
        "No napkins fit with the provided dimensions. Try smaller napkins or larger fabric.",
    };
  }

  const costPerNapkin = price / totalNapkins;
  const fabricArea = width * length;
  const usedArea = totalNapkins * (napkinWidth * napkinHeight);
  const utilization = (usedArea / fabricArea) * 100;

  return {
    totalNapkins,
    costPerNapkin,
    napkinsPerRow,
    napkinsPerCol,
    utilization,
    orientation,
  };
}
