import Link from "next/link";
import style from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p>Copyright &copy; DJ Event 2021</p>
            <p>
                <Link href="/about">About Us</Link>
            </p>
        </footer>
    )
}
