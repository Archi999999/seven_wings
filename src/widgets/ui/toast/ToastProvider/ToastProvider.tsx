import {Slide, ToastContainer} from "react-toastify";

import { ToastCloseButton } from '../ToastCloseButton/ToastCloseButton'

import style from './ToastContainer.module.scss'

export const ToastProvider = () => {
    return (
        <ToastContainer
            autoClose={50000}
            closeButton={<ToastCloseButton />}
            closeOnClick
            draggable={false}
            hideProgressBar
            icon={false}
            toastClassName={style.toast}
            newestOnTop
            pauseOnFocusLoss={false}
            pauseOnHover
            position="bottom-left"
            rtl={false}
            theme="colored"
            transition={Slide}
        />
    )
}
