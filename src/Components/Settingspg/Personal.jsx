import React from 'react'
import Avatar from '../../imgs/ava.png'

export default function Personal() {
  return (<>
    <div className="change__avatar_block">
                <div className="avatar__block_article change_article">Avatar</div>
                <div className="avatar__block_ui">
                    <img src={Avatar} alt="" />
                    <button className="avatar__ui_change">Change</button>
                    <button className="avatar__ui_remove">Remove</button>
                </div>
            </div>
            <div className="change__bio_block">
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">First name</div>
                <input type="name" name="name" id="" value="Jane" />
                </div>
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">Last name</div>
                <input type="name" name="lname" id="" value="Robertson" />
                </div>
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">Email</div>
                <input type="email" name="email" id="" value="jane.robertson@example.com" />
                </div>
                <div className="change__bio_inputs">
                <div className="change__bio_article change_article">Phone number</div>
                <input type="tel" name="tel" id="" value="(217) 555-0113" />
                </div>
            </div>
            <p className="settings__change_article">Email notifications</p>
            <div className="change__notifications_block">
                <div className="notifications__element">
                    <input type="checkbox" name="deals" id="1" /> <p>New deals</p>
                </div>
                <div className="notifications__element">
                    <input type="checkbox" name="restaurants" id="2" /> <p>New restaurants</p>
                </div>
                <div className="notifications__element">
                    <input type="checkbox" name="statuses" id="3" /> <p>New statuses</p>
                </div>
                <div className="notifications__element">
                    <input type="checkbox" name="passchng" id="4" /> <p>Password changes</p>
                </div>
                <div className="notifications__element">
                    <input type="checkbox" name="offers" id="5" /> <p>Special offers</p>
                </div>
                <div className="notifications__element">
                    <input type="checkbox" name="news" id="6" /> <p>Newsletter</p>
                </div>
            </div>
        </>
  )
}
