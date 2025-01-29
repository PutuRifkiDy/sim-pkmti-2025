import { useState, useEffect } from "react";
import { InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function ToastError({ content }) {
    const [closed, setClosed] = useState(false);
    const time = 300;
    const [remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => Math.max(prevTime - 1, 0));
        }, 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (remainingTime <= 0) {
            const timeout = setTimeout(() => {
                setClosed(true);
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [remainingTime]);

    const closeToast = () => setClosed(true);

    if (closed) return null;

    const progress = ((time - remainingTime) / time) * 100;

    return (
        <div className="toast lg:toast-top lg:toast-end toast-bottom toast-center z-50">
            <div role="alert" className="alert alert-error">
                <InformationCircleIcon className="h-6 w-6 hidden lg:block" />

                <div className="me-10">
                    <div className="text-[14px] text-left">{content}</div>
                    <progress
                        className="progress w-56 progress-secondary"
                        value={progress}
                        max="100"
                    ></progress>
                </div>

                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5"
                    onClick={closeToast}
                >
                    <XCircleIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}
