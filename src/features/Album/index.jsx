import React from 'react';
import AlbumList from './component/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Lạc trôi vào những giai điệu',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/4/9/45493e859cde749c75fb4377c14d0db3.jpg'
        },
        {
            id: 2,
            name: 'Hát có thể làm vơi đi bớt nỗi lòng',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/d/4/1/9d416b054ce29523f211985d8efee04a.jpg'
        },
        {
            id: 3,
            name: '2-3 dô cùng những bản',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/9/e/7/29e78741b838c9db1e97aa321d9a6ca6.jpg'
        },
        {
            id: 4,
            name: 'Ở đây có những bản hit cực buồn ngủ',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/b/b/b/8bbbad6894b04a0283aa1400edcdc537.jpg'
        },
        {
            id: 5,
            name: 'Rồi em sẽ gặp một chàng trai khác',
            thumbnaiUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/5/9/7e59ac229ab9e0435327cae2a1c15fba.jpg'
        },
    ];

    return (
        <div>
            <h2>Có thể bạn méo thích</h2>
            <AlbumList albumList={albumList} />
        </div >
    );
}

export default AlbumFeature;