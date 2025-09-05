"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";

interface ShopStepModel {
  currentStep: "number" | "email" | "nationalCode" | "shopName" | "";
  focusingStep: "number" | "email" | "nationalCode" | "shopName" | "";
  setFocusingStep: Function;
}

export const ShopStepContext = createContext<ShopStepModel>({
  currentStep: "",
  focusingStep: "",
  setFocusingStep: () => {},
});

interface ConfirmationItemModel {
  title: ShopStepModel["focusingStep"];
  isPassed: boolean;
  priority: number;
  isNextStep: boolean;
}

const ShopStepProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(UserContext);
  const [focusingStep, setFocusingStep] =
    useState<ShopStepModel["focusingStep"]>("");

  const findNextstep = (): ShopStepModel["focusingStep"] => {
    const data: ConfirmationItemModel[] = [
      { title: "number", isPassed: false, priority: 0, isNextStep: false },
      { title: "email", isPassed: false, priority: 1, isNextStep: false },
      {
        title: "nationalCode",
        isPassed: false,
        priority: 2,
        isNextStep: false,
      },
      { title: "shopName", isPassed: false, priority: 3, isNextStep: false },
    ];

    if (user?.number) data[0].isPassed = true;
    if (user?.email) data[1].isPassed = true;
    if (user?.national_id) data[2].isPassed = true;
    data[3].isPassed = user?.has_shop;

    // Sort the data array
    data.sort((a, b) => {
      if (a.isPassed === b.isPassed) {
        return a.priority - b.priority; // Sort by priority if isPassed is the same
      }
      return a.isPassed ? -1 : 1; // Sort isPassed: true first
    });

    const nextStepIndex = data.findIndex((item) => !item.isPassed);
    if (nextStepIndex !== -1) data[nextStepIndex].isNextStep = true;

    // Return the title of the first element with isNextStep: true
    const nextStepItem = data.find((item) => item.isNextStep);
    return nextStepItem ? nextStepItem.title : ""; // Return title or null if not found
  };

  const nextStep = findNextstep();

  return (
    <ShopStepContext.Provider
      value={{ currentStep: nextStep, focusingStep, setFocusingStep }}
    >
      {children}
    </ShopStepContext.Provider>
  );
};

export default ShopStepProvider;
