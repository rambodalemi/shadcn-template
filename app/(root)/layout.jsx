import Cta from "@/components/shared/cta";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/nav";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="w-full my-16 justify-center grid">
        <div className="p-2 sm:p-4 space-y-4 sm:space-y-6 relative overflow-x-clip">
          {children}
          <Cta />
        </div>
      </div>
      <Footer />
    </div>
  );
}
