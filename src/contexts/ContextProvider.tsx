import React, { ChangeEventHandler, useContext, useState } from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

type initialStateType = typeof initialState;

interface StateInterface {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: string | undefined;
  setScreenSize: React.Dispatch<React.SetStateAction<any>>;
  handleClick: React.Dispatch<React.SetStateAction<any>>;
  isClicked: initialStateType;
  initialState: initialStateType;
  setIsClicked: React.Dispatch<React.SetStateAction<initialStateType>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  setMode: React.Dispatch<React.SetStateAction<any>>;
  setColor: React.Dispatch<React.SetStateAction<any>>;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<any>>;
}

const StateContext = React.createContext<StateInterface | null>(null);

const ContextProvider: React.FC<{
  children: any;
}> = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentMode(e.currentTarget.value);
    localStorage.setItem("themeMode", e.currentTarget.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
