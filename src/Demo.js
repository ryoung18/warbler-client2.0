import { Component } from "react";
import { BASE_URL } from './helpers';
import axios from "axios";

class Demo extends Component {

  componentDidMount () {
    const { history, demoUsers } = this.props;

      demoUsers.forEach((user, i, allUsers) => {
          console.log('start', user.name, i)
            axios
              .post(`${BASE_URL}/users`, user)
              .then(response => {
                console.log('Done', user.name, i)
                if(i === allUsers.length-1 )
                  history.push("/");
              })
              .catch(error => { console.log('error', user, i) })
      })
  }

  render () {
    return ('Please wait while we populate the database')
  }
}



export default Demo;

Demo.defaultProps = {
  demoUsers: [
    {
      email:"test1@warby.com",
      username:"test1 username",
      name:"test1 name",
      password:"abcd1234",
      profile_img:"https://www.w3schools.com/css/trolltunga.jpg"
    },
    {
      email:"test2@warby.com",
      username:"test2 username",
      name:"test2 name",
      password:"abcd1234",
      profile_img:"https://www.w3schools.com/css/trolltunga.jpg"
    },
    {
      email:"test3@warby.com",
      username:"test3 username",
      name:"test3 name",
      password:"abcd1234",
      profile_img:"https://www.w3schools.com/css/trolltunga.jpg"
    },
    {
      email:"test4@warby.com",
      username:"test4 username",
      name:"test4 name",
      password:"abcd1234",
      profile_img:"https://www.w3schools.com/css/trolltunga.jpg"
    }

    // {
    //   email:"first@warby.com",
    //   username:"First username",
    //   name:"First name",
    //   password:"abcd1234",
    //   profile_img:"https://www.w3schools.com/css/trolltunga.jpg"
    // },
    // {
    //   email:"second@warby.com",
    //   username:"Second username",
    //   name:"Second name",
    //   password:"abcd1234",
    //   profile_img:"http://data.whicdn.com/images/35834939/large.jpg"
    // },
    // {
    //   email:"third@warby.com",
    //   username:"Third username",
    //   name:"Third name",
    //   password:"abcd1234",
    //   profile_img:"https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg"
    // },
    // {
    //   email:"warb4@warby.com",
    //   username:"Four username",
    //   name:"Four name",
    //   password:"abcd1234",
    //   profile_img: "https://hdwallsource.com/img/2014/2/beautiful-wallpaper-4410-4466-hd-wallpapers.jpg"
    // },
    // {
    //   email:" warb5@warby.com",
    //   username:"Five username",
    //   name:"Five name",
    //   password:"abcd1234",
    //   profile_img:"https://www.muralswallpaper.co.uk/app/uploads/turquoise-waterfall-jungle-plain-820x532.jpg"
    // },
    // {
    //   email:" warb6@warby.com",
    //   username:"Six usernamee",
    //   name:"Six name",
    //   password:"abcd1234",
    //   profile_img:"http://www.vectortemplates.com/raster/batman-logo-big.gif"
    // },
    // {
    //   email:"warb7@warby.com",
    //   username:"Seven username",
    //   name:"Seven name",
    //   password:"abcd1234",
    //   profile_img:"https://i.pinimg.com/originals/5b/2d/bb/5b2dbbc4c2f3b7db7cad60cd89997e30.jpg"
    // },
    // {
    //   email:" warb8@warby.com",
    //   username:"Eight username",
    //   name:"Eight name",
    //   password:"abcd1234",
    //   profile_img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bass_logo.svg/170px-Bass_logo.svg.png"
    // },
    // {
    //   email:" warb9@warby.com",
    //   username:"Nine username",
    //   name:"Nine name",
    //   password:"abcd1234",
    //   profile_img:"http://www.marielumiere.com/wp-content/uploads/2016/01/Playboy-logo.png"
    // },
    // {
    //   email:" warb10@warby.com",
    //   username:"Ten username",
    //   name:"Ten name",
    //   password:"abcd1234",
    //   profile_img:"http://www.995thewolf.com/wp-content/uploads/sites/268/2017/01/FullSizeRender-1.jpg"
    // },
    // {
    //   email:" warb11@warby.com",
    //   username:", Eleven username",
    //   name:", Eleven name",
    //   password:"abcd1234",
    //   profile_img:"https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_510,q_75,w_510/http://res.cloudinary.com/simpleview/image/upload/crm/reddirt/Starbucks0-bd1241fe5056b3a_bd124313-5056-b3a8-494df570ba12a3f3.png"
    // },
    // {
    //   email:" warb12@warby.com",
    //   username:"Twelve username",
    //   name:"Twelve name",
    //   password:"abcd1234",
    //   profile_img:"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/04/28/102628759-wendy.530x298.jpg?v=1430341035"
    // }
  ]
};

