import './App.scss';
import React, { useState } from 'react';

import { BsSearch, BsFillMicFill, BsGrid3X3Gap, BsFillBellFill, BsPersonSquare } from 'react-icons/bs';
import { BiVideoPlus } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';
import { MdFeedback, MdKeyboard } from 'react-icons/md';
import { HiCurrencyDollar } from 'react-icons/hi';
import { FaUserFriends, FaSignOutAlt, FaSun, FaUserShield } from 'react-icons/fa';
import { IoSettings, IoSettingsSharp, IoLanguageOutline, IoHelpCircle } from 'react-icons/io5';
import avatar from './assets/images/avatar.jpg';

import TagItem from './components/TagItem/tagItem';
import Olympic from './components/OlympicItem/olympicItem';
import TrendingItem from './components/TrendingItem/trendingItem';

import olympic_tokyo_2020 from './assets/images/olympic_tokyo_2020.png';
import gaming from './assets/images/gaming.png';
import music from './assets/images/music.png';
import news from './assets/images/news.png';
import sports from './assets/images/sports.png';
import trending from './assets/images/trending.png';


const olympicList = [
  {
    src: 'https://www.youtube.com/embed/WvmDLBk1LAs',
    name: 'Quách Thị Lan nỗ lực tuyệt vời để có mặt ở bán kết 400m rào nữ | OLYMPIC TOKYO 2020',
    view: '416 N',
    day: '6 ngày'
  }, {
    src: 'https://www.youtube.com/embed/i8otXFd4CUs',
    name: 'Không tận dụng được cơ hội, Phi Vũ sớm bị loại trước Á Quân Olympic | BẮN CUNG | OLYMPIC TOKYO 2020',
    view: '81 N',
    day: '1 tuần'
  }, {
    src: 'https://www.youtube.com/embed/z4lyDRg9uh4',
    name: 'Đội tuyển bơi Trung Quốc thể hiện sức mạnh với kỷ lục thế giới ở cự ly 4x200m tự do tiếp sức nữ',
    view: '124 N',
    day: '1 tuần'
  }, {
    src: 'https://www.youtube.com/embed/Hqu_AuSG_u0',
    name: '"Quả ngọt" thứ 2 của "hoa khôi cầu lông" Nguyễn Thuỳ Linh ở Olympic Tokyo 2020',
    view: '543 N',
    day: '1 tuần'
  }
]

const tagList = [
  {
    icon: trending,
    title: 'Thịnh hành'
  },
  {
    icon: music,
    title: 'Âm nhạc'
  },
  {
    icon: gaming,
    title: 'Trò chơi'
  },
  {
    icon: news,
    title: 'Tin tức'
  },
  {
    icon: sports,
    title: 'Thể thao'
  }
]

