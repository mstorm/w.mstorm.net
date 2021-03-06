import React from 'react';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import ReactGA from 'react-ga';

// OnLoad
window.Kakao.init('6029775d10a8c8c42518e57546938470');
function sendLink() {
    window.Kakao.Link.sendScrap({
        requestUrl: 'http://w.mstorm.net'
    });
}
ReactGA.initialize('UA-246655-7');

const weeks = "일월화수목금토".split('');
const images = [
    // 'img/IMG_1221.jpg',
    'img/IMG_1304.jpg',
    'img/IMG_1657.jpg',
    'img/IMG_1709.jpg',
    'img/IMG_1917.jpg',
    'img2/IMG_1285.jpg',
    'img2/IMG_1373.jpg',
    'img2/IMG_1467.jpg',
    'img2/IMG_1551.jpg',
    'img2/IMG_1688.jpg',
    'img2/IMG_1911.jpg',
    'img2/IMG_1947.jpg',
    'img2/IMG_1979.jpg',
    'img2/IMG_1983.jpg',
    'img2/IMG_2002.jpg'
];

const App = () => (
    <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        anchors={['main', 'welcome', 'calendar', 'location', 'gallery', 'share']}
        navigation
        slidesNavigation
        slidesNavPosition="bottom"
        controlArrows={0}
        scrollingSpeed="700"
        afterLoad={() => {
            ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
        }}
        afterSlideLoad={() => {
            ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
        }}

        render={({state, fullpageApi}) => {
            return (
                <ReactFullpage.Wrapper className="App-header">
                    <div className="section sec-main">
                        <h1>초대합니다</h1>
                        <h2>민철과 소영</h2>
                        <p className="date"><span onClick={() => fullpageApi.moveTo('calendar')}>2019년 7월 6일 토요일 낮 12시</span></p>
                        <p className="location"><span onClick={() => fullpageApi.moveTo('location')}>분당앤스퀘어 4층 컨벤션홀</span></p>
                    </div>
                    <div className="section sec-welcome">
                        <h2>인사말</h2>
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
                    <div className="section sec-calendar">
                        <h2>일정</h2>
                        <p className="date">2019년 7월 6일 토요일 낮 12시</p>
                        <p className="location" onClick={() => fullpageApi.moveTo('location')}>분당앤스퀘어 4층 컨벤션홀</p>
                        <table className="calendar">
                            <thead>
                            <tr>
                                {weeks.map((v, i) => <th key={i}>{v}</th>)}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td><strong>6</strong></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>15</td>
                                <td>16</td>
                                <td>17</td>
                                <td>18</td>
                                <td>19</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>22</td>
                                <td>23</td>
                                <td>24</td>
                                <td>25</td>
                                <td>26</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>28</td>
                                <td>29</td>
                                <td>30</td>
                                <td>31</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="section sec-location">
                        <h2>오시는 길</h2>
                        <a href="https://map.naver.com/local/siteview.nhn?code=11872992" rel="noopener noreferrer"
                           target="_blank"><img src="/naver-map.png" alt="분당앤스퀘어" className="map"/></a>
                        <div className="addr">
                            <p><strong>분당앤스퀘어</strong> <a href="tel:031-728-5300" className="tel">031-728-5300</a></p>
                            <p className="addr1">경기도 성남시 분당구 탄천상로151번길 20</p>
                            <p className="addr2">경기도 성남시 분당구 구미동 159</p>
                        </div>
                    </div>
                    <div className="section sec-gallery">
                        <div className="slide">
                            <h2>갤러리</h2>
                            <img src="img/IMG_1221.jpg" alt="img/IMG_1221.jpg"/>
                            <p className="notice">좌우로 밀어서 사진을 감상하세요.</p>
                        </div>
                        {images.map((o, i) => <div className="slide" key={i}><img src={o} alt={o}/></div>)}
                    </div>
                    <div className="section sec-share">
                        <h2>공유하기</h2>
                        <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="카카오톡 공유하기" onClick={() => sendLink()} />
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default App;
