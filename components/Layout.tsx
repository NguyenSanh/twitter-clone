import Sidebar from "./layout/Sidebar";

/* No idea what this interface thing is doing */
interface LayoutProps {
    children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    return ( 
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
                <div className="grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className="col-span-3 lg:col-span border-x-[1px] border-neutral-800">
                        {children}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;