<template>
<section class="ac-container">
  <div class = "container">
    <input id="ac-4" name="accordion-1" type="radio" checked>
    <label for="ac-4">Door</label>
    <article>

      <div class="wrapper" >
      <div class ="icon" >
          <font-awesome-icon
            icon="door-open"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> Door </h3>
      </div> </div>

  <div class="wrapper" >
    <div class="infoPair">
        <h3 class="costLabel">Peak hours used:</h3>
        <h3 class="costCalc">5:00 PM - 7:00 PM </h3>
    </div>
    <div class="infoPair">
        <h3 class="costLabel">Estimated cost of appliance:</h3>
        <h3 class="costCalc">$300 </h3>
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
            icon="door-open"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> Air Conditioner </h3>
      </div> </div>

  <div class="wrapper" >
    <div class="infoPair">
        <h3 class="costLabel">Peak hours used:</h3>
        <h3 class="costCalc">5:00 PM - 7:00 PM </h3>
    </div>
    <div class="infoPair">
        <h3 class="costLabel">Estimated cost of appliance:</h3>
        <h3 class="costCalc">$300 </h3>
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
          <font-awesome-icon
            icon="door-open"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> Smart Fridge </h3>
      </div> </div>

  <div class="wrapper" >
    <div class="infoPair">
        <h3 class="costLabel">Peak hours used:</h3>
        <h3 class="costCalc">5:00 PM - 7:00 PM </h3>
    </div>
    <div class="infoPair">
        <h3 class="costLabel">Estimated cost of appliance:</h3>
        <h3 class="costCalc">$300 </h3>
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
            icon="door-open"
            size="2x"
            fixed-width
            style="color: var(--dynamic-icon-color);">
          </font-awesome-icon>
          <h3 class="subtitle dynamic-subtitle"> Smart Bulb </h3>
      </div> </div>

  <div class="wrapper" >
    <div class="infoPair">
        <h3 class="costLabel">Peak hours used:</h3>
        <h3 class="costCalc">5:00 PM - 7:00 PM </h3>
    </div>
    <div class="infoPair">
        <h3 class="costLabel">Estimated cost of appliance:</h3>
        <h3 class="costCalc">$300 </h3>
    </div>
  </div>



    </article>
  </div>
			</section>
    </template>

    <script>
    </script>

    <style lang="scss">

      /* Label */
      .wrapper{
        display: flex;
        align-items: baseline;
        justify-content: space-evenly;
      }

  .icon{
        .dynamic-subtitle{
          padding-top: 0px;
          margin: 50px;
        }
      }

.ac-container {
  max-width: 400px;
  border: 1px solid #ccc;
  border-top: none;
}
.ac-container label {
  height: 30px;
  line-height: 1.8;
  font-size: 20px;
  padding: 5px 20px;
  display: block;
  cursor: pointer;
  color: #666;
  background: #eee;
  border-top: 1px solid #ccc;
}
.ac-container {
  width: 100%;
  margin: 10px auto;
}
.ac-container label:hover {
  background: #ddd;
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
  border-top: 1px solid #ccc;
}

.infoPair{
 display: flex;
 flex-direction: column;
 width: 200px;
 height: 200px;
}
</style>
