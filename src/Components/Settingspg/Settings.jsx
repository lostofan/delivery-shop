import React from 'react'
import Menuelem from './Menuelem'
import Personal from './Personal'

export default function Settings() {
  return (
    <div className="settings__block_wrapper">
        <div className="settings__menu">
        <p className="settings__menu_article">Settings</p>
        <div className="settings__menu_wrapper">
            <Menuelem article="Account" description="Personal information" link="acc"/>
            <Menuelem article="Address" description="Shippings addresses" link="loc"/>
            <Menuelem article="Payment method" description="Connected credit cards" link="pay"/>
            <Menuelem article="Security" description="Password, 2FA" link="sec"/>
        </div>
        </div>
        <div className="settings__change">
        <p className="settings__menu_article">Account</p>
        <div className="settings__change_wrapper">
        <div className="settings__change_block">
                <p className="settings__change_article">Personal information</p>
            <Personal/>
            <div className="change__buttons_wrapper">
                <div className="left__buttons"><button className="logout_btn">Log out</button></div>
                <div className="right__buttons"><button className="btn_inactive">Discard changes</button>
                <button className="btn_active">Save changes</button></div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}