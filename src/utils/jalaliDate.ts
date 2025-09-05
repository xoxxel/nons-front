import moment from "jalali-moment";

const jalaliDate = (date: Date | string, format: string) => {
  moment.locale("fa");
  try {
    const jalali = moment
      .from(`${date}`?.replaceAll("-", "/"), "en", "YYYY-MM-DD HH:mm")
      ?.format(format);
    return jalali;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export default jalaliDate;
