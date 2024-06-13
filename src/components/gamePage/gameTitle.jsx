import { forwardRef } from "react";

export const GameTitle = forwardRef((props = {}) => {
    return (
        // Candle: Find Your Spark Within
        <h1  className="block text-3xl font-semibold text-white">{props.gameObject.title}</h1>
    );
});