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
        <NavLink to="/lenta">
          <img src="logo-white.png" alt="" />
        </NavLink>
      </div>
      <div className={styles.sidebar__block}>
        <NavLink
          className={styles.sidebar__item}
          to="/profile"
        >
          <VscAccount /> Профиль
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="/Lenta"
        >
          <BiNews />
          Лента
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="/Messages"
        >
          <BiMessageAltDetail />
          Сообщения
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="/Saved"
        >
          <VscSave />
          Сохранённые
        </NavLink>
      </div>
      <div className={styles.sidebar__block}>
        <NavLink
          className={styles.sidebar__item}
          to="Help"
        >
          <BiHelpCircle />
          Помощь
        </NavLink>
        <NavLink
          className={styles.sidebar__item}
          to="Settings"
        >
          <VscSettingsGear /> Настройки
        </NavLink>
      </div>
      <div className={styles.sidebar__block}>
        <NavLink
          className={styles.sidebar__item}
          to="Logout"
        >
          <BiLogOut />
          Выйти
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
