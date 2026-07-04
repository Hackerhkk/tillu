"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Shield,
  Trash2,
  LogOut,
  UserPlus,
  UserCog,
} from "lucide-react";

export default function AdminPage() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
  });

  const fetchUsers = async () => {
    setLoading(true);

    const res = await fetch("/api/users");
    const data = await res.json();

    if (res.ok) {
      setUsers(data.users);

      setStats({
        totalUsers: data.users.filter((u) => u.role === "USER").length,
        totalAdmins: data.users.filter((u) => u.role === "ADMIN").length,
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
  const deleteUser = async (id) => {
    await fetch(`/api/users?id=${id}`, { method: "DELETE" });
    fetchUsers();
  };

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  const impersonateUser = async (id) => {
    await fetch("/api/impersonate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id }),
    });

    window.location.href = "/dashboard";
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-2">
          <Shield className="text-cyan-600 w-6 h-6" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>

        

      </div>

      {/* ANALYTICS */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <div className="bg-white/70 backdrop-blur-xl border rounded-2xl shadow p-6">
          <div className="flex items-center gap-2 text-slate-600">
            <Users className="w-5 h-5" />
            <h2>Total Users</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{stats.totalUsers}</p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border rounded-2xl shadow p-6">
          <div className="flex items-center gap-2 text-slate-600">
            <UserCog className="w-5 h-5" />
            <h2>Total Admins</h2>
          </div>
          <p className="text-3xl font-bold mt-2">{stats.totalAdmins}</p>
        </div>

      </div>

     

      {/* USERS TABLE */}
      <div className="bg-white/70 backdrop-blur-xl border rounded-2xl shadow p-6">

        <h2 className="text-xl font-semibold mb-4">Users List</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-slate-50">

                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.role}</td>

                    <td className="p-3 flex gap-2">

                      <button
                        onClick={() => deleteUser(user.id)}
                        className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-xl"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>

                      <button
                        onClick={() => impersonateUser(user.id)}
                        className="flex items-center gap-1 bg-purple-600 text-white px-3 py-1 rounded-xl"
                      >
                        Login as User
                      </button>

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>

    </main>
  );
}