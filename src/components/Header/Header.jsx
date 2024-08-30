"use client"
import Link from 'next/link'
import style from './Header.module.scss'
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const scrollToAnchor = (anchorId) => {
        const element = document.getElementById(anchorId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const onLinkClick = (anchorId) => {
        toggleMenu();
        scrollToAnchor(anchorId);
    }
    return (<header className={style.header}>
        <div className={`${style.header__container}`}>
            <div className={style.logo__box}>
                <a href="#"><Image src="/images/logo.svg" alt="Rocket Casino logo" className="logo" width={114} height={44}/></a>
            </div>
            <div className={`${isOpen ? style.burgerMenu__active : ''}`}>
                <button className={`${style.burgerMenu__button}`} onClick={() => toggleMenu()} aria-label="button menu">
                    <span className={style.burgerMenu__lines}></span>
                </button>
                <nav>
                    <ul className={`${style.burgerMenu__nav} ${isOpen ? '' : style.isClose}`}>
                        <li>
                            <Link className={`${style.link} ${pathname === '/#main' ? style.active : ''}`}
                                  href='/#main' onClick={() => onLinkClick("main")}>Main</Link>
                        </li>
                        <li><
                            Link className={`${style.link} ${pathname === '/#games' ? style.active : ''}`}
                                 href='/#games' onClick={() => onLinkClick("games")}>Games</Link>
                        </li>
                        <li>
                            <Link className={`${style.link} ${pathname === '/#bonuses' ? style.active : ''}`}
                                  href='/#bonuses' onClick={() => onLinkClick("bonuses")}>Bonuses</Link>
                        </li>
                        <li>
                            <Link className={`${style.link} ${pathname === '/#mobile' ? style.active : ''}`}
                                  href='/#mobile' onClick={() => onLinkClick("mobile")}>Mobile version</Link>
                        </li>
                        <li>
                            <Link className={`${style.link} ${pathname === '/#signin' ? style.active : ''}`}
                                  href='/#signin' onClick={() => onLinkClick("signin")}>Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>)
}