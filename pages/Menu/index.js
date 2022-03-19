
import Link from 'next/link';
import { Fragment } from 'react'

function MenuPage() {
    return (
        <Fragment>
            <h1>
                The Menu Page
            </h1>
            <ul>
                <li>
                    <Link href> '/menu/drinks'
                        Drinks
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
}
export default MenuPage;