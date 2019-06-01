import React from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => (
    <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        navigation
        slidesNavigation
        slidesNavPosition="bottom"
        controlArrows={0}
        scrollingSpeed="500"
        render={({state, fullpageApi}) => {
            return (
                <ReactFullpage.Wrapper className="App-header">
                    <div className="section sec-main">
                        <h1>초대합니다</h1>
                        <h2>민철과 소영</h2>
                        <p className="date">2019년 7월 6일 토요일 낮 12시</p>
                        <p className="location"><a href="https://map.naver.com/local/siteview.nhn?code=11872992" rel="noopener noreferrer" target="_blank">분당앤스퀘어 4층 컨벤션홀</a></p>
                    </div>
                    <div className="section sec-welcome">
                        <h1>인사말</h1>
                        <p className="welcome">평생을 같이하고 싶은 사람을 만났습니다.<br/>
                            서로 아껴주고 이해하며<br/>
                            사랑 베풀며 살고 싶습니다.<br/>
                            저희 약속 위에 따뜻한 격려로 축복해<br/>
                            주셔서 힘찬 출발의 디딤이 되어 주십시오.</p>
                        <ul>
                            <li><strong>권종욱</strong>&middot;<strong>김은옥</strong>의 장남 <strong>민철</strong></li>
                            <li><strong>이윤식</strong>&middot;<strong>유율란</strong>의 장녀 <strong>소영</strong></li>
                        </ul>
                    </div>
                    <div className="section sec-location">
                        <h1>오시는 길</h1>
                        <a href="https://map.naver.com/local/siteview.nhn?code=11872992" rel="noopener noreferrer" target="_blank"><img src="/naver-map.png" alt="분당앤스퀘어" className="map" /></a>
                        <div>
                            <h3>분당앤스퀘어</h3>
                            <p className="tel">031-728-5300</p>
                            <p className="addr1">경기도 성남시 분당구 탄천상로151번길 20</p>
                            <p className="addr2">경기도 성남시 분당구 구미동 159</p>
                        </div>
                    </div>
                    <div className="section sec-gallery">
                        <div className="slide"><img src="img/IMG_1221.jpg" alt="img1"/></div>
                        <div className="slide"><img src="img/IMG_1304.jpg" alt="img2"/></div>
                        <div className="slide"><img src="img/IMG_1657.jpg" alt="img3"/></div>
                        <div className="slide"><img src="img/IMG_1709.jpg" alt="img4"/></div>
                        <div className="slide"><img src="img/IMG_1917.jpg" alt="img5"/></div>
                        <div className="slide"><img src="img2/IMG_1178-tome.jpg" alt="img6"/></div>
                        <div className="slide"><img src="img2/IMG_1285.jpg" alt="img7"/></div>
                        {/*<div className="slide"><img src="img2/IMG_1298.jpg" alt="img8"/></div>*/}
                        <div className="slide"><img src="img2/IMG_1326.jpg" alt="img9"/></div>
                        <div className="slide"><img src="img2/IMG_1373.jpg" alt="img10"/></div>
                        <div className="slide"><img src="img2/IMG_1467.jpg" alt="img11"/></div>
                        <div className="slide"><img src="img2/IMG_1911.jpg" alt="img12"/></div>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default App;
