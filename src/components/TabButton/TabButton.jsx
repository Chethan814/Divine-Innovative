/* eslint-disable react/prop-types */
function TabButton({ children, onSelect }) {
    return <button onClick={onSelect} className="inline-block rounded-sm border border-[#E484CB] px-12 py-3 m-4 w-60 font-gilroy-semibold text-sm  text-[#E484CB] hover:bg-[#E484CB] hover:text-white focus:ring-3  ">{children}</button>;
}


export default TabButton;