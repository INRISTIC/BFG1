import React, { useState, useEffect } from "react";
import s from "./BtnScrollUp.module.css"
import {ReactComponent as Arrow} from "../../assets/images/arrow-top.svg"

const BtnScrollUp = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={s.topToBtm}>
            {" "}
            {showTopBtn && (
                <Arrow
                    className={s.iconPosition + ' ' + s.iconStyle}
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default BtnScrollUp;