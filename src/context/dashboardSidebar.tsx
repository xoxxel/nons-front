"use client"
import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
    isSideBarOpen: boolean;
    setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  // Create the context with a default value
  const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType);

export const SidebarProvider = ({ children }:{children:React.ReactNode}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  return (
    <SidebarContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
