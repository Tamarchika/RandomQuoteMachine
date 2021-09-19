function loadData() {
    const text = document.getElementById('text')
    const author = document.getElementById('author')
    const requestURL = "https://type.fit/api/quotes";
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const quotes = {
      text: '',
      author: ''
    }
     xhr.onload = function () {
   for (let i = 0; i < Math.floor(Math.random() * xhr.response.length); i++) {
     quotes.text = this.response[i]['text'];
     quotes.author = this.response[i]['author']
      text.innerHTML = '"' + quotes.text + '"'
      author.innerHTML = quotes.author;
      if (!this.response[i]['author']) {
          author.innerHTML = 'Unknown';
      }
   }
  }
  xhr.open('GET', requestURL, true)
  xhr.send();

  function randomColor() {
      const quotes = document.getElementById('quoteBox')
      const body = document.querySelector('body');
      const twitter = document.getElementById('twitter');
      const tubmlr = document.getElementById('tumblr');
      const newQuote = document.getElementById('newQuote')
      const colors = ['pink', 'green', '#FF5733', '#689D1F', 'gold', 'purple', 'blue', 'darkblue', '#900C3F', '#2C8DAA', '#FFC300', '#634ACE', 'black', 'red', 'orange', '#9B6BC9', '#E634CC', '#A20839 '];
      var color = Math.floor(Math.random() * colors.length);
      quotes.style.color = colors[color];
      body.style.backgroundColor = colors[color];
      twitter.style.color = colors[color];
      tubmlr.style.color = colors[color];
      newQuote.style.backgroundColor = colors[color];
  }
  randomColor()
  }  
  window.addEventListener('load', loadData)
 