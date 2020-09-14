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
          <div class="col-lg-3 col-md-6 mb-5" v-for="(offer, index) in tools" :key="index">
            <div class="icon mx-auto"><i class="" :class="offer.icon"></i></div>
          </div>
        </div>
      </section>
    </article>
    <article id="find-more" class="white-section">
      <section>
        
        <h3>Experiences</h3>
        <h5>Veeva Systems</h5>
        <img class="img-fluid" :src="require('../assets/temp.png')" alt=''>
        <h6>QA Engineer Intern</h6>
        <p>Information Goes HereInformation Goes HereInformation Goes HereInformation Goes HereInformation Goes Here
        Information Goes HereInformation Goes HereInformation Goes HereInformation Goes HereInformation Goes Here
        Information Goes HereInformation Goes HereInformation Goes HereInformation Goes HereInformation Goes Here
        Information Goes HereInformation Goes HereInformation Goes HereInformation Goes HereInformation Goes Here
        Information Goes HereInformation Goes HereInformation Goes HereInformation Goes Here</p>
      </section>
    </article>

    <article id="recent-projects" class="red-section">
      <section class="container">
        <h3>Recent Projects</h3>
        <div class="row no-gutters">
          <div class="col-lg-6" v-for="(project, index) in recentProjects" :key="index">
            <a href="" class="portfolio-item">
              <span class="caption">
                <span class="caption-item">
                  <h2>{{project.title}}</h2>
                  <p class="mb-0">{{project.description}}</p>
                </span>
              </span>
              <img class="img-fluid" :src="require('../assets/'+project.img)" alt=''>
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
            <div class="icon mx-auto"><a :href="contact.ref"><i class="" :class="contact.icon"></i></a></div>
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
          ref: "https://www.linkedin.com/in/sabeeh-malik/"
        },
        {
          icon: "fab fa-github-square icon",
          ref: "https://github.com/"
        },
        {
          icon: "fas fa-envelope-square icon",
          ref: "#"
        },
      ],
      recentProjects: [
        {
          img: "temp.png",
          title: "Stationary",
          description: "Lorem Ipsum yo"
        },
        {
          img: "temp.png",
          title: "Stationary",
          description: "Lorem Ipsum yo"
        },
        {
          img: "temp.png",
          title: "Stationary",
          description: "Lorem Ipsum yo"
        },
        {
          img: "temp.png",
          title: "Stationary",
          description: "Lorem Ipsum yo"
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
    p{
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
  }

  .portfolio-item{
    display: block;
    position: relative;
    overflow: hidden;
    background-color: transparent;

    .caption{
      display:flex;
      height:100%;
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      background-color: transparent;
      transition: transform 0.2s linear;

        .caption-content{
          background-color: transparent;
          text-align: left;
          color: #fff;
          margin: auto 2rem 2rem;
        }
    }

    img{
      transition: transform .2s linear;
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
  
</style>
