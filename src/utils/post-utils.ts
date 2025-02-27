export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Existentialism":
      return "emerald";
    case "Idealism":
      return "teal";
    case "Pragmatism":
      return "cyan";
    case "Rationalism":
      return "sky";
    case "Universalism":
      return "blue";
    case "Utilitarianism":
      return "indigo";
    default:
      return "none";
  }
};

export const getColorFromCourseType = (type: string) => {
  switch (type) {
    case "Foundation":
      return "fuchsia";
    case "Self-Paced":
      return "pink";
    default:
      return "none"
  }
};
