export const getAlignment = (
  verticalAlign: string,
  horizontalAlign: string | undefined
) => {
  let verticalAlignmentClass = "";
  let horizontalAlignmentClass = "";

  switch (verticalAlign) {
    case "top":
      verticalAlignmentClass = "items-start";
      break;
    case "center":
      verticalAlignmentClass = "items-center";
      break;
    case "bottom":
      verticalAlignmentClass = "items-end";
      break;
    default:
      verticalAlignmentClass = "items-center";
      break;
  }

  if (horizontalAlign) {
    switch (horizontalAlign) {
      case "left":
        horizontalAlignmentClass = "justify-start";
        break;
      case "center":
        horizontalAlignmentClass = "justify-center";
        break;
      case "right":
        horizontalAlignmentClass = "justify-end";
        break;
      default:
        horizontalAlignmentClass = "justify-center";
        break;
    }
  } else {
    return `${verticalAlignmentClass}`;
  }
  return `${verticalAlignmentClass} ${horizontalAlignmentClass}`;
};

export const getHorizontalAlign = (horizontalAlign: string) => {
  switch (horizontalAlign) {
    case "left":
      return "start";

    case "center":
      return "center";

    case "right":
      return "end";

    default:
      return "start";
  }
};

export const getVerticalAlign = (verticalAlign: string) => {
  switch (verticalAlign) {
    case "left":
      return "flex-start";

    case "center":
      return "flex-center";

    case "right":
      return "flex-end";

    default:
      return "flex-start";
  }
};

export function truncateString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  } catch (error) {
    console.error("Invalid date format", error);
    return "";
  }
}

export function formatDateWithYear(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  } catch (error) {
    console.error("Invalid date format", error);
    return "";
  }
}

export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function getColorCode(color: string) {
  // "Green", "Blue", "Black", "Secondary"
  switch (color) {
    case "Green":
      return "#E6F4D7";
    case "Blue":
      return "#D1E0FF";
    case "Black":
      return "#171717";
    case "secondary":
      return "#D5D9EB";
    default:
      return "#fff";
  }
}

export const alignItem = (position: string | undefined) => {
  switch (position) {
    case "center":
      return "justify-center";
    case "right":
      return "justify-end";
    default:
      return "justify-start";
  }
};
