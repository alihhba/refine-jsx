import { ReactSVG } from "react-svg";
import {cn} from "@/lib/utils/index.jsx";

// interface IconProps {
//   icon: string;
//   className?: ClassValue;
//   color?: string;
//   width?: string;
//   height?: string;
// }

const Icon = ({
                  className,
                  icon,
                  color = "",
                  strokeColor = "#000",
                  width = "1rem",
                  height = "1rem",
                  ...props
              }) => {
    return (
        <div
            {...props}
            className={cn(className, "w-fit h-full flex items-center justify-center")}
        >
            <ReactSVG
                src={icon}
                beforeInjection={(svg) => {
                    svg.setAttribute("width", width);
                    svg.setAttribute("height", height);

                    const pathElements = svg.querySelectorAll("path");
                    {
                        color
                            ? pathElements.forEach((element) => {
                                element.setAttribute("fill", color);
                            })
                            : pathElements.forEach((element) => {
                                element.setAttribute("stroke", strokeColor);
                            });
                    }

                    const textElements = svg.querySelectorAll("text, tspan");
                    textElements.forEach((element) => {
                        color
                            ? element.setAttribute("fill", color)
                            : element.setAttribute("stroke", strokeColor);
                    });
                }}
            />
        </div>
    );
};

export default Icon;
