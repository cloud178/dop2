import React, {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {SuperButton} from "./components/SuperButton";
import styles from './components/SuperButton.module.css'


function App() {
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

            <SuperButton color={'red'}>Red SuperButton</SuperButton>
            <SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>
            <SuperButton>Default SuperButton</SuperButton>
            <SuperButton disabled>Disabled SuperButton</SuperButton>

        </div>
    );
}


export default App;
