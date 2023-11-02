'use client';

import {useState} from "react";
import {Menu, MenuProps, Image, Button} from "antd";
import {SearchOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        label: 'Home Page',
        key: 'home',
    },
    {
        label: 'Ticket Management',
        key: 'ticket-management',
    },
    {
        label: 'Reports',
        key: 'report',
    },
];

const AppNav = () => {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>
            {/*<image*/}
            {/*    width={300}*/}
            {/*    height={'150%'}*/}
            {/*    src={'/assets/logo.png'}*/}
            {/*    // preview={false}*/}
            {/*/>*/}
            <Button
                type="link"
                style={{width: '104px', height: '37px'}}
                icon={<Image preview={false} src={'/assets/logo.png'} alt="logo" />}
                href='/'
            />
            <Menu
                style={{minWidth: '50rem', background: 'transparent', borderBottom: 'none', paddingLeft: '72px'}}
                mode="horizontal"
                selectedKeys={[current]}
                items={items}
                onClick={onClick}
            />
        </>
    );
}

export default AppNav;
