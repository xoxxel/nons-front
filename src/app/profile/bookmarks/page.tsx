import { fetchUserProductBookmarks } from "@/api/data";
import Bookmarks from "@/components/profile/bookmarks";
import MobileBookmarks from "@/components/profile/bookmarks/mobileBookmarks";
import ProductModel from "@/models/Product";

const BookmarksPage = async () => {
  const bookmarks = await fetchUserProductBookmarks();
  return (
    <>
      <Bookmarks bookmarks={bookmarks?.results} />
      <MobileBookmarks bookmarks={bookmarks?.results} />
    </>
  );
};

export default BookmarksPage;
