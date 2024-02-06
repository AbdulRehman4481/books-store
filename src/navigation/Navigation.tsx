import { Route, Routes } from "react-router-dom";
import Home from "../page/home/Home";
import BookDetail from "../page/bookDetail/BookDetail";
import Search from "../page/search/Search";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DetailFooter from "../components/footer/DetailFooter";
export default function Navigation() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <DetailFooter />
      <Footer />
    </>
  );
}
