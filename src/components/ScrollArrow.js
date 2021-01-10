import React, {useState} from 'react';
import { ArrowUpOutlined } from "@ant-design/icons"

export default function ScrollArrow() {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return <ArrowUpOutlined className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
}


// Base code credit to Macro6461 on Github
// https://gist.github.com/macro6461/b144e95dddbdd692addf968d3e8a4dda#file-scrollarrow-js