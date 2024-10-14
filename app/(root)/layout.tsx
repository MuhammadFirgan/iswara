import MobileNav from "@/components/shared/MobileNav";
import Search from "@/components/shared/Search";
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";


export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className="relative">
      <div className="flex">
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <section className='flex min-h-screen w-full max-md:pb-14 flex-col relative z-500'>
          <div className="flex w-full justify-between items-center gap-3 px-8 py-6">
            <Search />
            {/* <div >
            </div> */}

            <div className="flex items-center gap-3 relative">
              <div className="md:hidden">
                <MobileNav />
              </div>
              <Topbar />
            </div>
          </div>

          {children}
         
        </section>
      </div>
    </main>
   
  )
}
