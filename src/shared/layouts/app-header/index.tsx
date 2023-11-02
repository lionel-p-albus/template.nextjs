'use client';

import cx from "classnames";
import AppNav from "@/shared/layouts/app-nav";

const AppHeader = () => {
    return (
        <>
            <div className={cx('app-header', {'header-shadow': true})}>
                <div className={cx('app-header__content')}>
                    <div className="app-header-left">
                        <AppNav/>
                    </div>
                    <div className="app-header-right">
                        {/*<Notification/>*/}
                        {/*<UserAccount userName={userName}/>*/}
                        <label>right</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppHeader;
