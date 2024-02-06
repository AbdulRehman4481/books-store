import heartLogo from "../../assets/images/Heart.png"

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div >
        <div className="flex justify-center"><img src={heartLogo} alt="" /></div>
        <div>
          <p className="text-center py-2 text-base text-slate-500 font-semibold">Copyright &copy; {year} . Crafted with Love</p>
        </div>
      </div>
    </>
  );
}
