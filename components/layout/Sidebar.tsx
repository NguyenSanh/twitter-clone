/* Import icons from React-Icons */
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

/* Import SidebarLogo component */
import SidebarLogo from './SidebarLogo';

const Sidebar = () => {

    // Create an array of objects:
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: "/users/123",
            icon: FaUser
        }
    ]

    return ( 
        /*
        col-span-{n} makes an element span n columns
        h-full sets the element's height to be 100% of its parent's height
        pr-4 (padding-right) class sets 4 padding to the right side of the element
        md:pr-6 class applies additional 6 padding to the right when 'md' screen-with is reached
        */
        <div className="col-span-1 h-full pr-4 md:pr-6">
            {/* 
            'flex' class applies flexbox styling to the element 
            'flex-col' class sets the flex direction to column
            'items-end' aligns flex items to the end of the cross axis (horizontal in this case)
            */}
            <div className='flex flex-col items-end'>
                {/* 
                'space-y-2' sets margin-top to 0.5rem (4px)
                'lq:w-[230px] sets width of element to 230px when screen width is at least lg breakpoint, lg targets larger screens
                */}
                <div className='space-y-2 lg:w-[230px]'>
                    <SidebarLogo />
                </div>

            </div>

        </div>
    );
}
 
export default Sidebar;