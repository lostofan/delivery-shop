import React from 'react'
import Menuelem from './Menuelem'
import Avatar from '../../imgs/ava.png'

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
            <div className="settings__change_article">
                <p>Personal information</p>
            </div>
            <div className="change__avatar_block">
                <div className="avatar__block_article change_article">Avatar</div>
                <div className="avatar__block_ui">
                    <img src={Avatar} alt="" />
                    <button className="avatar__ui_change"><p>Change</p></button>
                    <button className="avatar__ui_remove"><p>Remove</p></button>
                </div>
            </div>
            <div className="change__bio_block">
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">First name</div>
                <input type="text" name="name" id="" placeholder="Jane" />
                </div>
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">Last name</div>
                <input type="text" name="name" id="" placeholder="Robertson" />
                </div>
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">Email</div>
                <input type="text" name="name" id="" placeholder="jane.robertson@example.com" />
                </div>
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">Phone number</div>
                <input type="text" name="name" id="" placeholder="(217) 555-0113" />
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
