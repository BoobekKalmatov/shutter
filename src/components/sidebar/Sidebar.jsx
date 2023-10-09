import React from "react";
import { Link } from "react-router-dom";
import cl from "./sidebar.module.css";
import { VscAccount, VscSettingsGear, VscSave } from "react-icons/vsc";
import {
  BiHelpCircle,
  BiLogOut,
  BiMessageAltDetail,
  BiNews,
} from "react-icons/bi";

function Sidebar() {
  return (
    <div className={cl.sidebar}>
      <div>
        <Link to="/lenta">
          <img src="logo-white.svg" alt="" />
        </Link>
      </div>
      <div className={cl.sidebar__block}>
        <Link className={cl.sidebar__item} to="/profile">
          <VscAccount /> Профиль
        </Link>
        <Link className={cl.sidebar__item} to="/lenta">
          <BiNews />
          Лента
        </Link>
        <Link className={cl.sidebar__item} to="/messages">
          <BiMessageAltDetail />
          Сообщения
        </Link>
        <Link className={cl.sidebar__item} to="/saved">
          <VscSave />
          Сохранённые
        </Link>
      </div>
      <div className={cl.sidebar__block}>
        <Link className={cl.sidebar__item} to="help">
          <BiHelpCircle />
          Помощь
        </Link>
        <Link className={cl.sidebar__item} to="settings">
          <VscSettingsGear /> Настройки
        </Link>
      </div>
      <div className={cl.sidebar__block}>
        <Link className={cl.sidebar__item} to="logout">
          <BiLogOut />
          Выйти
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
