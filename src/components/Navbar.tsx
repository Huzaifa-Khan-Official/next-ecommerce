import Link from "next/link";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILe */}
      <Link href="/">E-Store</Link>
      <Menu />
    </div>
  )
}