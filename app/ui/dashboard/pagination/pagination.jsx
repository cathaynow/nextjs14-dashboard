"use client";
import style from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={style.container}>
      <button
        className={style.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        이전
      </button>
      <button
        className={style.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
