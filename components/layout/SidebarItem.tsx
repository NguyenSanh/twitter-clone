import { IconType } from 'react-icons';

interface SidebarItemProps {
    label: string;
    href: string;
    icon: IconType;
    onClick?: () => void;
}

// THis functional is of type React.FC<SidebarItemProps> and takes SidebarItemsProps as its props
const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon, // adds an 'alias' so we can use it as a component
    onClick
}) => {
    return ( 
        <div className='flex flex-row items-center'>
            {/*
            p-4 class adds 4 units padding to all sides
            hover:bg-slate-300 sets background color to slate-300 when hoverd over
            hover:bg-opacity-10 sets opacity to 10 when hovered over
            lg:hidden hides this element when screen is at a certain large width
            */}
            <div className="
                relative
                rounded-full
                h-14
                w-14 
                flex
                items-center
                justify-center
                p-4
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
                lg:hidden"
            >
                <Icon size={28} color="white"/>
            </div>
            <div
                /*
                'hidden' hides this element by default
                'lg:flex' makes element visible when screensize reaches lg size
                'gap-4' adds gap spacing between child elements in flex container
                 */
                className='
                    relative
                    hidden
                    lg:flex
                    items-center
                    gap-4
                    p-4
                    rounded-full
                    hover:bg-slate-300
                    cursor-pointer
                '
            >
                <Icon size={24} color="white"/>
                {/* lg:block sets element as block-level display when lg width is reached */}
                <p className='hidden lg:block text-white text-xl'>
                    {label}
                </p>

            </div>
        </div> 
    );
}
 
export default SidebarItem;
