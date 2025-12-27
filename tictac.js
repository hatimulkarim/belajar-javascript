const kotak1 = document.getElementById("kotak1")
const kotak2 = document.getElementById("kotak2")
const kotak3 = document.getElementById("kotak3")
const kotak4 = document.getElementById("kotak4")
const kotak5 = document.getElementById("kotak5")
const kotak6 = document.getElementById("kotak6")
const kotak7 = document.getElementById("kotak7")
const kotak8 = document.getElementById("kotak8")
const kotak9 = document.getElementById("kotak9")


kotak1.addEventListener("keyup",function(e) {
    if (kotak1.value === kotak2.value && kotak1.value === kotak3.value) {
      window.alert(kotak1.value+" Menang")
       return
    }if (kotak1.value === kotak5.value && kotak1.value === kotak9.value) {
      window.alert(kotak1.value+" Menang")
       return
    }if (kotak1.value === kotak4.value && kotak1.value === kotak7.value) {
      window.alert(kotak1.value+" Menang")
       return
    }})
  kotak2.addEventListener("keyup",function(e){
   if (kotak1.value === kotak2.value && kotak2.value === kotak3.value) {
    window.alert(kotak2.value+" Menang")
    return
  }
  if (kotak2.value === kotak5.value && kotak2.value === kotak8.value) {
    window.alert(kotak2.value+" Menang")
  return
  }})
  
  //kotak 3
  kotak3.addEventListener("keyup",function(e){
  if (kotak3.value === kotak2.value && kotak1.value === kotak3.value) {
    window.alert(kotak3.value+" Menang")
    return
  }
  if (kotak3.value === kotak6.value && kotak1.value === kotak9.value) {
    window.alert(kotak3.value+" Menang")
    return
  }
  if (kotak3.value === kotak5.value && kotak7.value === kotak3.value) {
    window.alert(kotak3.value+" Menang")
  return
  }})
  kotak4.addEventListener("keyup",function(e){
  if (kotak4.value === kotak1.value && kotak4.value === kotak7.value) {
    window.alert(kotak4.value+" Menang")
    return
  }
  if (kotak4.value === kotak5.value && kotak4.value === kotak6.value) {
    window.alert(kotak4.value+" Menang")
  return
  }
  })
  kotak5.addEventListener("keyup",function(e){
  if (kotak5.value === kotak2.value && kotak5.value === kotak8.value) {
    window.alert(kotak5.value+" Menang")
    return
  }
  if (kotak5.value === kotak4.value && kotak5.value === kotak6.value) {
    window.alert(kotak5.value+" Menang")
  return
  }
  if (kotak5.value === kotak1.value && kotak5.value === kotak9.value) {
    window.alert(kotak5.value+" Menang")
  return}
   if (kotak5.value === kotak3.value && kotak5.value === kotak7.value) {
    window.alert(kotak5.value+" Menang")
  return
  }
  })
  kotak6.addEventListener("keyup",function(e){
  if (kotak6.value === kotak3.value && kotak6.value === kotak9.value) {
    window.alert(kotak6.value+" Menang")
  return}
  if (kotak6.value === kotak4.value && kotak6.value === kotak5.value) {
    window.alert(kotak6.value+" Menang")
  return}
  })
  kotak7.addEventListener("keyup",function(e){
    if (kotak7.value === kotak1.value && kotak7.value === kotak2.value) {
      window.alert(kotak7.value+" Menang")
    return}
    if (kotak7.value === kotak8.value && kotak7.value === kotak9.value) {
      window.alert(kotak7.value+" Menang")
    return}
    if (kotak5.value === kotak7.value && kotak3.value === kotak7.value) {
      window.alert(kotak7.value+" Menang")
    return}
    })
    kotak8.addEventListener("keyup",function(e){
        if (kotak8.value === kotak2.value && kotak8.value === kotak5.value) {
          window.alert(kotak8.value+" Menang")
        return}
        if (kotak8.value === kotak7.value && kotak8.value === kotak9.value) {
          window.alert(kotak8.value+" Menang")
        return}
        })
        kotak9.addEventListener("keyup",function(e){
            if (kotak9.value === kotak1.value && kotak9.value === kotak5.value) {
              window.alert(kotak9.value+" Menang")
            return}
            if (kotak9.value === kotak8.value && kotak9.value === kotak7.value) {
              window.alert(kotak9.value+" Menang")
            return}
            if (kotak5.value === kotak9.value && kotak1.value === kotak9.value) {
              window.alert(kotak9.value+" Menang")
            return}
            })
        
