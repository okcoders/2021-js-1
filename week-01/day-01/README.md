## Notes for what to cover

- why do we need javascript (pitchfork example)
    - make pages dynamic
- javascript and the rest of the programming languages
    - some are better at handling web requests
    - some are better at enterprise applications and interopability
    - some are better at manipulating data quickly
    - some are better at readability or style
    - this was more true in the past, javascript become so popular, that it now is really good at a ton of stuff
    - you could learn just javascript, but then you will never truly appreciate how terrible it is in some ways, but that is okay, it is also really really great.
    - for example in this course everything from here on builds on top of javascript - web, server, database 
    - so this is a super important foundation you have to absolutely crush

- opening the console
- adding a script tag
- getting it to say hello
- simple dynamic form that captures the input and displays it
- getting it to say how old you were ten years ago

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
```
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### Free code camp notes

- focus on undefined, number, string, boolean - these are the primitive types

- object is a data structure, you will hear about another called array later

- to semicolon or not

- no more spaces ever again my friend!

- first the code makes a variable called var may seem like the opposite of what it says - but there is a two pass system we will talk about later

- if I change a now, is b changed in some way?

- This is not like other programming languages (nan, string concat, type conversion)!

- console.log

- if you thought that exercise was annoying as hell that is a good sign!

- if you though the i++ thing was weird don't worry

- Math.floor

- nobody does the multiplication version

- I missed the period

- length property is a common big thing

- the 0 index thing will throw you off for a long time

- order of operations, or order of how things are evaluated on a line: var thirdToLastLetter = firstName[firstName.length - 3];