const trendingList = [
  {
    src: 'https://www.youtube.com/embed/kfw7MYah2n0',
    name: '3107-3 | W/n x Nâu x Duongg x Titie | OFFICIAL MV',
    channel: 'W/n',
    view: '7,4 Tr',
    day: '6 ngày',
    disc: '► SUBSCRIBE CHANNEL: https://wn.fanlink.to/youtube #31073 #Wn #Winhmm #UFO #UMG #3107 #Win Streamlink : https://umvn.lnk.to/3107-3 Executive Producer: Nguyen Quy Cao Nguyen Artist: DuongG, Nâu, Titie Composer: W/n Rap : Nâu Music Producer: W/n  Executive Supervisor: Hai Dang Partnership Manager : Tam Meo Social network advisor : Tu Anh Art Director: Vo Van Hieu Stylist: Nguyen Quoc Ky Hair Stylist: Nguyen Quoc Ky Wardrobe: ZUNE.ZX Director/Edit: Lee1407 VFX Producer: Le Song Bao Duy Camera Equipment: On Studio Lighting Equipment: On studio Media Partners: Box Studio, RioX , H20 radio distributed by Def Jam recording Viet Nam'
  }, {
    src: 'https://www.youtube.com/embed/6IX9kq4Ovzc',
    name: 'SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO',
    channel: 'Lê Bảo Bình',
    view: '11,7 Tr',
    day: '6 ngày',
    disc: 'SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO #LeBaoBinh #SaiCachYeu #SCY Nghe Audio Độc quyền tại Zing MP3: https://zingmp3.vn/bai-hat/Sai-Cach-Y... - Composer : Dc Tam - Singer: Le Bao Binh - Music Arangement: Nguyen Nam Minh Thuy - Director: Hieu Do - Produce MV: Nguyen Tuan Hung - Record & Mix Master: Chien Le - Background Vocal: To Hai Ninh - Cast : Huy Hoang – Huong Thu Bui – Pham Tat Thanh ▶ Tiktok Cùng Lê Bảo Bình : https://vm.tiktok.com/ZMd7BAETr/▶Tải game Thiếu Niên 3Q tại: https://tn3q.onelink.me/9d8G/LeBaoBinh ▶Nhập code Thiếu Niên 3Q tại: https://code.360game.vn/vi/tn3q/▶Chơi Thiếu Niên 3Q cùng Lê Bảo Bình tại:  https://tn3q.zing.vn/✪ Đặc biệt cảm ơn các Nhà tài trợ : Samsung Galaxy A22 - Game Thiếu niên 3Q - Theanh28 - Chara Pari - Zalo -  Auto 568  ✪ Nhấn Đăng kí tại:http://metub.net/LeBaoBinh ▶Facebook Lê Bảo Bình : https://www.facebook.com/lebaobinh.fan/ ▶Facebook cá nhân : https://www.facebook.com/lebaobinh.of... © Bản quyền thuộc về Lê Bảo Bình ▶ Quy định bản quyền “ Sai Cách Yêu ” của Lê Bảo Bình © Cho Phép Cover bằng nhạc tự hòa âm sau 8 ngày phát hành ca khúc " Sai Cách Yêu ". © Không cho phép tất cả các trường hợp tự ý làm Remix, Karaoke, Reup với mọi hình thức khác sẽ bị yêu cầu gỡ xuống.'
  }, {
    src: 'https://www.youtube.com/embed/HZi4eJXWZU0',
    name: 'Rồi Tới Luôn - Nal (MV Audio Lyric)',
    channel: 'Nal Official',
    view: '10 Tr',
    day: '6 ngày',
    disc: 'Rồi Tới Luôn - Nal (MV Audio Lyric)#roitoiluon #nal #roitoiluonnal Link Audio: https://zingmp3.vn/bai-hat/Roi-Toi-Lu... ------- Composer : Nal Executive Producer: CT Media Director: Nguyễn Công Trình Music Producer : Sinkra Video Lyric: Nguyễn Việt Record/Mix/Master: Gia Bin Studio Designer: Tuyên Phi Special Thanks To: CT Media, ATV Media ------- Lyrics: Đang ung dung trên trời , Đạp mây xanh hôm nay xuống chơi. Anh hôm nay hơi buồn , thấy em tự nhiên thảnh thơi. Em đang cô đơn , thì bàn tay đâu đưa đây. Thôi coi như cho qua năm sao đám cưới liền tay đó ngay mùng 2 co ai đi nhiều. Em ơi em ở đâu anh mang trầu cao qua anh rước dâu luôn, Mai đây ta sang giàu , quá xá to thịt kho rau muống.'
  },
]

