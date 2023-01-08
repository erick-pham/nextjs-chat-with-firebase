import { createContext } from "react";
if (typeof window !== "undefined") {
  console.log("localStorage", localStorage.getItem("theme"));
}
type ThemeContextProp = {
  darkMode: boolean | false;
  changeMode: any;
};
export const themeInitialState = {
  darkMode: false,
};

export const ThemeContext = createContext<ThemeContextProp>({
  ...themeInitialState,
  changeMode: () => {},
});

export const themeReducer = (state: any, action: { type: string }) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// export function ThemeContextProvider(props) {
//   const [state, dispatch] = useReducer(themeReducer, initialState);

//   return (
//     <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// }