<template>
    
 <label :data-state="state" for="search">
  <input type="text" placeholder="Search" @click="state = 'opan'" @blur="state='close'"/>
  <i class="fa fa-search"  aria-hidden="true"></i>
 </label>
</template>

<script>
export default {
  data(){
      return{
        state: "close"
      }
  }
}
</script>

<style>
    @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");

label {
  position: relative;
  display: inline-block;
  background-color: rgba(74, 81, 95, 0.144);
  padding: 5px 12px;
  transition: all 1s ease;
  border-radius: 0;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
}
label:hover{
  background-color: rgb(55, 59, 61);
  opacity: 1;
  
}
label::after {
  content: "";
  display: block;
  height: 2px;
  width: 80%;
  background-color: #282928;
  transition: all 1s ease 0.5s;
}
label input {
  transition: width 1s ease, opacity 0.5s ease 0.5s;
  opacity: 1;
  width: 250px;
  height: 20px;
  outline: none;
  color:rgb(254, 255, 254);
  background-color: rgba(74, 81, 95, 0.144);
}
label i {
  position: absolute;
  top: 11px;
  right: 11px;
  color: rgb(216, 218, 231);
  cursor: pointer;
  z-index: 9999999999999;
}


label[data-state=close] {
  border-radius: 40px;
  padding: 5px 5px;
  transition: all 1s ease;
}
label[data-state=close]::after {
  width: 0%;
  transition: all 0.3s ease;
}
label[data-state=close] i {
  pointer-events: none;
}
label[data-state=close] input {
  width: 28px;
  height: 25px;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease, width 1s ease;
  -webkit-appearance: none;
}
</style>