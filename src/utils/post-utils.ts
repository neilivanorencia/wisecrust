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
