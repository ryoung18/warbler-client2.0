import React, { Component } from "react";
import Warbler from "./Warbler";
import { BASE_URL } from "./helpers";
import axios from "axios";
import "./Featured.css";


class  Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warblers: []
    }
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/warblers`).then(response => {
      const warblers = response.data.map(w => {
        const user = w.user[0];
        const { id, created_at, img_url, message } = w;

        return {
          id,
          created_at,
          img_url,
          message,
          userImg: user.profile_img,
          userId: user.id,
          username: user.username
        }
      })

      this.setState({warblers})
     });
  }


  render () {
    const [left, middle, right] = this.state.warblers.reduce((f,e,i) => {
        f[i % 3].push(
        <Warbler
          name={e.username}
          handle={e.username}
          logo={e.userImg}
          img={e.img_url}
          message={e.message}
          time={e.created_at}
          key={e.id} />
        )

        return f;
    }, [[],[],[]])

    return (
      <div className="featured">
        <div className="left">
          {left}
        </div>
        <div className="middle">
          {middle}
        </div>
        <div className="right">
          {right}
        </div>
      </div>
    );
  }
}

// Masonry example
// https://codepen.io/golle404/pen/wWoXwz

export default Featured;

// featured: [
//         { warbler_name: "1 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         },
//         { warbler_name: "2 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img: "https://pbs.twimg.com/media/DNmA1VOUMAAZWgV.jpg",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         },
//         { warbler_name: "3 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img: "https://pbs.twimg.com/media/DNmA1VOUMAAZWgV.jpg",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         },
//         { warbler_name: "4 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         },
//         { warbler_name: "5 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img: "https://pbs.twimg.com/media/DNmA1VOUMAAZWgV.jpg",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         },
//         { warbler_name: "6 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img: "https://pbs.twimg.com/media/DNmA1VOUMAAZWgV.jpg",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         },
//         { warbler_name: "7 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img : "",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         },
//         { warbler_name: "8 The Daily Show icon",
//           warbler_handle: "@TheDailyShow",
//           logo : "https://pbs.twimg.com/profile_images/887799293611974656/KlKlh563_400x400.jpg",
//           img: "https://pbs.twimg.com/media/DNmA1VOUMAAZWgV.jpg",
//           message: `Hillary Clinton on Trump's response to NYC terror attack: "He just doesn't have any empathy" http://thr.cm/vI7A4`,
//           time: 'Oct 31'
//         }
//       ]