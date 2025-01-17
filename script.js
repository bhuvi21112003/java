// script.js

const truths = [
   " What is your biggest fear?",
"Have you ever lied to your best friend?",
"What is your most embarrassing moment?",
"What is your secret talent?",
"Have you ever cheated on a test?",
"Who is your crush?",
"What is the most childish thing you still do?",
"Have you ever stolen anything?",
"What is your guilty pleasure?",
"Have you ever lied to your parents?",
"What is the most annoying thing you do?",
"What is the most trouble you've gotten into at school?",
"Have you ever been caught doing something you shouldn't have?",
"What is your biggest regret?",
"What is the worst thing you've ever said to anyone?",
"What is the best piece of advice you've ever received?",
"Have you ever pretended to be sick to get out of something?",
"What is the most expensive thing you own?",
"What is the most awkward date you've been on?",
"Have you ever lied about your age?",
"What is the longest you've gone without showering?",
"Have you ever had a crush on a teacher?",
"What is the worst gift you've ever received?",
"Have you ever been caught cheating on a test?",
"What is the best gift you've ever received?",
"Have you ever been caught sneaking out of the house?",
"What is the worst date you've ever been on?",
"Have you ever been in a physical fight?",
"What is the most childish thing you still do?",
"Have you ever been caught lying?",
"What is the most embarrassing thing your parents have caught you doing?",
"What is the most awkward moment you've had in public?",
"Have you ever been in love?",
"what is the weirdest dream you've ever had?",
"Have you ever had a crush on someone else's boyfriend/girlfriend?",
"What is the worst thing you've ever done to a friend?",
"Have you ever been caught doing something embarrassing in public?",
"What is your biggest insecurity?",
"Have you ever lied to get out of trouble?",
"What is the most embarrassing thing you've ever worn?",
"Have you ever been caught breaking the law?",
"What is the weirdest thing you've ever eaten?",
"Have you ever been in an embarrassing situation at work?",
"What is the most awkward thing you've done on a date?",
"Have you ever lied about your homework?",
"What is the weirdest thing you've ever done to impress someone?",
"Have you ever been caught in a lie?",
"What is the most embarrassing thing you've done in front of a crowd?",
"Have you ever been caught doing something you shouldn't at work?",
"What is the weirdest thing you've ever done to get someone's attention?"
];

const dares = [
   " Do 10 pushups.",
"Sing a song loudly.",
"Dance without music for 1 minute.",
"Act like a monkey until your next turn.",
"Try to lick your elbow.",
"Talk in an accent for the next 3 rounds.",
"Do your best impression of a celebrity until someone can guess who you are.",
"Let someone tickle you for 30 seconds.",
"Wear socks on your hands for the next 3 rounds.",
"Pretend to be a waiter/waitress and take snack orders from everyone in the group.",
"Attempt to do 20 sit-ups.",
"Try to juggle 3 items of the group's choosing.",
"Do your best chicken dance outside on the lawn.",
"Make up a story about the item to your right.",
"Speak in a high-pitched voice until your next turn.",
"Make a silly face and keep it that way until the next round.",
"Let someone draw on your face with a pen.",
"Do an impression of your favorite teacher.",
"Make up a song and sing it to the group.",
"Pretend to be a statue until it’s your turn again.",
"Let the person to your left redo your hairstyle.",
"Do 10 jumping jacks and shout I'm a superstar! after each one.",
"Wear your clothes backward for the next 3 rounds.",
"Do your best impression of a baby being born.",
"Make up a 30-second opera about your life.",
"Talk in the third person for the next 3 rounds.",
"Put an ice cube down your back.",
"Let someone else tickle you for 30 seconds.",
"Pretend to be a waiter and take snack orders from everyone in the group.",
"Eat a spoonful of mustard.",
"Put as many marshmallows in your mouth as you can.",
"Let someone draw a mustache on your face with a pen.",
"Talk in an accent for the next 3 rounds.",
"Spin around 10 times and try to walk in a straight line.",
"Pretend you are a cheerleader and do a cheer.",
"Hold your breath for 10 seconds.",
"Draw a face on your hand and talk with it.",
"Do an impression of your favorite teacher.",
"Pretend to be a waiter and take snack orders from everyone in the group.",
"Try to juggle 3 items of the group's choosing.",
"Pretend to be a chicken until your next turn.",
"Sing the chorus of your favorite song.",
"Talk in a high-pitched voice until your next turn.",
"Make a silly face and keep it that way until the next round.",
"Let someone draw on your face with a pen.",
"Do an impression of your favorite cartoon character.",
"Make up a song and sing it to the group.",
"Pretend to be a statue until it’s your turn again.",
"Let the person to your left redo your hairstyle.",
"Do 10 jumping jacks and shout ",
"Im a superstar! after each one."
];

document.getElementById('truthButton').addEventListener('click', () => {
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    document.getElementById('result').innerText = randomTruth;
});

document.getElementById('dareButton').addEventListener('click', () => {
    const randomDare = dares[Math.floor(Math.random() * dares.length)];
    document.getElementById('result').innerText = randomDare;
});
