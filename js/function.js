function lot() { 
    const data = { 
      '1': 25,  // 25% 
      '2': 20,  // 20% 
      '3': 17, // 17% 
      '4': 14, // 14% 
      '5': 11, // 11% 
      '6': 8, // 8% 
      '7': 5, // 5% 
    } 
    const rand = Math.floor(Math.random() * 100) 
    let result = 'はずれ'
    let rate = 0 
    for (const prop in data) { 
      rate += data[prop] 
      if (rand <= rate) { 
        result = prop 
        break
      } 
    } 
    return result 
    // 1等や2等などを設定した確率で表示 
  } 
    
  const num1 = document.getElementById('num1') 

  
  let _r = [] 
  num1.addEventListener('click', () => { 
    r.innerHTML = lot() 
  })