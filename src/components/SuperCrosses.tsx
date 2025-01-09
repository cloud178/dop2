import {CrossesType} from "../App";
import {ReactNode} from "react";

type Props = {
    crosses: CrossesType[]
    children: ReactNode
};

export const SuperCrosses = ({crosses, children}: Props) => {
    return (
        <div>
            <ul>
                {crosses.map( crosse => {
                    return (
                        <li
                            key={crosse.id}
                        >
                            <div>{crosse.id}</div>
                            <div>{crosse.size}</div>
                            <div>{crosse.model}</div>
                        </li>
                    )
                } )}
            </ul>
            {children}
            <hr/>
        </div>
    );
};
