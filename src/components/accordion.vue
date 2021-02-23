<template>
  <div class="accordianContainer">
  <section class="ac-container">
    <div class = "container">
      <input id="ac-4" name="accordion-1" type="radio" checked>
      <label for="ac-4">Door</label>
      <article>
      <div class="wrapper" >
        <!-- <div class ="icon" >
            <font-awesome-icon
              icon="door-open"
              size="2x"
              fixed-width
              style="color: var(dynamic-icon-color);">
            </font-awesome-icon>
            <! <h3 class="subtitle dynamic-subtitle"> Door </h3> ->
        </div> -->
      </div>
    <div class="wrapper" >
      <div class="infoPair">
          <h3 class="dataLabel">Peak hours used:</h3>
          <h3 class="dataPoint">5:00 PM - 7:00 PM </h3>
      </div>
        <div>
          <div class ="icon" >
              <font-awesome-icon
                icon="door-open"
                size="2x"
                fixed-width
                style="color: var(--dynamic-icon-color);">
              </font-awesome-icon>
              <!-- <h3 class="subtitle dynamic-subtitle"> Door </h3> -->
          </div>
        </div>
      <div class="infoPair">
          <h3 class="dataLabel">Estimated annual cost of appliance:</h3>
          <h3 class="dataPoint">$300 </h3>
      </div>
    </div>
      </article>
    </div>
    <div class = "container">
      <input id="ac-2" name="accordion-1" type="radio" checked>
      <label for="ac-2">Air Conditioner</label>
      <article>
        <div class="wrapper" >
        <div class ="icon" >
            <font-awesome-icon
              icon="fan"
              size="2x"
              fixed-width
              style="color: var(--dynamic-icon-color);">
            </font-awesome-icon>
            <!-- <h3 class="subtitle dynamic-subtitle"> Air Conditioner </h3> -->
        </div> </div>
    <div class="wrapper" >
      <div class="infoPair">
          <h3 class="dataLabel">Peak hours used:</h3>
          <h3 class="dataPoint">5:00 PM - 7:00 PM </h3>
      </div>
      <div class="infoPair">
          <h3 class="dataLabel">Estimated cost of appliance:</h3>
          <h3 class="dataPoint">$300 </h3>
      </div>
    </div>
      </article>
    </div>
    <div class = "container">
      <input id="ac-3" name="accordion-1" type="radio" checked>
      <label for="ac-3">Smart Fridge</label>
      <article>
        <div class="wrapper" >
        <div class ="icon" >
            <img class="image" src="./../assets/gimpfridgeTeal.png" style="width:40px">
            <!-- <h3 class="subtitle dynamic-subtitle"> Smart Fridge </h3> -->
        </div> </div>
    <div class="wrapper" >
      <div class="infoPair">
          <h3 class="dataLabel">Peak hours used:</h3>
          <h3 class="dataPoint">5:00 PM - 7:00 PM </h3>
      </div>
      <div class="infoPair">
          <h3 class="dataLabel">Estimated cost of appliance:</h3>
          <h3 class="dataPoint">$300 </h3>
      </div>
    </div>
      </article>
    </div>
    <div class = "container">
      <input id="ac-1" name="accordion-1" type="radio" checked>
      <label for="ac-1">Smart Bulb</label>
      <article>
        <div class="wrapper" >
        <div class ="icon" >
            <font-awesome-icon
              icon="lightbulb"
              size="2x"
              fixed-width
              style="color: var(--dynamic-icon-color);">
            </font-awesome-icon>
            <!-- <h3 class="subtitle dynamic-subtitle"> Smart Bulb </h3> -->
        </div> </div>
    <div class="wrapper" >
      <div class="infoPair">
          <h3 class="dataLabel">Peak hours used:</h3>
          <h3 class="dataPoint">5:00 PM - 7:00 PM </h3>
      </div>
      <div class="infoPair">
          <h3 class="dataLabel">Estimated cost of appliance:</h3>
          <h3 class="dataPoint">$300 </h3>
      </div>
    </div>
      </article>
    </div>
  </section>
  </div>
</template>
<script>
</script>
<style lang="scss">
.accordianContainer{
  .ac-container {
    max-width: 95%;
    border: 2px solid var(--dynamic-subtitle-color);
    // border-top: none;
  }
  .ac-container label {
    height: 30px;
    line-height: 1.8;
    font-size: 20px;
    padding: 5px 20px;
    display: block;
    cursor: pointer;
    color: #b9f9fa;
    // background-color: #2c3e50;
    background: #2c3e50;
    // border-top: 1px #b9f9fa;
    // border-bottom: 1px #b9f9fa;
    .container{
    // border: #fff;
    // border-width: thick;
    }
  }
  .ac-container {
    width: 100%;
    margin: 10px auto;
    border-radius: 5px;
  }
  .ac-container label:hover {
    background: #3a4f63;
  }
  .ac-container input {
    display: none;
  }
  /* Contents */
  .ac-container article {
    overflow: hidden;
    height: 0;
    transition: 0.6s;
  }
  .ac-container article p {
    padding: 20px;
    font-size: 12px;
    color: #666;
    line-height: 1.5;
  }
  .ac-container input:checked ~ article {
   height: 300px;
    border-top: 2px solid var(--dynamic-icon-color);
  }
  .infoPair{
   display: flex;
   // align-items: baseline;
   flex-direction: column;
   width: 200px;
   height: 200px;
  }
  .wrapper{
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
  }
  .icon{
    margin: 20px;
    .dynamic-subtitle{
      padding-top: 0px;
      margin: 20px;
    }
  }
  .dataPoint{
    padding: 4px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    text-decoration-style: solid;
    color: var(--dynamic-subtitle-color);
  }
  .dataLabel{
    padding: 4px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    text-decoration-style: solid;
    color: var(--dynamic-subtitle-color);
    // white-space: nowrap;
  }
}
</style>
