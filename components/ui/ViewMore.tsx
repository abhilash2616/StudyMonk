"use client"
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
function ViewMore() {
    return (
        <>
            <button className="group relative p-4 leading-tight rounded-full border border-[#003C79] text-[#003C79] flex items-center justify-center transition-all duration-300 overflow-hidden hover:bg-[#003C79] hover:cursor-pointer">
                <span className="group-hover:opacity-0 transition-opacity duration-200 text-center">
                    View<br />More
                </span>
                <CallMadeOutlinedIcon
                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-6 h-6 text-white"
                />
            </button>
        </>
    );
}

export default ViewMore;