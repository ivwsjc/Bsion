<template>
  <div class="view-pd home-collapse-container">
    <p class="vtitle">FAQ</p>
    <div class="row-box">
      <p>
        <span class="label">1</span>
        Who is Bison bank?
      </p>
      <span style="color: #EFA25F;" class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">2</span>
         Why choose Bison Premier Banking?
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">3</span>
         Why is now the best time to join Bison Premier Banking?
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">4</span>
         How can I ensure that my funds are secure with Bison Bank? 
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">5</span>
         How can I ensure the privacy of my account? 
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">6</span>
         What are the benefits of a Bison Premier Banking account?
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">7</span>
         What are the fees for Bison Premier Banking? 
      </p>
      <span class="sign">+</span>
    </div>
    <div class="row-box">
      <p>
        <span class="label">8</span>
         How do I join Bison Premier Banking? 
      </p>
      <span class="sign">+</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 750px) {
  .home-collapse-container {
    display: none;
  }
}
.home-collapse-container {
  .vtitle {
    padding-bottom: .16rem;
    font-size: 0.44rem;
    font-weight: bold;
  }

  .row-box {
    padding-top: .192rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #A6A6A6;
  }

  p {
    display: flex;
    align-items: center;
    font-size: .16rem;
  }

  .label {
    margin-right: .24rem;
    width: .224rem;
    height: .224rem;
    font-size: .16rem;
    font-weight: bold;
    text-align: center;
    line-height: .224rem;
    color: #000;
    background-color: #F1923F;
    border-radius: .04rem;
  }

  .sign {
    font-size: .48rem;
  }
}
</style>