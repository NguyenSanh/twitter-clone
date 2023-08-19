import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
    const router = useRouter();
    return ( 
        /* Clicking on this SidebarTweet Feather Icon Button redirects user to home page  */
        <div onClick={ () => router.push('/')}>
            <div
                /* 
                mt-6 adds 1.5rem of margin-top, 1 unit=0.25rem 
                lg:hidden hides this div holding FaFetaher icon when screen is large size
                */
                className="
                     mt-6
                     lg:hidden
                     rounded-full
                     h-14
                     w-14
                     p-4
                     flex
                     items-center   
                     justify-center
                     bg-sky-500
                     hover:bg-opacity-80
                     transition
                     cursor-pointer
                "
            >
                <FaFeather size={24} color="white" />

            </div>
            <div
                /* 
                    'px-4' adds 1rem horizontal padding to the left/right sides 
                    'py-2' adds 0.5rem vertical padding to the top/bottom sides
                    'hidden' hides this div until 'lg:block" makes it visible
                    'lg:block" sets its display tp a block-level element
                */
                className="
                    mt-6
                    hidden
                    lg:block
                    px-4
                    py-2
                    rounded-full
                    bg-sky-500
                    hover:bg-opacity-90
                    cursor-pointer
                    transition
                "
            >
                {/* 'text-center' centers text horizontally */}
                <p className="
                    hidden
                    lg:block
                    text-center
                    font-semibold
                    text-white
                    text-[20px]
                ">
                    Tweet
                </p>

            </div>
        </div> 
    );
}
 
export default SidebarTweetButton;