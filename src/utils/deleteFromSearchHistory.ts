"use client";

import SaveInSearchHistory from "./saveInSearchHistory";

const DeleteFromSearchHistory = (item: string) => {
    const searchHistory = SaveInSearchHistory() || [];
    const itemIndex = searchHistory.indexOf(item);

    if (itemIndex !== -1) { 
        searchHistory.splice(itemIndex, 1);
    }

    localStorage.setItem("search-history", JSON.stringify(searchHistory));
    return searchHistory
};

export default DeleteFromSearchHistory;
