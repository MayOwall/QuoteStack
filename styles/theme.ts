import { IThemeProps } from "@/types/theme";

const palette: IThemeProps = {
  white: "#FFFFFF",
  lightgray: "#C2C2C2",
  darkgray: "#5A5A5A",
  black: "#212121",
  alert: "#FF3131",
  tagPurple: "#887BFF",
  tagBlue: "#68B5FF",
  tagGreen: "#3DC831",
  tagYellow: "#FFFF4C",
  tagPink: "#FF8298",
  tagEtc: "#5A5A5A",
};

const fontSize: IThemeProps = {
  small: "13px",
  regular: "16px",
  title: "28px",
  bigTitle: "34px",
};

const borderRadius: IThemeProps = {
  small: "4px",
  medium: "8px",
  big: "16px",
};

export { palette, fontSize, borderRadius };
