<template>
  <div class="container-fluid">
    <article class="main-image">
      <section>
        <h1>Sabeeh Malik</h1>
        <span>2B Computer Engineering Student at the <br> University of Waterloo.</span>
        <button class="btn btn-xl btn-light" @click="scrollTo('experience')">Experience</button>
        <button class="btn btn-xl btn-light" @click="scrollTo('recent-projects')">Projects</button>
        <button class="btn btn-xl btn-light" @click="scrollTo('contact')">Contact Me</button>
      </section>
    </article>
  <!--
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
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/nodejs.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/react.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/express.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/as.png')"></div>
          </div>
          <div class="col-lg-3 col-md-6 mb-5">
            <div class="icon mx-auto"><img class="logo" :src="require('../assets/djangoicon.png')"></div>
          </div>
        </div>
        <br></br>
      </section>
    </article>
    -->
    <article id="experience" class="white-section">
      <section>
        <h3>Experiences</h3>
        <h5>Uptake Canada</h5>
        <div class="lg-image-container">
          <img class="img-fluid" :src="require('../assets/uptake.png')" alt=''>
        </div>
        <h6>Full Stack Developer</h6>
        <div class="row">
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in UptakeIcons" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
        </div>
        <p>Interning as a full-stack developer at Uptake was great exposure to all aspects of web application development. During my time at Uptake, I was able to learn about best coding practices and design considerations.</p>
        <p>Some of the tasks and projects I've been able to work on throughout the experience:</p>
        <div class="exp-desc">
        <ol>
          <li class="divider">UI Contributions</li>
          <ol>
            <li>Introduced new UI components and functionality using Sencha Ext Js framework</li>
            <li>Worked alongside customer experience team to communicate customer requirements and solutions</li>
            <li>Maintained UI components by troubleshooting and resolving defects</li>
          </ol> 
          
          <li class="divider">Working on Backend Logic and Middleware Services</li>
            <ol>
              <li>Reworking Backend Structure</li>
              <ol>
                <li>Helped in developing a new service-side application created to handle SQL business logic using Nest Js</li>
                <li>Mapped out entities, models, and transformations to handle and improve data states</li>
                <li>Designed and created new endpoints to methodically retrieve data from MS SQL server</li>
                <li>Developed optimized and reusable services to process data using an ORM</li>
                <li>Wrote thorough mock tests with 100% code coverage using Jest</li>
              </ol>
              <li>Improving Existing System</li>
              <ol>
                <li>Enchanced services to improve communication between frontend and backend or external services</li>
                <li>Resolved defects existing in SQL backend logic for mobile and web applications</li>
                <li>Developed comprehensive health checks for various services</li>
              </ol>
            </ol>
            <li class="divider">Designing a Centralized Logging System</li>
            <ol>
              <li>Participated in discussing project requirements, sprint planning and risk evaluation</li>
              <li>Researched and presented pros and cons for various logging solutions</li>
              <li>Developed PoC using AWS Kinesis Firehose to stream data into S3</li>
              <li>Created a MVP service to handle generic log-write contracts and send data</li>
            </ol>
        </ol>
        </div>
        
        
        <h5>Veeva Systems</h5>
        <div class="lg-image-container">
          <img class="img-fluid" :src="require('../assets/veeva.png')" alt=''>
        </div>
        <h6>QA Engineer Intern</h6>
        <div class="row">
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in VeevaIcons" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
        </div>
        <p>Working as a QA Engineer was my first internship experience in the tech field. It was a great introduction into the software development lifecycle, 
        and gave me insight towards ideal testing standards.</p>
        <p>Some of the tasks and projects I've been able to work on throughout the experience:</p>
        <div class="exp-desc">
        <ol>
          <li class="divider">Automation Triaging</li>
            <ol>
              <li>Analyzing automation reports to checking for any defects or questionable results</li>
              <li>Troubleshooting, debugging, and improving automation frameworks to give accurate reports</li>
            </ol>
          <li class="divider">Automation Framework Development</li>
            <ol>
              <li>Refactoring Framework</li>
              <ol>
                <li>Introduced retry logic into automation framework for intermittent issues, reducing a large number of flappers</li>
                <li>Refactored automation framework so that test cases could be run in a dynamically, largely reducing automation triaging times</li>
                <li>Made changes to improve automation efficiency by optimizing test case coverage</li>
              </ol>
              <li class="divider">Introducing new API and UI Testing</li>
              <ol>
                <li>Introduced API and UI testing to existing components which required large manual efforts for years</li>
                <li>Devised and implemented method to further specify API tests by connecting with AWS S3</li>
              </ol>
              <li class="divider">Improvements to Reporting Platforms</li>
              <ol>
                <li>Created new reports for retry logic, failed case metrics, and other insightful data</li>
                <li>Drafted new web-reporting platform for triaging</li>
              </ol>
            </ol>
            <li class="divider">Testing</li>
            <ol>
              <li>Designed and executed extensive regression test suites</li>
              <li>Developed and presented thorough test plans</li>
              <li>Increased automation coverage, and pitched in towards potential reasons/solutions for defects</li>
              <li>Maintained product quality while following the agile development cycle</li>
            </ol>
        </ol>
        </div>
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
                  <div class="row">
                    <div class="col-lg-2 col-md-6 mb-3" v-for="(element, index) in project.tools" :key="index">
                      <div class="icon mx-auto"><i><img :title="element.title" class="portfolio-item logo-sm" :src="element.URL"></i></div>
                    </div>
                  </div>   
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
            <div class="icon mx-auto"><a  :target="contact.icon.includes('envelope')? '_self' :'_blank'" rel="noopener noreferrer" :href="contact.ref" @click="copyInfo(contact.icon)"><i class="" :class="contact.icon"></i></a></div>
            <transition name="fade">
              <p v-if="copied && (contact.icon.includes('envelope'))">Copied to Clipboard!</p>
            </transition>
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
      UptakeIcons: [
        {
          title: "Jira",
          URL: require('../assets/jira.png')
        },
        {
          title: "Git",
          URL: require('../assets/git.png')
        },
        {
          title: ".NET",
          URL: require('../assets/.net.png')
        },
        {
          title: "Ext Js",
          URL: require('../assets/sencha.png')
        },
        {
          title: "MS SQL",
          URL: require('../assets/mssql.png')
        },
        {
          title: "Nest Js",
          URL: require('../assets/nestjs.png')
        },
        {
          title: "TypeORM",
          URL: require('../assets/typeorm.png')
        },
        {
          title: "Jest",
          URL: require('../assets/jest.png')
        },
        {
          title: "Kinesis Firehose",
          URL: require('../assets/firehose.png')
        },
        {
          title: "AWS S3",
          URL: require('../assets/s3.png')
        }
      ],
      VeevaIcons: [
        {
          title: "Jira",
          URL: require('../assets/jira.png')
        },
        {
          title: "Git",
          URL: require('../assets/git.png')
        },
        {
          title: "Maven",
          URL: require('../assets/maven.png')
        },
        {
          title: "JUnit",
          URL: require('../assets/junit.png')
        },
        {
          title: "S3",
          URL: require('../assets/s3.png')
        },
        {
          title: "NodeJs",
          URL: require('../assets/nodejs.png')
        },

      ],
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
          ref: "https://github.com/SabeehM",
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
          description: "A full stack website created to help track funding for projects, allowing users to keep their contributions anonymous if desired. Users are able to create, search, and join projects. They are also able to add and remove users/contributions from a project.",
          tools:[ 
            {
              title: "React",
              URL: require('../assets/react.png')
            },
            {
              title: "Express",
              URL: require('../assets/express.png')
            },
            {
              title: "MongoDB",
              URL: require('../assets/mongodb.png')
            },
            {
              title: "Node.js",
              URL: require('../assets/nodejs.png')
            },
            {
              title: "Redux",
              URL: require('../assets/redux.png')
            },
            {
              title: "JWT",
              URL: require('../assets/jwt.png')
            }
          ]        
        },
        {
          img: "starterhacks_r.png",
          title: "Chef Fridge (StarterHacks)",
          description: "A hardware and software system designed to suggest recipe's based off the food inside someone's fridge. It detects a fridge door’s motion and takes a photo once it closes. It then uses Google Cloud Vision AI to identify any objects in the image, and compared it to a food database.",
          tools:[ 
            {
              title: "OpenCV",
              URL: require('../assets/opencv.png')
            },
            {
              title: "Arduino",
              URL: require('../assets/arduino.png')
            },
            {
              title: "Google Cloud",
              URL: require('../assets/googlecloud.png')
            },
            {
              title: "MongoDB",
              URL: require('../assets/mongodb.png')
            },
          ]
        },
        {
          img: "django.jpg",
          title: "Tracking QR Code Generator",
          description: "A Djago web application that designates trackable and customizable QR Codes for websites requested by any user. The user is able to track information about their QR Codes.",
          tools:[ 
            {
              title: "Django",
              URL: require('../assets/djangoicon.png')
            },
            {
              title: "SQLite",
              URL: require('../assets/sqlite.png')
            },
          ]
        },
        {
          img: "pdf_remove.png",
          title: "PDF Blank Remover",
          description: "A web application that accepts PDF files. Depending on a chosen threshold, the application will remove any pages from the PDF which it deems as blank.",
          tools: [
            {
              title: "Flask",
              URL: require('../assets/flask.png')
            }
          ]
        },
        {
          img: "app.png",
          title: "Reddit Slideshow Viewer (Android App)",
          description: "A simple android app which displays images from a chosen subreddit as a slideshow. The user is able to choose a reddit, how to sort it, as well  time interval for the slideshow.",
          tools:[ 
            {
              title: "Android Studio",
              URL: require('../assets/as.png')
            },
          ]
        },
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
        setTimeout(() => this.copied = false, 3000)
      }
    },
    getImgUrl(path) {
      return require(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  @import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
  *{
    font-family: "Open Sans", sans-serif;
    background-color: #f5f5f5;
    scroll-behavior: smooth;
  }

  ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  }
  li {
    counter-increment: my-awesome-counter;
    margin: 0.25rem;
    transition: 0.3s ease-in-out;
  }
  li::before {
    content: "";
    background: #8E8D8A;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    display: inline-block;
    line-height: 0.5rem;
    color: white;
    text-align: center;
    margin-right: 0.5rem;
  }
  li:hover{
    padding-left: 5px;
    transform: skew(-5deg);
    transform: scale(1.002);
  }
  ol ol li::before {
    background: #E85A4F;
  }
  ol ol ol li::before {
    background: #807f7c;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  .lg-image-container{
    width: 540px;
    height: 250px;
    float: right;
  }
  .img-fluid{
    float:center !important;
  }
  section{
    border-radius: 2%;
  }

  .logo{
    height: 50px;
    width: 50px;
  }
  .logo-sm{
    height: 100%;
    width: 100%;
  }
  article{
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }
  .btn-xl {
    margin: 20px 20px;
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

    .exp-desc{
      font-size:0.9rem;
    }

    h3{
    font-size: 2em;
    font-weight: bold;
    }
    h4,h5,h6{
      font-weight: bold;
      text-align:left;
    }
    h5{
      padding-top: 50px;
    }
    p, li{
      text-align: left;
      font-size: 1em;
    }
    .divider{
      padding-top: 10px;
    }
    
    span{
    display: block;
    padding-bottom: 30px;
    font-size: 1.25rem;
    }
  }

  .row{
    padding-top: 20px;
    margin-top: 20px;
    img{
      transition: 0.3s ease-in-out;
    }
    img:hover{
      transform :scale(0.9);
      
    }
  }

  .portfolio-item{
    display: block;
    position: relative;
    overflow: hidden;
    background-color: transparent;

    .logo-sm{
      max-width: 30px;
      max-height: 30px;
      min-height: 30px;
    }
    
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
        padding-top: 50px;
        font-size: 2rem;
        font-weight: bold;
      }
      span{
        display: block;
        padding-bottom: 30px;
        font-size: 1.25rem;
      }
      .row{
        padding-top:20px;
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
            font-size: 1.5rem;
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
