import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
    label: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
    /* Routers are typically used for single-page application 
        - entire app resides on a single HTML page
        - content is dynamically updated as users navigate routes
        - Faster navigation, browser soes not need to reload entire page
        - Fewer server requests, content is often fetched once and updated dynamically 
     */
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return ( 
        /* 'border-b-[1px] sets a border bottom of 1px  */
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className=" flex flex-row items-center gap-2">
                {
                    /* If the optional showBackArrow prop is true, 
                    then render the <BiArrowBack> component.
                    Otherwise, it stays hidden.  */
                    showBackArrow && (
                        <BiArrowBack
                            onClick = {handleBack}
                            color = "white"
                            size={20}
                            className="
                                cursor-pointer
                                hover:opacity-70
                                transition
                            "
                        />
                    )
                }
                <h1 className="text-white text-xl font-semibold">{label}</h1>

            </div>
        </div> 
    );
}
 
export default Header;<div>
</div>