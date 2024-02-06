import { useAppDispatch, useAppSelector } from "../store/storeHook";
import { useEffect, useState } from "react";
import {
  fetchAdventureBooks,
  fetchThrillerBooks,
} from "../store/reducer/BookReducer";
export default function useHome() {
  const dispatch = useAppDispatch();
  const [showMore, setShowMore] = useState<number>(6);
  const thrillerBooks = useAppSelector((state) => state.book.thrillerBooks);
  const adventureBooks = useAppSelector((state) => state.book.AdventureBooks);
  const recommendedBooksLoading = useAppSelector((state) => state.book.loading);
  const bestBooksLoading = useAppSelector((state) => state.book.loading);

  useEffect(() => {
    dispatch(fetchThrillerBooks());
    dispatch(fetchAdventureBooks());
  }, [dispatch]);

  useEffect(() => {
    setShowMore(6);
  }, []);
  const handleShowMore = () => {
    if (showMore === 6) {
      setShowMore(showMore + 6);
    } else {
      setShowMore(6);
    }
  };
  return {
    handleShowMore,
    bestBooksLoading,
    recommendedBooksLoading,
    adventureBooks,
    thrillerBooks,
    setShowMore,
    showMore,
  };
}
