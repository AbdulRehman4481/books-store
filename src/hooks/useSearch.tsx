import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/storeHook";
import { fetchSearchBooks } from "../store/reducer/SearchReducer";

export default function useSearch() {
    const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showMore, setShowMore] = useState<number>(9);
  const dispatch = useAppDispatch();
  const searches = useAppSelector((state) => state.searches.searchBooks);
  const searchesLoading = useAppSelector((state) => state.searches.loading);

  useEffect(() => {
    setError(null);
    dispatch(fetchSearchBooks(search.trim()))
      .then(() => setError(null))
      .catch((err) => setError(err.message || "An error occurred"));
  }, [dispatch, search]);

  useEffect(() => {
    setShowMore(9);
  },[]);

  const handleShowMore = () => {
    if (showMore === 9) {
      setShowMore(showMore + 9);
    } else {
      setShowMore(9);
    }
  };
  return {
    handleShowMore,
    searchesLoading,
    searches,
    showMore,
    error,
    setSearch,
    search
  };
}
