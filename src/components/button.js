import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.href}>
      <a
        className={`button ${props.className}`}
        data-magnetic={props.magnetic ? true : null}
      >
        {props.className === "solid" || props.className === "outline" ? (
          <span className="ripple">
            <span className="ripple-span"></span>
          </span>
        ) : (
          " "
        )}

        {props.className === "round" ? (
          <>
            <svg className="textcircle" viewBox="0 0 500 500">
              <title>{props.children}</title>
              <defs>
                <path
                  id="textcircle"
                  d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                />
              </defs>
              <text>
                <textPath
                  xlinkHref="#textcircle"
                  ariaLabel={props.children}
                  textLength="900"
                >
                  {props.children}
                </textPath>
              </text>
            </svg>
          </>
        ) : (
          <div className="button-title-wrapper">
            <span data-text={`${props.children} ↗︎`}>{props.children} ↗︎</span>
          </div>
        )}
      </a>
    </Link>
  );
}