function App() {
  const [backGround, changeBackGround] = useState('bg-light');
  const handleChangeBackGround = () => {
    if (backGround === 'bg-light') {
      changeBackGround('bg-dark');
    } else {
      changeBackGround('bg-light');
    }
  }

  const GiaoDien = backGround === 'bg-light' ? 'Sáng' : 'Tối';

  const [userManage, setUserManageShow] = useState(false);
  const handleShowUserManage = () => {
    setUserManageShow(!userManage);
  }
  const className = userManage === true ? '' : ' hidden';

  const [searchValue, changeSearchValue] = useState('');
  const changeInput = (event) => {
    changeSearchValue(event.target.value);
  }
  return (
    <div className={"App " + backGround}>

      {/* navbar */}
      <nav className={"nav-bar " + backGround}>
        <div className="search">
          <input className="search__input" type="text" placeholder="Tìm kiếm" list="listSuggestion"
            value={searchValue} onChange={(event) => changeInput(event)} />
          <datalist id="listSuggestion">
            <option value={"Giá trị tìm kiếm: " + searchValue} />
          </datalist>
          <span className="search__button"><BsSearch className="btn btn-search" /></span>
          <div className="search__voice">
            <BsFillMicFill className="btn btn-voice" />
          </div>
        </div>
        <div className="menu">
          <BiVideoPlus className="menu__item" />
          <BsGrid3X3Gap className="menu__item" onClick={handleChangeBackGround} />
          <BsFillBellFill className="menu__item" />
          <img className="menu__item menu__item--user" src={avatar} onClick={handleShowUserManage} alt="" />
        </div>
        <div className={"user" + className}>
          <div className="user-account">
            <img src={avatar} alt="" className="user-account__image" />
            <div className="account-renderer">
              <span className="account-renderer__name">Tường Nguyễn</span>
              <a href="." className="account-renderer__manage">Quản lý tài khoản Google của bạn</a>
            </div>
          </div>
          <div className="user-menu">
            <div className="menu-item">
              <span className="menu-item__icon"><BsPersonSquare /></span>
              <span className="menu-item__title">Kênh của bạn</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><HiCurrencyDollar /></span>
              <span className="menu-item__title">Giao dịch mua và gói hội viên</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><IoSettings /></span>
              <span className="menu-item__title">YouTube Studio</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><FaUserFriends /></span>
              <span className="menu-item__title">Chuyển đổi tài khoản</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><FaSignOutAlt /></span>
              <span className="menu-item__title">Đăng xuất</span>
            </div>
            <hr />
            <div className="menu-item">
              <span className="menu-item__icon"><FaSun /></span>
              <span className="menu-item__title">Giao diện: {GiaoDien}</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><IoLanguageOutline /></span>
              <span className="menu-item__title">Ngôn ngữ: Tiếng Việt</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><GrLanguage /></span>
              <span className="menu-item__title">Địa điểm: Việt Nam</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><IoSettingsSharp /></span>
              <span className="menu-item__title">Cài đặt</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><FaUserShield /></span>
              <span className="menu-item__title">Dữ liệu của bạn trong YouTube</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><IoHelpCircle /></span>
              <span className="menu-item__title">Trợ giúp</span>
            </div>
            <div className="menu-item">
              <span className="menu-item__icon"><MdFeedback /></span>
              <span className="menu-item__title">Gửi phản hồi</span>
            </div>
            <hr />
            <div className="menu-item">
              <span className="menu-item__title">Chế độ hạn chế: Đã tắt</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="body">

        {/* tag */}
        <div className="tag">
          {tagList.map((item, index) => {
            return <TagItem icon={item.icon} title={item.title} key={index} />
          })}
        </div>

        {/* Olympic Tokyo 2020 */}
        <div className="olympic">
          <div className="olympic-header">
            <img className="olympic-header__image" src={olympic_tokyo_2020} alt="Olympic Tokyo 2020" />
            <span className="olympic-header__title">Thế vận hội Tokyo 2020</span>
          </div>
          <div className="olympic-body">

            {olympicList.map((item, index) => {
              return <Olympic src={item.src} name={item.name} view={item.view} day={item.day} key={index} />
            })}
          </div>
        </div>

        <hr />

        {/* trending video */}
        <div className="trending">
          <span className="trending-title">Video thịnh hành</span>
          {trendingList.map((item, index) => {
            return <TrendingItem src={item.src} name={item.name} channel={item.channel} view={item.view}
              day={item.day} disc={item.disc} key={index} />
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
