import { auth } from "@/auth";
import AuthPanel from "@/components/auth-panel";
import DashbordLink from "@/components/dashbord-link";
import NavLink from "@/components/nav-link";

interface DashbordLayoutProps {
  children: React.ReactNode;
}
export default async function DashbordLayout({
  children,
}: DashbordLayoutProps) {
  const session = await auth();
  return (
    <div className="min-h-screen">
      {/* Dashbord Layout*/}
      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-200 min-h-96">
          <nav className="p-4 space-y-2 flex flex-col text-center">
            <DashbordLink href="/dashbord" name="Overview" />
            <DashbordLink href="/dashbord/profile" name="Profile" />
            <DashbordLink href="/dashbord/setting" name="Setting" />
          </nav>
        </div>
        {/* Main content*/}
        <div className="flex-1 p-6">{children}</div>
      </div>
      <div className="mx-auto max-w-7xl">
        {/*Debug Panel*/} <AuthPanel session={session} />
      </div>
    </div>
  );
}
