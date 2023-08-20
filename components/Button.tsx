/* 
Type Saftey: An interface enforces a specific contract for what type of props 
a component should receive. 

Documentation: An interface givs documentation for others when using a componenet
that accepts props of a certain type of interface.
*/
interface ButtonProps {
    label: string;
    secondary?: boolean; // ? means that this prop is optional
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    label, secondary, fullWidth, large, onClick, disabled, outline 
}) => {
    return ( 
        <button
            disabled = {disabled}
            onClick = {onClick}
            className= {`
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-full
                font-semibold
                hover:opacity-80
                transition
                border-2 
                ${fullWidth ? 'w-full' : 'w-fit'}
                ${secondary ? 'bg-white' : 'bg-sky-500'}
                ${secondary ? 'text-black' : 'text-white'}
                ${secondary ? 'border-black' : 'border-sky-500'}
                ${large ? 'text-xl' : 'text-md'}
                ${large ? 'px-5' : 'px-4'}
                ${large ? 'py-3' : 'py-2'}
                ${outline ? 'bg-transparent' : ''}
                ${outline ? 'border-white' : ''}
                ${outline ? 'text-white' : ''}
            `}
        >

        </button>
     );
}
 
export default Button;