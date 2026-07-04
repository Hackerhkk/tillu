import Usernav from "@/components/ui/Usernav";

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Usernav/>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}