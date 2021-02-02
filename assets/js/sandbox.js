
// const id = setTimeout()


function showNums(from, to) {
  console.time('1')
  setTimeout(() => {
    if (from <= to) {
      console.log(from);
      setTimeout(()=>{
        showNums(from+1, to);
        console.timeEnd('1')
      }, 100)
    }
  }, 100)
}

