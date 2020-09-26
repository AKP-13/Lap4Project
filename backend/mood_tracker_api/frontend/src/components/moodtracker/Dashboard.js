import React, { Fragment } from 'react';
import Form from './Form';
import Moods from './Moods'

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Moods />
        </Fragment>
    )
}
