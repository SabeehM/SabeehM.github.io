export default {
    data: () => {
      return {
        copied: false,
        AWExp: {
          url: "https://arcticwolf.com/",
          preface: "At Arctic Wolf, I interned as a software developer for the Pollerbear (Data Ingestion) team, getting involved with subteams focused on vulnerability analysis \
                    scanning and cloud sensing solutions.",
          details: "Working at Arctic Wolf meant contributing to the security operations platform, which ingests and processes upwards of 150 billion events a day from a wide variety of \
                    on-premise devices and cloud platforms. Diving into external vulnerability analysis, I was able to improve existing microservices tied to vulnerability detection, and improve\
                    the observability & operational-intelligence of many tools. Working with cloud sensing solutions, I was able to create and scale high-performance services in a real-time \
                    threat analysis pipeline.",
          lang: [
            {
              title: "Python",
              URL: require('../assets/python.png')
            },
            {
              title: "Golang",
              URL: require('../assets/golang.png')
            }
          ],
          tools: [
          {
            title: "Kubernetes",
            URL: require('../assets/k8.png')
          },
          {
            title: "ECS",
            URL: require('../assets/ecs.png')
          },
          {
            title: "CloudWatch",
            URL: require('../assets/cw.png')
          },
          {
            title: "Docker",
            URL: require('../assets/docker.png')
          },
          {
            title: "Prometheus",
            URL: require('../assets/prometheus.png')
          },
          {
            title: "Grafana",
            URL: require('../assets/grafana.png')
          },
        ]
        },
        UptakeExp: {
          url: "https://www.uptake.com/",
          preface: "At Uptake, I interned as a full stack developer for the ServiceLink team, responsible for the largest equipment dealer service solution from the division.",
          details: "Working at Uptake, I had the opportunity to enhance and support state of the art web and mobile applications used by countless clients on a daily basis. The challenges \
                    I faced were a varied mix of work, with some focus on user interface development for CAT dealer business application products, and many contributions to new middle-tier and\
                    back-end systems & code.",
          lang: [
            {
              title: "C#",
              URL: require('../assets/csharp.png')
            },
            {
              title: "Typescript",
              URL: require('../assets/ts.png')
            },
            {
              title: "SQL",
              URL: require('../assets/sql.png')
            }
          ],
          tools: [
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
        ]
        },
        VeevaExp: {
          url: "https://www.veeva.com/",
          preface: "As a QA Engineer for Veeva Systems, I collaborated among Renditions and Web2PDF teams to help deliver features for Web2PDF and Veeva Vault Platforms.",
          details: "Working at Veeva Systems involved collaborating with multiple teams in effort to successfully build scalable Java based enterprise platforms that support life sciences \
                    applications. As a QA Engineer Intern, my work often involved refactoring and enhancing test automation frameworks in order to assist with test automation suites, \
                    reporting, and automation metrics.",
          lang: [
            {
              title: "Java",
              URL: require('../assets/java.png')
            },
            {
              title: "Javascript",
              URL: require('../assets/js.png')
            }
          ],
          tools: [
          {
            title: "Maven",
            URL: require('../assets/maven.png')
          },
          {
            title: "JUnit",
            URL: require('../assets/junit.png')
          },
          {
            title: "Selenium",
            URL: require('../assets/selenium.png')
          },
          {
            title: "S3",
            URL: require('../assets/s3.png')
          },
          {
            title: "NodeJs",
            URL: require('../assets/nodejs.png')
          },
          ]
        },
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
            description: "A full stack website created to help track funding for projects, allowing users to keep their contributions anonymous if desired. Users are able to create, search, \
                        and join projects, as well as add/remove users or contributions from a project.",
            url: "https://github.com/SabeehM/Pitch-In",
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
            description: "A hardware and software system designed to suggest recipe's based off the food inside someone's fridge. It detects a fridge door’s motion and takes a photo once \
                         it closes. It then uses Google Cloud Vision AI to identify any objects in the image, and compare it to a food database.",
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
            img: "vod_emote_tool.png",
            title: "VOD_Emote_Tool",
            description: "A python-package created to help gather emote analytics from any twitch VOD. Gathers information about emote distribution, emote usage over time, and suggests \
                          pivotal stream moments.",
            url: "https://github.com/SabeehM/VOD_Emote_Tool",
            tools:[ 
              {
                title: "Python",
                URL: require('../assets/py_pckge.png')
              },
              {
                title: "MatplotLib",
                URL: require('../assets/matplotlib.png')
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
            url: "https://github.com/SabeehM/pdf_blank_remover",
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
    mounted: function(){
        this.iterateColors()
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
      },
      iterateColors(){
        let root = document.documentElement
        const interval = 7 * 1000
        const company_colors = ["#28648c", "#484444","#ff9820"]
        var iterator = 0
        setInterval(function(){
          root.style.setProperty('--company_color', company_colors[iterator])
          iterator = (iterator + 1) % company_colors.length
        }, interval)
      }
    }
  }