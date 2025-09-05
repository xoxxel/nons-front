"use client";

const SaveInSearchHistory = (item?: string, limit?: number) => {
  const searchHistory: string[] = localStorage.getItem("search-history")
    ? JSON.parse(localStorage.getItem("search-history") as string)
    : [];
  if (item && limit) {
    if (!searchHistory?.includes(item)) {
      if (searchHistory?.length >= limit) searchHistory?.pop();
      localStorage.setItem(
        "search-history",
        JSON.stringify([item, ...searchHistory])
      );
    } else {
      const itemIndex = searchHistory?.indexOf(item);
      searchHistory?.splice(itemIndex, 1);
      localStorage.setItem(
        "search-history",
        JSON.stringify([item, ...searchHistory])
      );
    }
  } else return searchHistory;
};

export default SaveInSearchHistory;
