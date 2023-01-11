import React from 'react';
import './Page.css'
import NewReleased from './components/NewReleased';
import Category from './components/Category';

const arr_newRealeased = [{src:'/1.png', src_lg:'/1lg.png' , title:'The Rings of Power', 
intro:'The Rings of Power is an American fantasy TV series based on novel The Lord of the Rings and its appendices by J. R. R.' 
, rating: '8.8'},
{src:'/2.png', src_lg:'/2lg.png', title:'NOPE', 
intro: 'Sci-Fi Movie stars Daniel Kaluuya and Keke Palmer as horse-wrangling siblings attempting to capture evidence of an U.F.O', 
rating: '7.0'},
{src:'/3.png', title:'TENET'},
{src:'/4.png', title:'Dark Season-1'},
{src:'/5.png', title:'Squid Games Season-1'},
{src:'/6.png', title:'Only Murder In The Building'}];

const arr_category = [{src:'/action.png', title:'Action'},
{src:'/drama.png', title:'Drama'},
{src:'/horror.png', title:'Horror'},
{src:'/scifi.png', title:'SciFi'},
{src:'/anime.png', title:'Animation'},
{src:'/serial.png', title:'Serial'}];

const Page = () => (
    <div className='layout_page'>
        <div className='page_title'>New This Week</div>
        <div className='page_content'>
            {arr_newRealeased.map((item) => (<NewReleased item={item}/>))}
        </div>
        <div className='page_title'>Categories</div>
        <div className='page_content'>
            {arr_category.map((item) => (<Category src={item.src} title={item.title}/>))}
        </div>
    </div>
);

export default Page;