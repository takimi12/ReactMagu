import { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

export const HookUseClickOutsideHook = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();



    useClickOutside(ref, () => setIsOpen(false));

    return (
        <div className="main">
            <h1 className="title">Custom Hooks</h1>
            <div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Close' : 'Open'} Dropdown
                </button>

                {isOpen && (
                    <div ref={ref} style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
                        <p>This is a Dropdown menu. Click outside to close it!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
