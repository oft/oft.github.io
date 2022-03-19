import { SlTabGroup,SlTab, SlTabPanel } from "@shoelace-style/shoelace/dist/react";

export default function(){
    return (
        <SlTabGroup>
            <SlTab slot="nav" panel="general">
                预览
            </SlTab>
            <SlTab slot="nav" panel="custom">
                代码
            </SlTab>
            <SlTabPanel name="general">
                <div style={{padding:'1rem'}}>
                    <div className="viewer">
                        HELLO
                    </div>
                </div>
            </SlTabPanel>
            <SlTabPanel name="custom">
                代码
            </SlTabPanel>
        </SlTabGroup>
    )
}