/* Importing useRouter hook */
import { useRouter } from "next/router";

/* Importing BsTwitter icon from the react-icons library */
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
    /* useRouter hook is used to access a router object in any function */
    const router = useRouter();

    return ( 
        /* 
        'rounded-full' makes the element have fully rounded corners, creating a circular shape
        'h-14' sets height to 14
        'w-4' sets width to 14
        'p-4' sets 4 units of padding to all sides of the element
        'flex' makes an element a flex container with direction row
        'justify-center' centers flex-items horizontally
        'items-center' centers flex-items vertically
        'hover:bg-blue-300' sets background color to blue when hovered over
        'hover:bg-opacity-10' reduces opacity to 10 when hovered over
        'cursor-pointer' sets cursor to a pointer when hovering over this div element
        'transition' adds a smooth transition effect when ......

        router.push('/') updates browser URL to '/' without reloading page
        */

        <div 
            onClick={() => router.push('/')}
            className="
            rounded-full 
            h-14 
            w-14 
            p-4 
            flex 
            items-center 
            justify-center 
            hover:bg-blue-300 
            hover:bg-opacity-10 
            cursor-pointer 
            transition">
            {/* Insert Twitter icon from react-icons library */}
            <BsTwitter size={30} color="white"/>

        </div>
     );
}
 
export default SidebarLogo;