import React from 'react'

export default function AbsoluteWrapper({ children }) {
    return (
        <div className="position-absolute w-100">
            {children}
        </div>
    )
}
