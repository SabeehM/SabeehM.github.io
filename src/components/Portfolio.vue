<template>
  <div class="container-fluid">
    <article class="main-image">
      <section>
        <h1>Sabeeh Malik</h1>
        <span>3A Computer Engineering Student at the <br> University of Waterloo.</span>
        <button class="btn btn-xl btn-light" @click="scrollTo('experience')">Experience</button>
        <button class="btn btn-xl btn-light" @click="scrollTo('recent-projects')">Projects</button>
        <button class="btn btn-xl btn-light" @click="scrollTo('contact')">Contact Me</button>
      </section>
    </article>
    <article id="experience" class="white-bg">
      <section class ="white-section">
        <h3>Experiences</h3>
        <h5><a id="AW" :href=AWExp.url target="_blank">Arctic Wolf</a></h5>
        <div class="lg-image-container">
          <img class="img-fluid" :src="require('../assets/aw.png')" alt=''>
        </div>
        <h6>Software Developer</h6>
        <div class="row">
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in AWExp.lang" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in AWExp.tools" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
        </div>
        <p v-text=AWExp.preface></p>
        <p v-text=AWExp.details></p>
        <h5><a id="Uptake" :href=UptakeExp.url target="_blank">Uptake Canada</a></h5>
        <div class="lg-image-container">
          <img class="img-fluid" :src="require('../assets/uptake.png')" alt=''>
        </div>
        <h6>Full Stack Developer</h6>
        <div class="row">
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in UptakeExp.lang" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in UptakeExp.tools" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
        </div>
        <p v-text=UptakeExp.preface></p>
        <p v-text=UptakeExp.details></p>
        <h5><a id="Veeva" :href=VeevaExp.url target="_blank">Veeva Systems</a></h5>
        <div class="lg-image-container">
          <img class="img-fluid" :src="require('../assets/veeva.png')" alt=''>
        </div>
        <h6>QA Engineer Intern</h6>
        <div class="row">
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in VeevaExp.lang" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
          <div class="col-lg-1 col-md-6 mb-3" v-for="(element, index) in VeevaExp.tools" :key="index">
            <div class="icon mx-auto"><i><img :title="element.title" class="logo-sm" :src="element.URL"></i></div>
          </div>
        </div>
        <p v-text=VeevaExp.preface></p>
        <p v-text=VeevaExp.details></p>
      </section>
    </article>

    <article id="recent-projects">
      <section class="container project-section">
        <h3>Recent Projects</h3>
        <div class="row no-gutters">
          <div class="col-lg-6" v-for="(project, index) in recentProjects" :key="index">
            <a href="javascript:void(0);" class="portfolio-item">
              <a :href="project.url || 'javascript:void(0);'" :target="project.url && '_blank'">
                <img class="img-fluid" height="900px" :src="require('../assets/'+project.img)" alt=''>
              </a>
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

<script src="../scripts/portfolio.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../styles/portfolio.scss"></style>
