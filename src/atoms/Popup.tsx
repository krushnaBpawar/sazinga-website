import React, { useEffect } from 'react';

interface PopupProps {
    handleClose: () => void;
    show: boolean;
}

const Popup: React.FC<PopupProps> = ({ handleClose, show }) => {
    const showHideClassName = show ? 'fixed inset-0 flex items-center justify-center z-[100] px-5 ' : 'hidden';

    const openLink = () => {
        window.open('https://merchantriskcouncil.org/events/2024/empowering-financial-growth-mastering-finance-back-office-automation', '_blank');
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const popupContent = document.getElementById('popupContent');
            if (show && popupContent && !popupContent.contains(event.target as Node)) {
                handleClose();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show, handleClose]);

    return (
        <div className={showHideClassName}>
            <div className="fixed inset-0 opacity-10 bg-[#8f8e8e]"></div>
            <section className="shadow-[0_3px_15px_rgb(0,0,0,0.3)] rounded-md relative w-full md:w-2/3 max-w-[600px]">
                <div className="flex items-center justify-center h-full">
                    <img
                        src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_PRODUCTION}/c59d5ff58cdcc8b09b85e9b112890faff518486d-600x400.jpg`}
                        className='w-full h-auto'
                        alt='image'
                        onClick={openLink} // Add onClick handler to open the link
                    />
                    <div onClick={handleClose} className="absolute top-[-10px] p-1 right-[-8px] bg-black border-white border rounded-full cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Popup;
