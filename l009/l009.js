/*
a thew things that I don't understand tho:
1) when is it normal to add "handle" like in: function handleAnimalAdd() { (...)
2) return `${emoji} ${text}`;  --> I get explain everything: return, '', $, when to use () and when {}
3) if (input.value.trim() !== "") { --> I only understand the "if" but not when and how many "=" u need or value.trim() or the whole: (input.value.trim() !== ""
4) I forgot what appendChild means
5) pls explain to me arrwo functions with 2 simple examples.

ANSWERS:
1) wenn ein EVENT passiert (z.B "click")
2) '' erlaubt es variabeln einzufügen --> 
function greet(name) {
  return `Hello ${name}!`; // Backticks, ${variable}
}
greet("Alice"); // Returns "Hello Alice!"

3) 
"  cat ".trim() //--> becomes "cat"  --> nimmt spaces weg
nutz einfach "===" oder "!=="      --> JS it is what it is!!!!!!!!

4) 
const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "dog";

list.appendChild(newItem);


-->

// HTML before: <ul id="list"></ul>

const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "Dog";

list.appendChild(newItem);

// HTML after: <ul id="list"><li>Dog</li></ul>         //Fehler DeepSeek --> <li> in <ul>

5) 
Arrowfunctions
function double(x) {
    return x*2;
    }

const double => x => 
    x*2;


function add(a,b) {return a+b; }

const add = (a, b) => return a+b;


function fortyTwo() {return 42;}

const fortyTwo = () => return 42;

*/

/*
You click → handleAnimalAdd (Brick 2) runs

It calls addAnimal (Brick 4)

Which calls updateAnimalList (Brick 3)

Which uses makeEmojiText (Brick 1)
*/

//-----------------------------------------------------------


let posts = [
  { 
    title: "First Day in Berlin", 
    content: "Saw the Brandenburg Gate and ate currywurst!",
    likes: 0
  }];


function renderPosts() {
  const container = document.getElementById('postsContainer');
  //container ist deine variable
  //--> postContainer zu container gemacht
  container.innerHTML = '';
  //^  setzt inhalt eifnach auf leeren string === löscht alles
  // 1x= --> 

  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <button onclick="likePost('${post.title}')">❤️ ${post.likes}</button>
      `;
      container.appendChild(postElement);
  });
}


function addPost() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;

  if (title.trim() && content.trim()) {
      posts.push({
          title,
          content,
          likes: 0
      });
      renderPosts(); // Update display
      // Clear inputs
      document.getElementById('postTitle').value = '';
      document.getElementById('postContent').value = '';
  }
}

// Attach to button
document.getElementById('addPostBtn').addEventListener('click', addPost);

function likePost(postTitle) {
  const post = posts.find(p => p.title === postTitle);
  if (post) {
      post.likes++;
      renderPosts(); // Refresh display
  }
}

// Show existing posts on load
renderPosts();

/*
<button onclick="deletePost('${post.title}')">🗑️ Delete</button>

function deletePost(postTitle) {
    posts = posts.filter(p => p.title !== postTitle);
    renderPosts();
}
*/