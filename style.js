let cap = document.getElementById('con2')
let next = document.getElementById('next')
let copy = document.getElementById('copy')
let copy_btn = document.getElementById('copy-btn')

let arr = [
  "My favorite exercise is a cross between a lunge and a crunch ... I call it lunch.",
  "I need a six-month holiday, twice a year.",
  "We tried to be normal once. Worst two minutes of our lives!",
  "There are 16-year-olds competing at the Olympics and some of us (me) still push on pull doors.",
  "That awkward moment when you're wearing Nike's and you can't do it.",
  "I'm just a girl, standing in front of a salad, asking it to be a cupcake.",
  "What if we told you ... you can eat without posting it on Instagram?",
  "I know the voices in my head aren't real, but sometimes their ideas are just too good to ignore.",
  "We don't know what's tighter: Our jeans or our company culture.",
  "Friday ... Our second-favorite F word.",
  "We don't care what people think of us. Unless they're our customers. We definitely care what customers think of us.",
  "All you need is love ... and investors. All you need is love and investors.",
  "Hi, we're [company name]. We build amazing apps and eat amazing apps.",
  "They say Do what you love and money will come to you. Let’s see what happens, I just ordered tamales.",
  "My favorite subject in school was recess.",
  "No thoughts brain empty just tacos and cats.",
  "[Food item] so good it’s got me weak in the knees.",
  "The best part about waking up is going to sleep eighteen hours later.",
  "The older you get, the better you get, unless you’re a banana.",
  "Bring the alcohol! Because no great story started with someone eating a salad.",
  "Don't worry if plan A fails. There are 25 more letters in the alphabet.",
  "If you’re not supposed to eat at night, why is there a light bulb in the refrigerator?",
  "First rule of Sundays: If you can’t reach it from your couch, you don’t need it.",
  "If you fall, I will be there. Signed, Floor."
]

next.addEventListener('click', () => {
  let random = Math.floor(Math.random() * arr.length)
  cap.innerHTML = arr[random]
  copy_btn.style.color = "black"
})

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(cap.innerText)
  copy_btn.style.color = "red"
})

