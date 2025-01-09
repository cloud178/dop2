import React, {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {SuperButton} from "./components/SuperButton";
import styles from './components/SuperButton.module.css'
import {SuperCrosses} from "./components/SuperCrosses";

export type CrossesType = {
    id: number
    model: string
    size: string
}

function App() {
    const crosses: CrossesType[] = [
        {id: 1, model: "ADIDAS", size: "XXX"},
        {id: 2, model: "ABIBAS", size: "YYY"},
        {id: 3, model: "PUMA", size: "ZZZ"},
    ]

    return (
        <div>
            {/*<SuperButton*/}
            {/*    onClick={()=>{}}*/}
            {/*    className={styles.redForSuperButton}*/}
            {/*>*/}
            {/*    Red super Button*/}
            {/*</SuperButton>*/}

            {/*<SuperButton*/}
            {/*    onClick={()=>{}}*/}
            {/*    className={styles.blueForSuperButton}*/}
            {/*>*/}
            {/*    Blue super Button*/}
            {/*</SuperButton>*/}

            {/*<SuperButton color={'red'}>Red SuperButton</SuperButton>*/}
            {/*<SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*<SuperButton>Default SuperButton</SuperButton>*/}
            {/*<SuperButton disabled>Disabled SuperButton</SuperButton>*/}










            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>A lot of different spam</div>*/}
            {/*    <div>A lot of different spam</div>*/}
            {/*    <div>A lot of different spam</div>*/}
            {/*    <div>A lot of different spam</div>*/}
            {/*    <div>A lot of different spam</div>*/}
            {/*    <SuperButton color={'red'}>Red SuperButton</SuperButton>*/}
            {/*    <SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*    <SuperButton>Default SuperButton</SuperButton>*/}
            {/*    <SuperButton disabled>Disabled SuperButton</SuperButton>*/}
            {/*</SuperCrosses>*/}
            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>A lot of different spam</div>*/}
            {/*    <div>A lot of different spam</div>*/}
            {/*    <SuperButton color={'red'}>Red SuperButton</SuperButton>*/}
            {/*    <SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*</SuperCrosses>*/}
            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <SuperButton disabled>Disabled SuperButton</SuperButton>*/}

            {/*</SuperCrosses>*/}




            <Modal>
                <p>Confident Information</p>
                <input type={'email'} placeholder={'email'}/>
                <input type={'password'} placeholder={'pass'}/>
                <input type={'password'} placeholder={'pass'}/>
                <label><input type={'checkbox'}/>I agree</label>
                <SuperButton>send</SuperButton>
            </Modal>

            {/*<Modal>*/}
            {/*    <input type={'email'} placeholder={'email'}/>*/}
            {/*    <input type={'password'} placeholder={'pass'}/>*/}
            {/*    <SuperButton>send</SuperButton>*/}
            {/*</Modal>*/}

        </div>
    );
}


export default App;
