Vue.component('book-card', {
  props:['image','title', 'author', 'synopsis', 'url'],
  template: `
    <div>
      <img width="100" v-bind:src="image" v-bind:alt="title"/>
      <h2>{{ title }}</h2>
      <h4>{{ author }}</h4>
      <p>{{ synopsis }}</p>
      <a v-bind:href="url">link</a>
    </div>
  `
})

new Vue({
  el: '#app',
  data: {
    books: [
      { title:'Ruby For Beginners: Your Guide To Easily Learn Ruby Programming in 7 days',
        author:'iCode Academy',
        image:'https://images-na.ssl-images-amazon.com/images/I/41NVWd9hPpL.jpg',
        synopsis:'This book can help you build a solid, basic knowledge in programming that can help you a lot when you begin to write your own program in Ruby language.',
        url:'https://www.amazon.com/Ruby-Beginners-Guide-Easily-Programming-ebook/dp/B072BZKP61/ref=sr_1_2?ie=UTF8&qid=1531699100&sr=8-2&keywords=software+free+books+ruby'
      },

      { title:'Html: HTML & CSS: For Beginners: Your Step by Step Guide to Easily HtmL & Css Programming in 7 Days ',
        author:'iCode Academy',
        image:'https://images-na.ssl-images-amazon.com/images/I/51aNrxrIdtL.jpg',
        synopsis:"This book will help you understand HTML's syntax and semantics, which will allow you to create a website completely from scratch",
        url:'https://www.amazon.com/Html-Beginners-Guide-Easily-Programming-ebook/dp/B01MR5V15T/ref=sr_1_5?ie=UTF8&qid=1531699274&sr=8-5&keywords=software+css+free+books'
      },

      { title:'JavaScript: JavaScript Awesomeness Book (Awesomeness Books 3)',
        author:'Gilad Tsur Mayer',
        image:'https://images-na.ssl-images-amazon.com/images/I/416TmWJZ2bL.jpg',
        synopsis:'By the end of the book, you will have a rock solid knowledge of all Javascript building blocks such as: Javascript Variables, Javascript Functions, Javascript If Statement, Javascript Form Validation, And many many more…',
        url:"https://www.amazon.com/JavaScript-Awesomeness-Book-Books-ebook/dp/B01NAN9GS6/ref=sr_1_9?ie=UTF8&qid=1531699361&sr=8-9&keywords=software+javascript+free+books"
      },
    ]

  },
  template: `
    <div>
        <book-card
        v-for="(book, index) in books"
        v-bind:key="index"
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:image="book.image"
        v-bind:synopsis="book.synopsis"
        v-bind:url="book.url"
        >
      </book-card>
    </div>
  `
})

new Vue({
  el: '#app2',
    data: {
      peliculas: [
        { title:'The Incredibles 2',
          author:'Brad Bird',
          image:'https://otakukart.com/wp-content/uploads/2018/04/The-Incredibles-2-release-date.jpg',
          synopsis:"While the Parr family has accepted its collective calling as superheroes, the fact remains that their special heroism is still illegal. After they are arrested after unsuccessfully trying to stop the Underminer, their future seems bleak. However, the wealthy Deavor siblings of Devtech offer new hope with a bold project to rehabilitate the public image and legal status of Supers, with Elastigirl being assigned on point to be the shining example. Now having agreed for now to stay at home to care of the kids, Mr. Incredible finds domestic life a daunting challenge, especially with baby Jack-Jack's newly emerged powers making him almost impossible to manage. However, Elastigirl soon has her own concerns dealing with the menace of a new supervillain, Screenslaver, who is wreaking havoc with his mind control abilities. Now, Elastigirl must solve the mystery of this enemy, who has malevolent designs on the world with the Parr family and friends key targets of this evil.",
          url:'https://www.youtube.com/watch?v=i5qOzqD9Rms'
        },
      ]
    },

    template: `
      <div>
          <book-card
          v-for="(pelicula, index) in peliculas"
          v-bind:key="index"
          v-bind:title="pelicula.title"
          v-bind:author="pelicula.author"
          v-bind:image="pelicula.image"
          v-bind:synopsis="pelicula.synopsis"
          v-bind:url="pelicula.url"
          >
        </book-card>
      </div>
    `
})
