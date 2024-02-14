"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navigation.module.css"

export default function Navigation(){
    const path= usePathname();
    //usePathname 은 오직 client component 에서만 작동한다. 
    // use client라는 문구를 파일상단에 추가해야 한다. 
      
    return (
      <nav className={styles.nav}>
        <ul> 
          <li>
            <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
          </li>
          <li>
            <Link href="/about-us">About us</Link> {path === "/about-us" ? "🔥" : ""}
          </li>
        </ul>
      </nav>
    );
}