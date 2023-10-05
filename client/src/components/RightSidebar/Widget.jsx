import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Blacklogo from '/Users/moudipajana/Desktop/ibmhack/client/src/assets/stack-overflow.png'
const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <CreateIcon />
                    <p>Observability is key to the future of<br />software(and your DevOps career)</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <CreateIcon />
                    <p>Podcast 374: How Valuable is your screen name?</p>
                </div>
            </div>
            <h4>Feature on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <ModeCommentIcon />
                    <p>Review queue workflows-Final release...</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <ModeCommentIcon />
                    <p>Please welcome Valued Associates: #958-V2Blast #959 - SpencerG</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={Blacklogo} alt='logo' width='18px' />
                    <p>Outdated Answers: accepted answer is now unpinned on Stack OverFlow</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className='right-sidebar-div-2'>
                <p>20</p>
                    <p>What is the best course of action when a user has high enough rep to...</p>
                </div>
                <div className='right-sidebar-div-2'>
                <p>14</p>
                    <p>Is a link to the "How to ask" help page a useful comment?</p>
                </div>
            </div>
        </div>
    )
}

export default Widget
