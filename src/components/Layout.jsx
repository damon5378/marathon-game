import React from "react";
import s from "./Layout.module.css";

export const Layout = ({ title, descr, urlBg, colorBg }) => {
  return (
    <div>
      <section className={s.root} style={{ background: colorBg }}>
        <img src={urlBg} alt="" />
        <div className={s.wrapper}>
          <article>
            <div className={s.title}>
              <h3>{title}</h3>
              <span className={s.separator}></span>
            </div>
            <div className={`${s.desc}${s.full}`}>
              <p>{descr}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
