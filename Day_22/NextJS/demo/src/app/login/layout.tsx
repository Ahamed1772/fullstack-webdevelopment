import { ReactNode } from "react";
import Link from "next/link";

const Layout = ({children}:{children: ReactNode}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Login Main</Link>
                </li>
                <li>
                    <Link href='/login/loginuser'>Login User</Link>
                </li>
                <li>
                    <Link href='/login/loginadmin'>Login admin</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}

export default Layout;