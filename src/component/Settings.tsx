import React, { useContext } from 'react'
import { observer } from 'mobx-react';
import { Button, Typography } from '@material-ui/core';
import ContextApp from './ContextApp';

const Settings = observer(() => {
    const context = useContext(ContextApp)
    context.testowy = "aaa"
    return (
        <>
            <Typography>{context.testowy}</Typography>
            <Typography>Text</Typography>
            <Button
                onClick={() => {
                    console.log("Settings -> onClick", context.testowy)
                }}>
                gert
            </Button>
            <Button
                onClick={() => {
                    context.setTestowy("fdfdfdsfds")
                    console.log("Settings -> onClick", context.testowy)
                }}>
                Set
            </Button>
        </>
    )
})

export default Settings;