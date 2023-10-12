import React from "react";
import { NavLink, activeClassName } from "react-router-dom";
import styles from "./sidebar.module.css";
import { VscAccount, VscSettingsGear, VscSave } from "react-icons/vsc";
import {
  BiHelpCircle,
  BiLogOut,
  BiMessageAltDetail,
  BiNews,
} from "react-icons/bi";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <NavLink to="/">
          <img src="logo-white.png" alt="" />
        </NavLink>
      </div>
      <div className={styles.sidebar__block}>
        <NavLink
          className={styles.sidebar__item}
          to="/login"
        >
          <VscAccount /> Профиль
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="/"
        >
          <BiNews />
          Лента
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="/messages"
        >
          <BiMessageAltDetail />
          Сообщения
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="/saved"
        >
          <VscSave />
          Сохранённые
        </NavLink>
      </div>
      <div className={styles.sidebar__block}>
        <NavLink
          className={styles.sidebar__item}
          to="help"
        >
          <BiHelpCircle />
          Помощь
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="settings"
        >
          <VscSettingsGear /> Настройки
        </NavLink>
      </div>
      <div className={styles.sidebar__block}>
        <NavLink
          className={styles.sidebar__item}
          to="logout"
        >
          <BiLogOut />
          Выйти
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
