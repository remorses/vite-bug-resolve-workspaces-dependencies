import React from 'react'
import { merge } from 'smoldash/dist/esm/index'

export const SomeComponent = ({}) => {
    return (
        <pre>
            {JSON.stringify(merge({ merge: true }, { SomeComponent: true }))}
        </pre>
    )
}
