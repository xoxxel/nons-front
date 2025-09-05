"use client";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    main: string;
    element: string;
    chat: string;
    secondary: string;
    tertiary: string;
  }

  interface TypeBorder {
    main: string;
    secondary: string;
  }

  interface TypeBadge {
    success: string;
    danger: string;
    disable: string;
    info: string;
    warning:string
  }

  interface TypeTab {
    main: string;
    icon: string;
  }

  interface TypeText {
    main: string;
    secondary: string;
    content: string;
    low: string;
  }

  interface TypeIcon {
    main: string;
  }

  interface TypeHover {
    main: string;
  }

  interface TypeBlack {
    main: string;
  }

  interface TypeOther {
    main: string;
  }

  interface TypeButton {
    main: string;
    info: string;
  }

  interface TypeNavigation {
    main: string;
  }
  
  interface TypeToast {
    success: string
    error: string
    successText: string
    errorText: string
  }

  interface PaletteOptions {
    border?: Partial<TypeBorder>;
    text?: Partial<TypeText>;
    icon: Partial<TypeIcon>;
    black: Partial<TypeBlack>;
    other: Partial<TypeOther>;
    hover: Partial<TypeHover>;
    button: Partial<TypeButton>;
    navigation: Partial<TypeNavigation>;
    badge: Partial<TypeBadge>;
    badgeText: Partial<TypeBadge>;
    tab: Partial<TypeTab>;
    toast: Partial<TypeToast>;
  }
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "100": "#A7F242",
          main: "#9FE870",
        },
        background: {
          main: "#FFFFFF",
          element: "#F8F9FA",
          chat: "#ffffffe6",
          secondary: "#E9ECEF",
          tertiary: "#272a2d",
        },
        grey: {
          "700": "#4D5356",
          "600": "#4D5356",
          "400": "#FFFFFF",
        },
        border: {
          main: "#848686",
          secondary: "#666666",
        },
        button: {
          main: "#0961DC",
          info: "#EFF8FF"
        },
        text: { main: "#444444", secondary: "#666666", low: "#8899A6", content:"#111111" },
        icon: { main: "#344054" },
        black: { main: "#1E1E1E" },
        other: { main: "#1E1E1E" },
        hover: { main: "#F5F5F5" },
        navigation: { main: "#FFFFFF" },
        badge: {
          success: "#ECFDF3",
          disable: "#F2F4F7",
          danger: "#FEF3F2",
          info: "#F9F5FF",
          warning: "#FFFAEB",
        },
        badgeText: {
          success: "#027A48",
          danger: "#B42318",
          disable: "#A9A9A9",
          info: "#6941C6",
          warning: "#B54708",
        },
        tab: {
          main: "#1E1E1E",
          icon: "#fff",
        },
        toast: {
          success: "#F6FEF9",
          error: "#FFFBFA",
          successText: "#027A48",
          errorText:"#B42318"
        }
      },
    },
    dark: {
      palette: {
        primary: {
          "100": "#A7F242",
          main: "#9FE870",
        },
        background: {
          main: "#222222",
          element: "#2C2C2C",
          chat: "#2C2C2C",
          secondary: "#333333",
          tertiary: "#333333",
        },
        grey: {
          "700": "#4D5356",
          "600": "#FFF",
          "400": "#444D51",
        },
        border: {
          main: "#848686",
          secondary: "#666666",
        },
        button: {
          main: "#0961DC",
          info: "#28293F",
        },
        text: { main: "#E0E0E0", secondary: "#B0B0B0", low: "#8899A6", content:"#E0E0E0" },
        icon: { main: "#FFFFFF" },
        black: { main: "#1E1E1E" },
        other: { main: "#FFFFFF" },
        hover: { main: "#444444" },
        navigation: { main: "#1E1E1E" },
        badge: {
          success: "#2C3E37",
          disable: "#444444",
          danger: "#FFA19A",
          info: "#302548",
          warning: "#301F18",
        },
        badgeText: {
          success: "#4ED19B",
          danger: "#B42318",
          disable: "#B0B0B0",
          info: "#C240FF",
          warning: "#FF6C1A"
        },
        tab: {
          main: "#333333",
          icon: "#E0E0E0",
        },
        toast: {
          success: "#2C3E37",
          error: "#3F2828",
          successText: "#4ED19B",
          errorText:"#FF6666"
        }
      },
    },
  },
});

const Theme = ({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode: "light" | "dark" | undefined;
}) => {
  return (
    <CssVarsProvider defaultMode={mode ? mode : "dark"} theme={theme}>
      {children}
    </CssVarsProvider>
  );
};

export default Theme;
