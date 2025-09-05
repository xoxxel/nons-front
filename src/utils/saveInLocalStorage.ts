"use client";

const SaveInLocalStorage = (title:string,item?: string, limit?: number) => {
  const savedValues: string[] = localStorage.getItem(title)
    ? JSON.parse(localStorage.getItem(title) as string)
    : [];
  if (item && limit) {
    if (!savedValues?.includes(item)) {
      if (savedValues?.length >= limit) savedValues?.pop();
      localStorage.setItem(
        title,
        JSON.stringify([item, ...savedValues])
      );
    } else {
      const itemIndex = savedValues?.indexOf(item);
      savedValues?.splice(itemIndex, 1);
      localStorage.setItem(
        title,
        JSON.stringify([item, ...savedValues])
      );
    }
  } else return savedValues;
};

export default SaveInLocalStorage;
