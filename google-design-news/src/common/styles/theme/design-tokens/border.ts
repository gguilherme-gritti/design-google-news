export const border = {
  size: {
    none: {
      value: "0px",
      attributes: {
        category: "size",
        type: "border",
      },
    },
    hairline: {
      value: "1px",
      attributes: {
        category: "size",
        type: "border",
      },
    },
    thin: {
      value: "2px",
      attributes: {
        category: "size",
        type: "border",
      },
    },
    thick: {
      value: "4px",
      attributes: {
        category: "size",
        type: "border",
      },
    },
    heavy: {
      value: "8px",
      attributes: {
        category: "size",
        type: "border",
      },
    },
  },
};

export type TBorder = typeof border;
