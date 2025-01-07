// import React, { useEffect, useState } from "react";
// import "./CustomCursor.css";

// function CustomCursor() {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [fireworks, setFireworks] = useState();

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setPosition({ x: e.clientX, y: e.clientY });
//         };
//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);

//     const handleMouseClick = () => {
//         const fireworkId = Math.random().toString(36).substr(2, 9);
//         setFireworks((prev) => [...prev, { id: fireworkId, x: position.x, y: position.y }]);

//         setTimeout(() => {
//             setFireworks((prev) => prev.filter((fw) => fw.id !== fireworkId));
//         }, 800);
//     };

//     useEffect(() => {
//         window.addEventListener("click", handleMouseClick);
//         return () => window.removeEventListener("click", handleMouseClick);
//     }, [position]);

//     return (
//         <>
//             <div
//                 className="custom-cursor"
//                 style={{
//                     transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//                 }}
//             ></div>
//             {fireworks.map((fw) => (
//                 <div
//                     key={fw.id}
//                     className="firework"
//                     style={{ left: fw.x, top: fw.y }}
//                 ></div>
//             ))}
//         </>
//     );
// }

// export default CustomCursor;










import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [fireworks, setFireworks] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const handleMouseClick = () => {
            const fireworkId = Math.random().toString(36).substr(2, 9);
            setFireworks((prev) => [
                ...prev,
                { id: fireworkId, x: position.x, y: position.y },
            ]);

            setTimeout(() => {
                setFireworks((prev) => prev.filter((fw) => fw.id !== fireworkId));
            }, 800);
        };

        window.addEventListener("click", handleMouseClick);
        return () => window.removeEventListener("click", handleMouseClick);
    }, [position]);

    return (
        <>
            <div
                className="custom-cursor"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                }}
            ></div>
            {fireworks.map((fw) => (
                <div
                    key={fw.id}
                    className="firework"
                    style={{ left: fw.x, top: fw.y }}
                ></div>
            ))}
        </>
    );
}

export default CustomCursor;
