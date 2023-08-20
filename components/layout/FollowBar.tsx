const FollowBar = () => {
    return ( 
        <div className="px-6 py-4 hidden lg:block">
            {/* 'bg-neutral-800' sets background color  
                'rounded-xl' rounds this div's corners to a largr degree of xl
                'p-4' adds 1rem padding to all sides of the div           
            */}
            <div className="bg-neutral-800 rounded-xl p-4">
                <h2 className=" text-white text-xl font-semibold">
                    Let's Follow People!
                </h2>
                <div className="flex flex-col gap-6 mt-4">
                    {/* TODO USER LIST  */}
                </div>
            </div>
        </div> 
    );
}
 
export default FollowBar;