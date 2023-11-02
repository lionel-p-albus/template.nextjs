'use client';

import React, {ReactNode} from "react";
import {Provider} from "mobx-react";
import {allStore} from "@/stores/AllStore";
import Template from "@/shared/layouts";
import StyledComponentsRegistry from "@/shared/lib/antd-registry";

import '../styles/base.scss';
import '../styles/globals.scss';

interface RootLayout {
    children: ReactNode;
}

export default function RootLayout({children}: RootLayout) {
    return (
        <html lang="en">
        <body>
        <Provider {...allStore}>
            <StyledComponentsRegistry>
                <Template>{children}</Template>
            </StyledComponentsRegistry>
        </Provider>
        </body>
        </html>
    );
}
