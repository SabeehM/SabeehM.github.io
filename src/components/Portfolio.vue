<template>
  <div class="container-fluid">
    <article class="main-image">
      <section>
        <h1>Sabeeh Malik</h1>
        <h4>4th Year Computer Engineering Student at the University of Waterloo.</h4><br>
        <h5>Internship Experience at Bloomberg, Coursera, 1Password, and more with an interest in Software Architecture, Reliability, and Performance Analysis.</h5>
        <article class="contact-section" id="contact">
          <section class="container">
            <div class="row justify-content-sm-center">
              <div class="col col-sm-2" v-for="(contact, index) in contacts" :key="index">
                <div class="icon mx-auto"><a  :target="contact.icon.includes('envelope')? '_self' :'_blank'" rel="noopener noreferrer" :href="contact.ref" @click="copyInfo(contact.icon)"><i class="" :class="contact.icon"></i></a></div>
              </div>
            </div>
          </section>
        </article>
      </section>
    </article>
  </div>
</template>

<script src="../scripts/portfolio.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../styles/portfolio.scss"></style>
