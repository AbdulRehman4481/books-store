import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/storeHook";
import {
  fetchAdventureBooks,
  fetchThrillerBooks,
} from "../store/reducer/BookReducer";
import { useParams } from "react-router-dom";
import { fetchSearchBooks } from "../store/reducer/SearchReducer";
export default function useBookDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const thrillerBooks = useAppSelector((state) => state.book.thrillerBooks);
  const adventureBooks = useAppSelector((state) => state.book.AdventureBooks);
  const searches = useAppSelector((state) => state.searches.searchBooks);

  useEffect(() => {
    dispatch(fetchThrillerBooks());
    dispatch(fetchAdventureBooks());
    if (id) {
      dispatch(fetchSearchBooks(id));
    }
  }, [dispatch, id]);

  const selectedBook = [...thrillerBooks, ...adventureBooks, ...searches].find(
    (book) => book.id === id
  );

  return {
    thrillerBooks,
    adventureBooks,
    searches,
    selectedBook,
  };
}
