import {ButtonHTMLAttributes, ReactNode} from "react";
import s from './SuperButton.module.css'

// type SuperButtonProps = {
//     onClick: () => void
//     color: string
//     color2: string
//     title?: string
//     children?: ReactNode
// };

type ColorProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    backGround?: string
} & Omit<ColorProps, 'color4' | 'color5'>

export const SuperButton = (props: SuperButtonProps) => {
    const {
        color,
        children,
        title,
        onClick,
        className,
        disabled,
        // ...restProps
    } = props

    // console.log(restProps.color2)


    // const finalClassName = s.button
    //     + (disabled
    //             ? ' ' + s.disabled
    //             : color === 'red'
    //                 ? ' ' + s.red
    //                 : color === 'secondary'
    //                     ? ' ' + s.secondary
    //                     : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName= s.button + ' ' + s.red


    // const finalClassName = `
    // ${s.button}
    // ${color === 'red' ? s.red : s.secondary}
    // ${disabled ? s.disabled : ''}
    // `

    const finalClassName = `
    ${s.button}
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
    `

    return (
        <button
            /*{...restProps}*/
            // className={className}
            className={finalClassName}
        >
            {children}
        </button>
    );
};
