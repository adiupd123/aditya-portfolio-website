import React from "react";
import AnimatedCursor from 'react-animated-cursor';

export const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={12}
            outerSize={18}
            color='255, 255, 255'
            outerAlpha={0.3}
            innerScale={1.5}
            outerScale={4}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textArea',
                'button',
                '.link'
            ]}
        />
    );
}