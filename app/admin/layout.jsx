import AdminNav from "@/components/ui/Adminnav";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav/>

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}