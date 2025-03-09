/* eslint-disable react/prop-types */
function TabButton({ children, onSelect }) {
    return <button onClick={onSelect} className="border-none px-2 py-1 rounded-md w-full">{children}</button>;
}


export default TabButton;