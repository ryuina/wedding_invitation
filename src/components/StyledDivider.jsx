import { Divider } from "antd";
import React from "react";


export default function StyledDivider({ children }) {
    return (
        <Divider style={{ marginTop: 32, marginBottom: 32, padding: "0 16px" }} plain>
            {children}
        </Divider>
    )
}
