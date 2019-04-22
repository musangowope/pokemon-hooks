export const getTypeColor = type => {
  switch (type) {
    case "normal":
      return "#a8a878";
    case "fighting":
      return "#c03029";
    case "flying":
      return "#a890f0";
    case "poison":
      return "#a890f0";
    case "ground":
      return "#DACD5D";
    case "rock":
      return "#B1AD28";
    case "bug":
      return "#98CB00";
    case "ghost":
      return "#7A3999";
    case "steel":
      return "#7A3999";
    case "fire":
      return "#F38200";
    case "water":
      return "#7D66F4";
    case "grass":
      return "#56DD4C";
    case "electric":
      return "#F1E200";
    case "psychic":
      return "#FF1D80";
    case "ice":
      return "#90DAD9";
    case "dragon":
      return "#9200FD";
    case "dark":
      return "#705A47";
    case "fairy":
      return "#FF00D3";
    default:
      return "#CC0000";
  }
};
