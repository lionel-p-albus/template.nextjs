'use client';

import {useEffect} from "react";
import ResizeDetector from "react-resize-detector";

import cx from 'classnames';
import Loader from "react-loaders";
import AppHeader from "@/shared/layouts/app-header";

interface TemplateProps {
    children?: any;
}

const Template = (props: TemplateProps) => {
    useEffect(() => init(), []);

    const init = () => {
        (document.getElementById('preloader') as HTMLElement).style.display = 'none';
    }

    return (
        <ResizeDetector
            handleWidth
            render={({width}) => (
                <div className={cx(
                    'app-container app-theme-white',
                    {'fixed-header': true},
                    {'fixed-sidebar': true},
                    {'fixed-footer': true},
                    {'closed-sidebar': (width ?? 0) < 1250},
                    {'body-tabs-shadow-btn': true}
                )}
                >
                    <>
                        <div id='preloader'>
                            <div className='preloader-with-icon d-flex justify-content-center align-items-center'>
                                <Loader type='ball-spin-fade-loader' active/>
                            </div>
                        </div>

                        <AppHeader/>
                        <div className='app-main'>
                            <div className='app-main__outer'>
                                <div className='app-main__inner'>
                                    <div className='TabsAnimation'>
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            )}
        />
    );

}

export default Template;
