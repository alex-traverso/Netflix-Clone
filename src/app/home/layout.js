import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

export default async function HomeLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto sm:px-6 lg:px-20">{children}</main>
    </>
  );
}
