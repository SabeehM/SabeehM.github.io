<template>
  <div class="container-fluid">
    <article class="main-image">
      <section>
        <h1>Sabeeh Malik</h1>
        <span>2A Computer Engineering Student at the <br> University of Waterloo.</span>
        <button class="btn btn-xl btn-light" @click="scrollTo('contact')">Contact Me</button>
      </section>
    </article>

    <article id="offers" class="red-section">
      <section class="container">
        <h2>Some Languages I Use...</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5" v-for="(offer, index) in offers" :key="index">
            <div class="icon mx-auto"><i class="" :class="offer.icon"></i></div>
            <h4>{{offer.title}}</h4>
          </div>
        </div>
        <h2>Some Tools I Use...</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/git.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/jira.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/mongodb.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/nodejs.jpg')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/react.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/express.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/as.jpg')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/djangoicon.png')"></div>
          </div>
        </div>
      </section>
    </article>
    <article id="find-more" class="white-section">
      <section>
        
        <h3>Experiences</h3>
        <h5>Veeva Systems</h5>
        <img class="img-fluid" :src="require('../assets/veeva.png')" alt=''>
        <h6>QA Engineer Intern</h6>
        <p>Working as a QA Engineer was my first experience in a tech field. It was a great introduction into the software development lifecycle, 
        and gave me great insight towards project management methodologies. Some of the tasks and projects I've been able to work on throughout the experience:
        </p>
        <ul>
          <li>Automation Triaging: This involved viewing automation reports and checking for any defects. 
          Oftentimes this involved troubleshooting, debugging, and improving the automation framework in the case where there are underlying issues unrelated to the actual software product.</li>
          <li>Automation Improvements: Plenty of my coop experience involved implemented new ideas and upgrades to our automation frameworks.
            <ul>
              <li>Refactoring Framework</li>
              <li>Introducing new API and UI Testing</li>
            </ul>
          </li>
        </ul>
      </section>
    </article>

    <article id="recent-projects" class="project-section">
      <section class="container">
        <h3>Recent Projects</h3>
        <div class="row no-gutters">
          <div class="col-lg-6" v-for="(project, index) in recentProjects" :key="index">
            <a href="javascript:void(0);" class="portfolio-item">
              <img class="img-fluid" height="900px" :src="require('../assets/'+project.img)" alt=''>
              <span class="caption">
                <span class="caption-content">
                  <h2>{{project.title}}</h2>
                  <p class="mb-0">{{project.description}}</p>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </article>

    <article class="contact-section" id="contact">
      <section class="container">
        <h2>Contacts</h2>
        <div class="row">
          <div class="col-md-4 mb-5" v-for="(contact, index) in contacts" :key="index">
            <div class="icon mx-auto"><a :href="contact.ref" @click="copyInfo(contact.icon)"><i class="" :class="contact.icon"></i></a></div>
            <p v-if="copied && (contact.icon.includes('envelope'))">Copied to Clipboard!</p>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      copied: false,
      offers: [
        {
          icon: "fab fa-python",
          title: "Python",
        },
        {
          icon: "fab fa-java",
          title: "Java",
        },
        {
          icon: "fab fa-cuttlefish",
          title: "C++",
        },
        {
          icon: "fab fa-js-square",
          title: "JS (HTML + CSS)",
        },
        
      ],
      tools: [
        {
          icon: "fab fa-react",
          title: "React"
        },
        {
          icon: "fab fa-node-js",
          title: "Node.js"
        },
        {
          icon: "fab fab fa-bootstrap",
          title: "Node.js"
        },
        {
          icon: "fab fab fa-git",
          title: "Git"
        },
      ],
      contacts: [
        {
          icon: "fab fa-linkedin icon",
          ref: "https://www.linkedin.com/in/sabeeh-malik/",
        },
        {
          icon: "fab fa-github-square icon",
          ref: "https://github.com/",
        },
        {
          icon: "fas fa-envelope-square icon",
          ref: "javascript:void(0);",
        },
      ],
      recentProjects: [
        {
          img: "ProjectView.png",
          title: "Pitch-In!",
          description: "A full stack website created to help track funding for projects, allowing users to keep their contributions anonymous if desired. Users are able to create, search, and join projects. They are also able to add and remove users/contributions from a project."
        },
        {
          img: "starterhacks_r.png",
          title: "Chef Fridge (StarterHacks)",
          description: "A hardware and software system designed to suggest recipe's based off the food inside someone's fridge. It detects a fridge door’s motion and takes a photo once it closes. It then uses Google Cloud Vision AI to identify any objects in the image, and compared it to a food database."
        },
        {
          img: "django.jpg",
          title: "Tracking QR Code Generator",
          description: "A Django web application that designates trackable and customizable QR Codes for websites requested by any user. The user is able to track information about their QR Codes."
        },
        {
          img: "app.png",
          title: "Reddit Slideshow Viewer (Android App)",
          description: "A simple android app which displays images from a chosen subreddit as a slideshow. The user is able to choose a reddit, how to sort it, as well  time interval for the slideshow."
        }
      ]
    }
  },
  methods: {
    scrollTo(element){
      const el = document.querySelector("#"+element);
      el.scrollIntoView({
        behaviour: "smooth",
        block: "start"
      })
    },
    copyInfo(element){
      if(element.includes("envelope")){
        const el = document.createElement('textarea');
        el.value = "s73malik@uwaterloo.ca";
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.copied = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import url("http://fonts.googleapis.com/css?family=Open+Sans");
  @import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
  *{
    font-family: "Open Sans", sans-serif;
    background-color: #f5f5f5;
    scroll-behavior: smooth;
  }

  section{
    border-radius: 2%;
  }

  .logo{
    height: 50px;
    width: 50px;
  }
  article{
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }
  .btn-xl {
    padding: 20px 35px;
    font-size: 1.25rem;
    margin-top: 20px;
    padding: 12px 25px;
    background-color: transparent;
    border: 3px solid #000;
    color: #000;
    font-size: 0.8em;
    letter-spacing: 2px;
    position: relative;
    transition: 0.5s ease-in-out;
    display: inline-block;
  }
  .btn-xl:hover{
    background-color: transparent;
    color: #E85A4F;
    border:3px solid #E85A4F;
  }

  .main-image, .second-image{
    min-height: 100vh;
    background-size:cover;
    padding: 0 10px;
    text-align: center;

    h1{
      color: #000;
      font-family: "Open Sans", sans-serif;
      font-size: 5rem;
      font-weight: bold;
      margin-bottom:30px;
    }

    span{
      
      display: block;
      padding-bottom: 30px;
      font-size: 1.6rem;
      font-weight: bold;
    }
  }

  
  .second-image{
    background: #b1fc03;
  }
  h1{
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 30px;
    transition: 0.5s ease-in-out;
  }
  h1:hover{
    color: #E85A4F;
  }
  h2{
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  span{
    display: block;
    padding-bottom: 30px;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .white-section{
    padding: 120px 10px;
    background-color: #fff;
    text-align: center;

    section{
      padding: 50px 30px;
      width: 78%;
    }

    h3{
    font-size: 2em;
    font-weight: bold;
    }
    h4,h5,h6{
      font-weight: bold;
      text-align:left;
    }
    p, li{
      text-align: left;
      font-size: 1em;
    }
    img{
      float:right;
    }
    span{
    display: block;
    padding-bottom: 30px;
    font-size: 1.25rem;
    }
  }

  .row{
    padding-top: 50px;
    margin-top: 20px;
  }

  .portfolio-item{
    display: block;
    position: relative;
    overflow: hidden;
    background-color: transparent;

    
    img{
      min-height: 200px;
      max-height:200px;
      max-width:400px;
      transition: transform .2s linear;
    } 
    a{
      text-decoration: none;
    }
    &:hover{
      img{
        transform: scale(0.9);
      }

      caption{
        transform: scale(0.9);
        background-color: rgba($color: #000, $alpha: 0.5);
      }
    }
  }

  .red-section{
    padding: 120px 10px;
    background-color: #8E8D8A;
    color: #000;
    text-align: center;
    border-radius: 1%;

    h2,h3{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 20px;
    }
    h4{
    font-size: 1.6rem;
    padding-top: 20px;
    }

    img{
      transition: 0.3s ease-in-out;
    }
    img:hover{
      transform: scale(0.9);
      color: #E85A4F;
    }

    .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    color: #001a38;
    border-radius: 80%;

    

      i{
        font-size: 2rem;
        transition: 0.6s ease-in-out;
      }

      i:hover{
      color: #E85A4F;
    }
    }
  }

  .contact-section{
    padding: 120px 100px;
    
    color: #000;
    text-align: center;
    border-radius: 1%;

    h2{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 20px;
    }
    h4{
    font-size: 1.6rem;
    padding-top: 20px;
    }

    .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #fff;
    color: #001a38;
    border-radius: 80%;

    

      i{
        font-size: 2rem;
        transition: 0.6s ease-in-out;
      }

      i:hover{
      color: #E85A4F;
    }
    }

  }
  .project-section{
      padding: 120px 10px;
      background-color: #8E8D8A;
      text-align: center;
      h3{
        font-size: 2rem;
        font-weight: bold;
      }
      span{
        display: block;
        padding-bottom: 30px;
        font-size: 1.25rem;
      }
      .row{
        padding-top:50px;
      }
      a{
      text-decoration: none;
      }
      .portfolio-item{
        display:block;
        position: relative;
        overflow: hidden;

        .caption{
          height: 100%;
          width: 100%;
          transition: transform 0.2s linear;
          .caption-content{
            background: transparent;
            text-align:left;
            color:#000;
            margin: auto 2rem 2rem;
          }

          h2{
            padding-top:20px;
            background: transparent;
            font-size: 2rem;
          }

          p{
            font-size: 0.8rem;
          }
        }

        img{
          transition: transform 0.2s linear;
        }

        &:hover{
          img{
            transform: scale(0.9);
          }
          .caption{
            transform: scale(0.9);
            
          }
        }
      }
    }
  
</style>
